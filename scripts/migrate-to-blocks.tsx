const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

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

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function migrate() {
  console.log("Fetching pages for migration...");
  const { data: pages, error: fetchErr } = await supabase.from('pages').select('id, slug, content');
  if (fetchErr) {
    console.error('Error fetching pages:', fetchErr);
    return;
  }

  for (const page of pages) {
    const content = page.content || {};
    if (content.blocks) {
      console.log(`Page '${page.slug}' is already migrated.`);
      continue;
    }

    console.log(`Migrating page '${page.slug}'...`);
    const blocks = [];

    // Map old static sections to dynamic blocks list in standard layout order
    if (content.hero) {
      blocks.push({ type: "hero", ...content.hero });
    }
    if (content.intro) {
      blocks.push({ type: "benefits", ...content.intro });
    }
    if (content.technologies) {
      blocks.push({ type: "services", ...content.technologies });
    }
    if (content.pricing) {
      blocks.push({ type: "pricing", ...content.pricing });
    }
    if (content.process) {
      blocks.push({ type: "interview", ...content.process });
    }
    if (content.useCases) {
      blocks.push({ type: "stories", ...content.useCases });
    }
    if (content.frameworkDetails) {
      blocks.push({ type: "expertise", ...content.frameworkDetails });
    }
    if (content.augmentation) {
      blocks.push({ type: "augmentation", ...content.augmentation });
    }
    if (content.faqs) {
      blocks.push({ type: "faqs", ...content.faqs });
    }
    if (content.cta) {
      blocks.push({ type: "cta", ...content.cta });
    }

    const newContent = { blocks };
    const { error: updateErr } = await supabase
      .from('pages')
      .update({ content: newContent })
      .eq('id', page.id);

    if (updateErr) {
      console.error(`Error migrating page '${page.slug}':`, updateErr.message);
    } else {
      console.log(`Successfully migrated page '${page.slug}' to dynamic blocks format!`);
    }
  }

  console.log("Migration complete!");
}

migrate();
