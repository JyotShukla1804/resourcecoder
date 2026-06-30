import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

function logDebug(message: string) {
  try {
    const logPath = path.join(process.cwd(), "debug.log");
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`, "utf8");
  } catch (e) {
    console.error("Failed to write to debug.log:", e);
  }
}

export async function checkAuth(): Promise<boolean> {
  logDebug("checkAuth: Started verification");
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_session")?.value;
    if (!token) {
      logDebug("checkAuth: No admin_session cookie found");
      console.error("checkAuth: No admin_session cookie found");
      return false;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      logDebug("checkAuth: Supabase URL or Anon Key is missing in env variables");
      console.error("checkAuth: Supabase URL or Anon Key is missing in env variables");
      return false;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Verify the access token with Supabase Auth
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      logDebug(`checkAuth: getUser failed - error: ${error.message} (status: ${error.status})`);
      console.error("checkAuth: getUser failed", error.message);
      return false;
    }
    if (!user) {
      logDebug("checkAuth: No user returned for token");
      console.error("checkAuth: No user returned for token");
      return false;
    }

    logDebug(`checkAuth: Authentication successful for user ${user.id} / ${user.email}`);
    return true;
  } catch (error: any) {
    logDebug(`checkAuth: Exception caught - ${error.message || error}`);
    console.error("checkAuth: Exception caught", error.message || error);
    return false;
  }
}

