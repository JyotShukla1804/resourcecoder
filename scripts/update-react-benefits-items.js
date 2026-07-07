const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  const { data: existing, error } = await supabase.from('pages').select('*').eq('slug', 'react-js-developer').maybeSingle();
  if (error || !existing) {
    console.error("Not found or error:", error);
    return;
  }

  const content = existing.content;

  // Sec 02: BENEFITS ("Why Hire")
  const whyHireBlock = content.blocks.find(b => b.type === 'benefits' && b.title.includes('Why Hire'));
  if (whyHireBlock) {
    whyHireBlock.subtitle = "Skip the six-month hiring process. Get a production-ready React.js developer this month.";
    whyHireBlock.paragraph = "What You Get";
    whyHireBlock.items = [
      {
        "label": "40–60% Lower Cost Than Local Hiring",
        "text": "A dedicated React.js developer through ResourceCoder costs a fraction of a comparable in-house hire in the UK, US, or UAE — with no benefits, payroll tax, or recruiter commission added on top."
      },
      {
        "label": "Dedicated Ownership, Not Shared Attention",
        "text": "Your developer is a full-time extension of your in-house engineering team. They work exclusively on your codebase and roadmap."
      },
      {
        "label": "Onboarding Within a Week",
        "text": "Skip the portfolio screening rounds. We provide a shortlist of highly qualified, pre-vetted React developers within 48 hours, ready to start committing code within a week."
      },
      {
        "label": "Scale Monthly, Not by Contract Length",
        "text": "Add a second developer for a critical launch sprint, or scale back capacity after a major release. Our transparent monthly model means you adapt to changing roadmaps without long-term lock-ins."
      }
    ];
  }

  const { error: updateError } = await supabase.from('pages').update({ content }).eq('id', existing.id);
  if (updateError) {
    console.error("Error updating:", updateError);
  } else {
    console.log("Successfully updated react-js-developer benefits block!");
  }
}
run();
