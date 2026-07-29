import { createClient } from "@supabase/supabase-js"

const SUPBASE_URL = process.env.SUPBASE_URL;

const API_KEY = process.env.API_KEY;

export const client = createClient(SUPBASE_URL,API_KEY);






