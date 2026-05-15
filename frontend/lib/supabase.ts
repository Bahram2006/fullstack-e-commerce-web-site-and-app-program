import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * 1. Client Tarapy üçin (Browser Component-lerde ulanmak üçin)
 */
export const createBrowserClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
};

/**
 * 2. Server Tarapy üçin (Server Components we Server Actions üçin)
 * Siziň ýalňyşlygyňyz şu export bolmandygy üçin çykýardy.
 */
export const createServerClient = async () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false, // Server tarapynda keş gatyşmazlygy üçin false bolmaly
    },
  });
};
