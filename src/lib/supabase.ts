import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const hasSupabase = Boolean(url && anon);
export const supabase = hasSupabase ? createClient(url, anon) : null;

export type ApplicationPayload = {
  full_name: string;
  phone: string;
  email?: string;
  specialty?: string;
  education_base?: string;
  language?: string;
  message?: string;
};

export async function submitApplication(payload: ApplicationPayload) {
  if (!supabase) return { ok: false, demo: true };
  const { error } = await supabase.from('applications').insert(payload);
  return { ok: !error, error };
}
