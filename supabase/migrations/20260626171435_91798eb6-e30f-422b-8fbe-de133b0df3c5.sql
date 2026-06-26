REVOKE EXECUTE ON FUNCTION public.increment_site_visit() FROM anon, authenticated;

CREATE POLICY "Site visit totals are backend only"
ON public.site_visit_totals
FOR SELECT
TO anon, authenticated
USING (false);