const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
    // Get the recently updated one
    const { data: source } = await supabase.from('pages').select('content').eq('slug', 'hire-reactjs-developer').single();
    if (!source) {
        console.error("Could not find hire-reactjs-developer");
        return;
    }

    // Overwrite the one linked in the navbar
    const { error } = await supabase.from('pages').update({ content: source.content }).eq('slug', 'react-js-developer');
    if (error) {
        console.error("Failed to copy content to react-js-developer:", error);
    } else {
        console.log("Successfully synced hire-reactjs-developer to react-js-developer!");
    }
}

run().catch(console.error);
