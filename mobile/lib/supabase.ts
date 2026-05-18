import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqthajxqngnpkiafynoz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdGhhanhxbmducGtpYWZ5bm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMDUzNzEsImV4cCI6MjA5Mzg4MTM3MX0.VeISE2RY84LsHJSLPaeYLKuHGMrmZSaTozqibMLJlFo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
