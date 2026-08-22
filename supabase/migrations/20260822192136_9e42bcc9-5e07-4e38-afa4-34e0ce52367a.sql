DO $$
DECLARE p record;
BEGIN
  FOR p IN
    SELECT policyname, cmd FROM pg_policies
    WHERE schemaname = 'storage' AND tablename = 'objects'
      AND qual || ' ' || coalesce(with_check,'') LIKE '%academic-calendar%'
  LOOP
    IF p.cmd <> 'SELECT' THEN
      EXECUTE format('DROP POLICY %I ON storage.objects', p.policyname);
    END IF;
  END LOOP;
END $$;