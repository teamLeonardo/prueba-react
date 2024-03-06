
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const SUPA = createClient('https://yldoxpihzekotgmgqlrv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZG94cGloemVrb3RnbWdxbHJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTY1NTEzMSwiZXhwIjoyMDI1MjMxMTMxfQ.XfCdeKcMaLjGGojhTAIQm0yjxxES0TFCPExypu-72Pk')