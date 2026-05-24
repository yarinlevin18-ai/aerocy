// =====================================================
// AeroCy CRM — Supabase configuration
// =====================================================
// FILL THESE IN AFTER YOU CREATE YOUR SUPABASE PROJECT.
// See CRM_SETUP.md in this folder for step-by-step.
// =====================================================

// Your Supabase project URL (looks like: https://abcdefgh.supabase.co)
const SUPABASE_URL = 'https://gsipbnpmrblwtjlrroft.supabase.co';

// Your Supabase anon (public) key — safe to expose in client-side code.
// It is NOT the service_role key. Never put the service_role key here.
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzaXBibnBtcmJsd3RqbHJyb2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzgzMDAsImV4cCI6MjA5NTExNDMwMH0.6rpmo0IWin7zMKjvYmdM8Mbdb3RwsyhzhlEoZNhWaME';

// =====================================================
// You should not need to change anything below this line.
// =====================================================
window.AEROCY_CRM = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
  ready: SUPABASE_URL !== 'PASTE_YOUR_SUPABASE_URL_HERE'
       && SUPABASE_ANON_KEY !== 'PASTE_YOUR_SUPABASE_ANON_KEY_HERE'
};
