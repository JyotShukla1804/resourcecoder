const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let val = match[2] || '';
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.substring(1, val.length - 1);
    }
    env[match[1]] = val.trim();
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function testPost() {
  console.log("Signing in to Supabase Auth...");
  const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({
    email: env.ADMIN_USERNAME,
    password: env.ADMIN_PASSWORD
  });

  if (authErr) {
    console.error("Sign-in failed:", authErr.message);
    return;
  }

  const token = authData.session.access_token;
  console.log("Sign-in successful. Access Token obtained.");

  // Make request to local Next.js POST endpoint
  // We can fetch http://localhost:3000/api/admin/pages using standard fetch in Node 18+
  console.log("Sending POST request to http://localhost:3000/api/admin/pages...");
  try {
    const res = await fetch("http://localhost:3000/api/admin/pages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cookie": `admin_session=${token}`
      },
      body: JSON.stringify({
        title: "Test API Page Add",
        slug: "test-api-page-add-slug",
        content: { blocks: [] }
      })
    });

    const status = res.status;
    console.log("Response Status:", status);
    
    const bodyText = await res.text();
    console.log("Response Body:", bodyText);

    if (res.ok) {
      // Clean up the created page directly in the DB
      const adminSupabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
      await adminSupabase.from('pages').delete().eq('slug', 'test-api-page-add-slug');
      console.log("Cleaned up created page.");
    }
  } catch (err) {
    console.error("Fetch request failed:", err.message);
  }
}

testPost();
