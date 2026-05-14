import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'SIZIŇ_NEXTJS_PROÝEKTDÄKI_SUPABASE_URL';
const supabaseAnonKey = 'SIZIŇ_NEXTJS_PROÝEKTDÄKI_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
