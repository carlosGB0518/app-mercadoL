// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fajjbesrjafqdsbthwch.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhampiZXNyamFmcWRzYnRod2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NTI5ODYsImV4cCI6MjA2NDEyODk4Nn0._yXG1R3kID09V4B2-2S3dhVU6gS0PLGnAbRgPSoLbT4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
