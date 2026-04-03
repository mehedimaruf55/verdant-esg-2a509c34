
-- Create app roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Create insights table
CREATE TABLE public.insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  body TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL,
  cover_image_url TEXT,
  author TEXT NOT NULL DEFAULT 'Verdant ESG',
  tags TEXT[] DEFAULT '{}',
  reading_time_minutes INTEGER DEFAULT 5,
  published BOOLEAN NOT NULL DEFAULT false,
  featured BOOLEAN NOT NULL DEFAULT false,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Public can read published insights
CREATE POLICY "Anyone can read published insights" ON public.insights
  FOR SELECT USING (published = true);

-- Admins can do everything
CREATE POLICY "Admins can manage insights" ON public.insights
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_insights_updated_at
  BEFORE UPDATE ON public.insights
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for insight cover images
INSERT INTO storage.buckets (id, name, public) VALUES ('insight-covers', 'insight-covers', true);

CREATE POLICY "Anyone can view insight covers" ON storage.objects
  FOR SELECT USING (bucket_id = 'insight-covers');

CREATE POLICY "Admins can upload insight covers" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'insight-covers' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update insight covers" ON storage.objects
  FOR UPDATE USING (bucket_id = 'insight-covers' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete insight covers" ON storage.objects
  FOR DELETE USING (bucket_id = 'insight-covers' AND public.has_role(auth.uid(), 'admin'));
