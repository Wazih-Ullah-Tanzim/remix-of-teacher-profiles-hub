DROP POLICY IF EXISTS "Anyone can upload academic calendar" ON storage.objects;

DROP POLICY IF EXISTS "Block client reads of admission applications" ON public.admission_applications;
CREATE POLICY "Block client reads of admission applications"
ON public.admission_applications
FOR SELECT
TO anon, authenticated
USING (false);