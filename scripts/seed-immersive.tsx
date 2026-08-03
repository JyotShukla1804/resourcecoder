const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const hireTeamCategories = [
    { title: "Immersive", roles: ["Virtual Reality Development", "Augmented Reality Development", "Mixed Reality Development", "3D Game Modeling", "3D Game Development"] }
];

const generateRoleSlug = (role) => {
    return role.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const getRoleName = (role) => {
    return role;
};

async function seed() {
    let allRoles = [];
    hireTeamCategories.forEach(cat => cat.roles.forEach(role => allRoles.push(role)));

    for (const role of allRoles) {
        const slug = generateRoleSlug(role);
        const name = getRoleName(role);

        const content = {
            "blocks": [
                {
                    "type": "hero",
                    "title": `Hire Dedicated <br/><span class='bg-gradient-to-r from-[#4B56D2] to-[#4B56D2] bg-clip-text text-transparent'>${name} Experts</span>`,
                    "subtitle": `Build blazing-fast, scalable, and interactive applications with our pre-vetted ${name} experts.`,
                    "description": `Scale your engineering capabilities instantly. Hire a dedicated expert in ${name} as a full-time extension of your team, working in your time zone with zero recruitment overhead—saving you up to 60% compared to local hiring.`,
                    "primaryCta": `Hire ${name} Experts`,
                    "primaryCtaUrl": "#contact-form",
                    "secondaryCta": "View Engagement Models",
                    "secondaryCtaUrl": "#pricing"
                },
                {
                    "type": "benefits",
                    "title": `Why Hire ${name} Experts Through ResourceCoder`,
                    "subtitle": "Seamless integration, superior code quality, and massive cost savings.",
                    "paragraph": "We eliminate the friction of traditional hiring so you can focus on building your product.",
                    "btnText": "Talk to an Expert",
                    "btnUrl": "#contact-form",
                    "items": [
                        { "label": "Cost-Effective Scaling", "text": "Save 40–60% on development costs compared to onshore hiring, without compromising on code architecture or communication." },
                        { "label": "Dedicated Ownership", "text": "Your developer acts as a full-time extension of your in-house team, taking complete ownership of your project's performance and delivering consistent results." },
                        { "label": "Fast Onboarding", "text": `Skip the exhaustive recruitment process. We shortlist pre-vetted ${name} experts within 48 hours, ready to plug directly into your agile workflow.` },
                        { "label": "Flexible Monthly Scaling", "text": "Adapt to changing product roadmaps effortlessly. Scale your team up or down with our transparent monthly billing model and no lock-ins." }
                    ]
                },
                {
                    "type": "services",
                    "title": `What Our ${name} Experts Can Build For You`,
                    "subtitle": "From complex enterprise platforms to high-converting consumer apps, our experts deliver concrete results.",
                    "items": [
                        { "icon": "react", "name": "Custom Enterprise Applications", "description": `Scalable, highly secure, and optimized architectures built from the ground up tailored to your business logic.` },
                        { "icon": "react", "name": "SaaS Platform Development", "description": "High-performance, fluid software-as-a-service products built for thousands of concurrent users and seamless data handling." },
                        { "icon": "react", "name": "API & Third-Party Integrations", "description": "Robust and secure integrations connecting your core application with payment gateways, CRMs, and external data services." },
                        { "icon": "react", "name": "Performance Optimization", "description": `Comprehensive code audits, refactoring, and performance tuning to ensure your infrastructure runs flawlessly.` },
                        { "icon": "react", "name": "Migration & Upgrades", "description": "Seamlessly transition your legacy systems to a modern tech stack with zero downtime and complete data integrity." }
                    ]
                },
                {
                    "type": "expertise",
                    "title": "Skills & Tech Stack",
                    "subtitle": `Our ${name} experts are masters of the modern software ecosystem.`,
                    "items": [
                        { "title": "Core Languages & Frameworks", "items": [`Deep expertise in ${name}`, "Clean code practices", "Modern paradigms"] },
                        { "title": "Architecture & Data Management", "items": ["Microservices", "Event-Driven Architecture", "RESTful APIs", "GraphQL"] },
                        { "title": "Cloud & DevOps", "items": ["AWS, Azure, Google Cloud", "Docker, Kubernetes", "CI/CD deployment pipelines"] },
                        { "title": "Testing & QA", "items": ["Test-Driven Development (TDD)", "Comprehensive unit testing", "End-to-end integration testing"] }
                    ]
                },
                {
                    "type": "pricing",
                    "title": "Engagement Models",
                    "subtitle": "Choose the model that fits your product roadmap and budget.",
                    "bottomCtaText": "Schedule a Developer Interview",
                    "bottomCtaUrl": "#contact-form",
                    "plans": [
                        {
                            "name": "Dedicated Monthly", "unit": "month", "badge": "Recommended", "price": "2880",
                            "description": `A full-time ${name} expert dedicated solely to your projects, acting as a direct extension of your team.`,
                            "cta_text": "Hire Dedicated Developer", "cta_url": "#contact-form", "is_featured": true,
                            "features": ["160 hours per month", "Direct team integration", "Working-hours overlap", "Full IP ownership"]
                        },
                        {
                            "name": "Part-Time Monthly", "unit": "month", "badge": "Flexible", "price": "1440",
                            "description": "Flexible, dedicated support for ongoing maintenance, minor features, or optimizations.",
                            "cta_text": "Hire Part-Time", "cta_url": "#contact-form", "is_featured": false,
                            "features": ["80 hours per month", "Regular status updates", "Dedicated communication channel"]
                        },
                        {
                            "name": "Hourly", "unit": "hour", "badge": "Pay As You Go", "price": "20",
                            "description": "On-demand expertise for specific bug fixes, feature builds, or architectural consulting sessions.",
                            "cta_text": "Start Hourly Work", "cta_url": "#contact-form", "is_featured": false,
                            "features": ["No minimum commitment", "Time tracking reports", "Transparent billing"]
                        }
                    ]
                },
                {
                    "type": "interview",
                    "badge": "How Hiring Works",
                    "title": "From Requirement to <span class=\"bg-gradient-to-r from-[#0049FF] to-[#270BDE] bg-clip-text text-transparent\">Onboarding in 48 Hours</span>",
                    "subtitle": "Step 1: Share Requirement • Step 2: Shortlist in 48hrs • Step 3: Direct Interview • Step 4: Seamless Onboarding. All backed by our strict pre-vetting process, time-zone overlap, and risk-free replacement guarantee.",
                    "stat1Lbl": "Average onboarding time", "stat1Val": "48hrs", "stat2Lbl": "Client retains full IP ownership", "stat2Val": "100%",
                    "formTitle": "Tell us about your project"
                },
                {
                    "type": "faqs",
                    "items": [
                        { "question": `How much does it cost to hire a ${name} expert?`, "answer": "Pricing depends on the developer's seniority level, but our flat monthly fee model consistently saves global clients 40-60% compared to local onshore hiring, with zero hidden recruitment overhead." },
                        { "question": "What happens if the developer is not a good fit?", "answer": "We offer a strict, risk-free replacement guarantee. If you are unsatisfied with the developer's technical performance or cultural fit, we will provide a suitable replacement quickly to keep your project on track." },
                        { "question": "Who owns the intellectual property (IP)?", "answer": "You do. From the very first line of code, your company has 100% exclusive ownership of all source code, components, and intellectual property produced during the engagement." },
                        { "question": "How do you handle time-zone differences?", "answer": "Our offshore developers adjust their schedules to ensure a guaranteed daily overlap of working hours with your core team in the UK, UAE, Europe, or the US, facilitating seamless stand-ups and real-time collaboration." },
                        { "question": "What is the notice period if I want to scale down the team?", "answer": "Our monthly billing model provides total flexibility. You can scale your team up or down, or conclude the engagement entirely, with just a standard 30-day notice period." }
                    ]
                },
                {
                    "type": "cta",
                    "title": "Ready to Build High-Performance Software?",
                    "subtitle": `Scale your engineering team today with our pre-vetted ${name} experts.`,
                    "buttonText": `Hire ${name} Experts`,
                    "buttonUrl": "#contact-form"
                }
            ]
        };

        const seo = {
            "keywords": `${name} developer, dedicated ${name}`,
            "metaTitle": `Hire Dedicated ${name} Experts | ResourceCoder`,
            "metaDescription": `Hire pre-vetted ${name} experts on a flexible monthly model. Save up to 60% with dedicated talent, time-zone overlap, and zero recruitment overhead.`
        };

        const pageData = {
            slug: slug,
            title: `${name}`,
            seo: seo,
            content: content,
            editor_blocks: []
        };

        const { data: existing } = await supabase.from('pages').select('id').eq('slug', slug).maybeSingle();
        
        if (existing) {
            console.log(`Updating ${slug}...`);
            await supabase.from('pages').update(pageData).eq('id', existing.id);
        } else {
            console.log(`Inserting ${slug}...`);
            await supabase.from('pages').insert(pageData);
        }
    }
    console.log("Done seeding immersive pages!");
}

seed().catch(console.error);
