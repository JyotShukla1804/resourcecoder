-- 1. Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = now();
   RETURN NEW;
END;
$$ language 'plpgsql';

-- 2. Create the pages table to store all page-related dynamic fields, content sections, and SEO tags
CREATE TABLE IF NOT EXISTS pages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL, -- e.g., 'home', 'about', 'hire-team/react-developer'
  title text NOT NULL, -- The main admin display / page title
  seo jsonb NOT NULL DEFAULT '{"metaTitle": "", "metaDescription": "", "keywords": ""}'::jsonb, -- SEO optimization fields
  content jsonb NOT NULL DEFAULT '{}'::jsonb, -- Custom layout section fields (pricing, lists, dynamic FAQs)
  editor_blocks jsonb NOT NULL DEFAULT '[]'::jsonb, -- Rich-text paragraphs/content via Editor.js
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 3. Create the trigger to auto-update updated_at on save
CREATE OR REPLACE TRIGGER update_pages_updated_at
BEFORE UPDATE ON pages
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 4. Create texts table for loose key-value pairs
CREATE TABLE IF NOT EXISTS texts (
  name text PRIMARY KEY,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE OR REPLACE TRIGGER update_texts_updated_at
BEFORE UPDATE ON texts
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- 5. Create faqs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  position integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 6. Create pricing table
CREATE TABLE IF NOT EXISTS pricing (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  price text NOT NULL,
  unit text,
  position integer NOT NULL,
  features text[] DEFAULT '{}'::text[],
  badge text,
  description text,
  cta_text text,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Disable Row-Level Security (RLS) to allow read/write operations from the client-side anon key
ALTER TABLE texts DISABLE ROW LEVEL SECURITY;
ALTER TABLE faqs DISABLE ROW LEVEL SECURITY;
ALTER TABLE pricing DISABLE ROW LEVEL SECURITY;

