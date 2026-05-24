# AeroCy CRM — Supabase Setup

5 minutes. No coding. Follow in order.

---

## Step 1 — Create a Supabase account

1. Go to [supabase.com](https://supabase.com)
2. Click **Start your project** → sign up with GitHub or email (free, no credit card)
3. After login, click **New Project**
4. Fill in:
   - **Name**: `AeroCy`
   - **Database password**: generate a strong one and **save it somewhere safe** (you'll likely never need it again, but Supabase requires one)
   - **Region**: pick the closest to you / your users
   - **Pricing plan**: Free
5. Click **Create new project**. Wait ~1 minute for it to provision.

---

## Step 2 — Create the `leads` table

1. Once the project is ready, in the left sidebar click the **SQL Editor** icon (looks like `</>`).
2. Click **+ New query**.
3. Paste the entire SQL block below into the editor:

```sql
-- ============================================================
-- AeroCy CRM — leads table + Row Level Security policies
-- ============================================================

create table public.leads (
  id              bigserial primary key,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  name            text not null,
  company         text,
  email           text not null,
  phone           text,
  message         text,
  status          text not null default 'new'
                  check (status in ('new', 'contacted', 'qualified', 'closed')),
  notes           text
);

-- Index for searching by date (dashboard sort)
create index leads_created_at_idx on public.leads (created_at desc);

-- Auto-update updated_at on any UPDATE
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at := now();
  return new;
end;
$$ language plpgsql;

create trigger leads_set_updated_at
  before update on public.leads
  for each row
  execute function public.set_updated_at();

-- ============================================================
-- Row Level Security: anyone can INSERT a lead (contact form),
-- only authenticated users can SELECT / UPDATE / DELETE leads.
-- ============================================================

alter table public.leads enable row level security;

-- Allow public to submit new leads via the contact form
create policy "Public can submit leads"
  on public.leads
  for insert
  with check (true);

-- Only logged-in users can read leads
create policy "Authenticated can read leads"
  on public.leads
  for select
  using (auth.role() = 'authenticated');

-- Only logged-in users can update leads (status, notes)
create policy "Authenticated can update leads"
  on public.leads
  for update
  using (auth.role() = 'authenticated');

-- Only logged-in users can delete leads
create policy "Authenticated can delete leads"
  on public.leads
  for delete
  using (auth.role() = 'authenticated');
```

4. Click **Run** (bottom right, or Ctrl/Cmd+Enter). You should see "Success".

---

## Step 3 — Create your dashboard login user

This is the email + password you'll use to log into the AeroCy dashboard.

1. In the left sidebar, click the **Authentication** icon (person silhouette).
2. Click **Users** tab → click **Add user** → **Create new user**.
3. Enter your email + a strong password. **IMPORTANT:** check **Auto Confirm User** so you can log in immediately without an email-verification step.
4. Click **Create user**.

You'll log into the dashboard with these credentials.

---

## Step 4 — Copy your project URL + anon key

1. In the left sidebar, click the **Settings** icon (gear) at the bottom.
2. Click **API** in the inner sidebar.
3. You'll see two values you need:
   - **Project URL** — something like `https://abcdefgh.supabase.co`
   - **Project API keys** → **anon / public** — a long string starting with `eyJ...`

4. Open `crm-config.js` in your AeroCy folder and paste both values where indicated:

```js
const SUPABASE_URL = 'https://abcdefgh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Save the file.

> ⚠️ The **anon key** is safe to put in client-side code — it only allows the actions your Row Level Security policies permit (which is INSERT for the public contact form, and SELECT/UPDATE/DELETE only for logged-in users). **Never** use the `service_role` key in the browser — that one bypasses all security.

---

## Step 5 — Test it

1. **Test the form:** open `contact.html` in your browser. Fill it in and submit. You should see a success message.
2. **Check it landed:** in Supabase → **Table Editor** → `leads` table — you should see your submission as a row.
3. **Test the dashboard:** open `dashboard.html`. Log in with the email + password from Step 3. You should see your test lead in the table.

If anything fails, tell me what you see and I'll debug.

---

## Optional: lock down CORS (production)

By default Supabase allows requests from any origin. Once your site is live on Vercel with a real URL:

1. Supabase → **Settings** → **API** → **Allowed Origins**
2. Add your Vercel URL (e.g. `https://aerocy.io`) and remove `*` if it's there.

This stops random sites from being able to call your API.
