import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

// Only create a client if we have a valid-looking URL to prevent app crashes during setup
const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

const finalUrl = isValidUrl(supabaseUrl) ? supabaseUrl : "https://placeholder-url.supabase.co";

export const supabase = createClient(finalUrl, supabaseAnonKey);
