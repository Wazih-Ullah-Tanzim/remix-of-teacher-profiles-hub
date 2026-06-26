REVOKE ALL ON FUNCTION public.increment_site_visit() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.increment_site_visit() TO service_role;