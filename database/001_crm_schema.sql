-- Coal River Standard CRM: proposed PostgreSQL schema, NOT applied to a database.
-- Server-side owner-only access. Never expose service credentials to browsers.
BEGIN;
CREATE TABLE IF NOT EXISTS clients (
 id text PRIMARY KEY CHECK (id ~ '^CRS-C[0-9]{4,}$'),
 legal_name text NOT NULL, display_name text, industry text,
 status text NOT NULL DEFAULT 'lead' CHECK (status IN ('lead','qualified','active','paused','completed','archived')),
 source text, notes text,
 created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS contacts (
 id text PRIMARY KEY CHECK (id ~ '^CRS-CT[0-9]{4,}$'),
 client_id text NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
 full_name text NOT NULL, role text, email text, phone text,
 preferred_channel text CHECK (preferred_channel IN ('email','phone','other')),
 is_primary boolean NOT NULL DEFAULT false,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS one_primary_contact_per_client ON contacts(client_id) WHERE is_primary;
CREATE TABLE IF NOT EXISTS sites (
 id text PRIMARY KEY CHECK (id ~ '^CRS-S[0-9]{4,}$'),
 client_id text NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
 hostname text, hosting_owner text, analytics_provider text, analytics_property_ref text,
 status text NOT NULL DEFAULT 'planned', created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS projects (
 id text PRIMARY KEY CHECK (id ~ '^CRS-[0-9]{4}-[0-9]{3,}$'),
 client_id text NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
 site_id text REFERENCES sites(id) ON DELETE SET NULL,
 title text NOT NULL, package text, quoted_amount_cents bigint CHECK (quoted_amount_cents >= 0),
 status text NOT NULL DEFAULT 'inquiry' CHECK (status IN ('inquiry','quoted','approved','deposit_due','in_progress','client_review','launch_approved','delivered','cancelled')),
 start_date date, target_date date, completed_date date,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS activities (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 client_id text NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
 project_id text REFERENCES projects(id) ON DELETE SET NULL,
 happened_at timestamptz NOT NULL DEFAULT now(),
 channel text NOT NULL CHECK (channel IN ('email','phone','form','meeting','internal','other')),
 summary text NOT NULL, next_action text, due_at timestamptz, completed_at timestamptz
);
CREATE INDEX IF NOT EXISTS activities_due_idx ON activities(due_at) WHERE completed_at IS NULL;
CREATE TABLE IF NOT EXISTS document_references (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 client_id text NOT NULL REFERENCES clients(id) ON DELETE RESTRICT,
 project_id text REFERENCES projects(id) ON DELETE SET NULL,
 document_type text NOT NULL, version text NOT NULL,
 private_storage_ref text NOT NULL, approved_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS invoice_references (
 id text PRIMARY KEY CHECK (id ~ '^CRS-I[0-9]{4}-[0-9]{3,}$'),
 project_id text NOT NULL REFERENCES projects(id) ON DELETE RESTRICT,
 provider text, provider_invoice_ref text,
 total_cents bigint NOT NULL CHECK (total_cents >= 0),
 paid_cents bigint NOT NULL DEFAULT 0 CHECK (paid_cents >= 0),
 status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','sent','part_paid','paid','void','refunded')),
 due_date date, CHECK (paid_cents <= total_cents)
);
CREATE TABLE IF NOT EXISTS reporting_periods (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 site_id text NOT NULL REFERENCES sites(id) ON DELETE RESTRICT,
 period_start date NOT NULL, period_end date NOT NULL,
 timezone text NOT NULL DEFAULT 'America/New_York',
 visitors bigint CHECK (visitors >= 0), visits bigint CHECK (visits >= 0),
 pageviews bigint CHECK (pageviews >= 0), inquiries bigint CHECK (inquiries >= 0),
 source_notes text, data_quality_notes text, review_status text NOT NULL DEFAULT 'draft'
 CHECK (review_status IN ('draft','reviewed','shared')),
 UNIQUE(site_id,period_start,period_end), CHECK (period_end >= period_start)
);
-- RLS enabled; no permissive policies. Trusted server only until auth is designed.
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_references ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_references ENABLE ROW LEVEL SECURITY;
ALTER TABLE reporting_periods ENABLE ROW LEVEL SECURITY;
COMMIT;
