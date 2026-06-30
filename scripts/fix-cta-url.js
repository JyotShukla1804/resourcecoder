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

async function fixUrls() {
  const { data: pages, error: fetchErr } = await supabase.from('pages').select('id, slug, content');
  if (fetchErr) {
    console.error('Error fetching pages:', fetchErr);
    return;
  }

  for (const page of pages) {
    let updated = false;
    const content = page.content || {};
    
    if (content.hero && content.hero.primaryCtaUrl === 'button') {
      content.hero.primaryCtaUrl = '#contact-form';
      updated = true;
    }
    if (content.hero && content.hero.secondaryCtaUrl === 'button') {
      content.hero.secondaryCtaUrl = '#contact-form';
      updated = true;
    }

    if (updated) {
      console.log(`Updating page: ${page.slug}...`);
      const { error: updateErr } = await supabase
        .from('pages')
        .update({ content })
        .eq('id', page.id);
        
      if (updateErr) {
        console.error(`Error updating ${page.slug}:`, updateErr);
      } else {
        console.log(`Successfully updated CTA URL to #contact-form for page ${page.slug}!`);
      }
    }
  }
}

fixUrls();
