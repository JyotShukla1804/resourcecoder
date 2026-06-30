const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Parse .env manually from the project root
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.error("Error: .env file not found at project root.");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || '';
    if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
      value = value.replace(/^"|"/g, '');
    }
    env[key] = value.trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
  console.log("Connecting to Supabase at:", supabaseUrl);
  
  // 1. Insert row in pages (Step 2)
  console.log("Inserting/Verifying page 'Hire ReactJS Developer'...");
  const { data: page, error: pageErr } = await supabase
    .from("pages")
    .upsert({
      title: "Hire ReactJS Developer",
      slug: "hire-reactjs-developer"
    }, { onConflict: "slug" })
    .select()
    .single();

  if (pageErr) {
    console.error("Error inserting page:", pageErr.message);
    console.log("\n[!] IMPORTANT: Please ensure you have created the 'pages' table in Supabase first.");
    return;
  }

  console.log("Page verified/inserted successfully! ID:", page.id);

  // Check if a section already exists for this page to prevent duplicate seeds
  const { data: existingSections } = await supabase
    .from("sections")
    .select("id")
    .eq("page_id", page.id);

  if (existingSections && existingSections.length > 0) {
    console.log("Sections already exist for this page. Skipping seed insertion.");
    console.log("Database is ready! You can now edit sections in the Admin Console dashboard.");
    return;
  }

  // 2. Insert row in sections (Step 7)
  console.log("Inserting first section 'hero'...");
  const { data: section, error: secErr } = await supabase
    .from("sections")
    .insert({
      page_id: page.id,
      type: "hero",
      order_no: 1
    })
    .select()
    .single();

  if (secErr) {
    console.error("Error inserting section:", secErr.message);
    console.log("\n[!] IMPORTANT: Please ensure you have created the 'sections' table in Supabase first.");
    return;
  }

  console.log("Section inserted successfully! ID:", section.id);

  // 3. Insert row in section_content (Step 8)
  console.log("Inserting initial Editor.js blocks to section_content...");
  const { data: content, error: contentErr } = await supabase
    .from("section_content")
    .insert({
      section_id: section.id,
      content: {
        blocks: [
          {
            type: "header",
            data: { text: "Hire ReactJS Developer", level: 2 }
          },
          {
            type: "paragraph",
            data: { text: "We build scalable, high-performance web applications using industry best practices and clean, maintainable code structures." }
          }
        ]
      }
    })
    .select()
    .single();

  if (contentErr) {
    console.error("Error inserting section content:", contentErr.message);
    console.log("\n[!] IMPORTANT: Please ensure you have created the 'section_content' table in Supabase first.");
    return;
  }

  console.log("Initial section content inserted successfully! ID:", content.id);
  console.log("All database seed steps completed successfully!");
}

run();
