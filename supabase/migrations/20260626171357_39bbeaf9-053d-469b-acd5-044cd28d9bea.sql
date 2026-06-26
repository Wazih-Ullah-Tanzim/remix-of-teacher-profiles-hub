CREATE TABLE public.admission_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  father_name text NOT NULL,
  mother_name text NOT NULL,
  birth_date date NOT NULL,
  previous_school text,
  session text NOT NULL DEFAULT '2026-2027',
  phone text NOT NULL,
  guardian_email text,
  full_address text NOT NULL,
  city text NOT NULL,
  country text NOT NULL,
  message text,
  website text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT admission_session_fixed CHECK (session = '2026-2027'),
  CONSTRAINT admission_student_name_len CHECK (char_length(student_name) BETWEEN 2 AND 120),
  CONSTRAINT admission_father_name_len CHECK (char_length(father_name) BETWEEN 2 AND 120),
  CONSTRAINT admission_mother_name_len CHECK (char_length(mother_name) BETWEEN 2 AND 120),
  CONSTRAINT admission_phone_len CHECK (char_length(phone) BETWEEN 7 AND 30),
  CONSTRAINT admission_address_len CHECK (char_length(full_address) BETWEEN 8 AND 500),
  CONSTRAINT admission_city_len CHECK (char_length(city) BETWEEN 2 AND 80),
  CONSTRAINT admission_country_len CHECK (char_length(country) BETWEEN 2 AND 80)
);

GRANT INSERT ON public.admission_applications TO anon;
GRANT INSERT ON public.admission_applications TO authenticated;
GRANT ALL ON public.admission_applications TO service_role;

ALTER TABLE public.admission_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit admission applications"
ON public.admission_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (website IS NULL OR website = '');

CREATE TABLE public.site_visit_totals (
  id smallint PRIMARY KEY DEFAULT 1,
  total_visits bigint NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT site_visit_singleton CHECK (id = 1)
);

GRANT ALL ON public.site_visit_totals TO service_role;

ALTER TABLE public.site_visit_totals ENABLE ROW LEVEL SECURITY;

INSERT INTO public.site_visit_totals (id, total_visits) VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.increment_site_visit()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_total bigint;
BEGIN
  UPDATE public.site_visit_totals
  SET total_visits = total_visits + 1,
      updated_at = now()
  WHERE id = 1
  RETURNING total_visits INTO new_total;

  IF new_total IS NULL THEN
    INSERT INTO public.site_visit_totals (id, total_visits)
    VALUES (1, 1)
    RETURNING total_visits INTO new_total;
  END IF;

  RETURN new_total;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_site_visit() TO anon, authenticated, service_role;