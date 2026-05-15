create table public.signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text,
  source text not null default 'footer',
  created_at timestamptz not null default now()
);

alter table public.signups enable row level security;

create policy "Anyone can submit a signup"
  on public.signups for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 100
    and char_length(email) between 3 and 255
    and (message is null or char_length(message) <= 500)
  );

create index signups_created_at_idx on public.signups (created_at desc);
create index signups_email_idx on public.signups (email);