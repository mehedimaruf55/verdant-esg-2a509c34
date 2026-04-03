
-- Drop the overly permissive storage policies for project-covers
DROP POLICY IF EXISTS "Admins can upload project covers" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update project covers" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete project covers" ON storage.objects;

-- Recreate with proper admin role checks
CREATE POLICY "Admins can upload project covers"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'project-covers'
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update project covers"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'project-covers'
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete project covers"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'project-covers'
  AND has_role(auth.uid(), 'admin'::app_role)
);
