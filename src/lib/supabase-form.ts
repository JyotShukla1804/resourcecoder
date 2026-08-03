import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_FORM_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_FORM_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Warning: Form Supabase environment variables are missing from your configuration.");
}

export const supabaseForm = createClient(
  supabaseUrl || "",
  supabaseAnonKey || ""
);
