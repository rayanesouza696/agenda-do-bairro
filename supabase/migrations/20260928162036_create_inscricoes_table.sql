/*
# Create inscricoes table for workshop enrollments

1. New Tables
- `inscricoes` stores workshop enrollment submissions.
- `id`, `oficina_id`, `oficina_titulo`, `nome`, `email`, `telefone`, `created_at`.

2. Security
- Enable RLS on `inscricoes`.
- Single-tenant app without sign-in uses anon and authenticated policies.
- Public INSERT and SELECT support the enrollment form.

3. Indexes
- Indexes on `oficina_id` and `email`.
*/
CREATE TABLE IF NOT EXISTS inscricoes (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), oficina_id text NOT NULL, oficina_titulo text NOT NULL, nome text NOT NULL, email text NOT NULL, telefone text NOT NULL, created_at timestamptz DEFAULT now());
ALTER TABLE inscricoes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "anon_select_inscricoes" ON inscricoes;
CREATE POLICY "anon_select_inscricoes" ON inscricoes FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS "anon_insert_inscricoes" ON inscricoes;
CREATE POLICY "anon_insert_inscricoes" ON inscricoes FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE INDEX IF NOT EXISTS idx_inscricoes_oficina_id ON inscricoes(oficina_id);
CREATE INDEX IF NOT EXISTS idx_inscricoes_email ON inscricoes(email);
