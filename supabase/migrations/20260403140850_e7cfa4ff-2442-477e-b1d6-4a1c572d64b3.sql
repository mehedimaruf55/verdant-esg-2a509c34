
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL,
  cover_image_url TEXT,
  client TEXT,
  location TEXT,
  year TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  published BOOLEAN NOT NULL DEFAULT false,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published projects"
ON public.projects FOR SELECT
USING (published = true);

CREATE POLICY "Admins can manage projects"
ON public.projects FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO storage.buckets (id, name, public) VALUES ('project-covers', 'project-covers', true);

CREATE POLICY "Project cover images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-covers');

CREATE POLICY "Admins can upload project covers"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'project-covers');

CREATE POLICY "Admins can update project covers"
ON storage.objects FOR UPDATE
USING (bucket_id = 'project-covers');

CREATE POLICY "Admins can delete project covers"
ON storage.objects FOR DELETE
USING (bucket_id = 'project-covers');
