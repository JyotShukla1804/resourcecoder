const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tqmbzpkbbnvfbxtqtnnm.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbWJ6cGtiYm52ZmJ4dHF0bm5tIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTUwNjA2NCwiZXhwIjoyMDk3MDgyMDY0fQ.55hk9-ia3DeyClr_VDfUQ3lkmNowPFCqLMkIkoju0Zo';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const pagesData = {
  'virtual-reality-development': {
    blocks: [
      {
        type: "hero",
        title: "Virtual Reality (VR) App Development Company",
        subtitle: "Transform your business with cutting-edge Virtual Reality solutions.",
        description: "From immersive training modules and virtual showrooms to captivating games, our expert developers build scalable, high-performance VR applications that drive engagement and ROI.",
        primaryCta: "Let's talk",
        primaryCtaUrl: "#contact-form",
        secondaryCta: "",
        secondaryCtaUrl: ""
      },
      {
        type: "benefits",
        title: "About Our VR Team",
        subtitle: "Our dedicated team of 3D artists, Unity/Unreal developers, and spatial computing experts are passionate about pushing the boundaries of what's possible. We don't just write code; we craft worlds.",
        paragraph: "Why Choose Us?",
        btnText: "Talk to our experts",
        btnUrl: "#contact-form",
        items: [
          { label: "Vetted Spatial Computing Experts" },
          { label: "Certified Unity & Unreal Engine Developers" },
          { label: "Agile Delivery with Rapid Prototyping" }
        ]
      },
      {
        type: "services",
        title: "Next Gen VR App Development Services",
        subtitle: "We offer comprehensive VR development services.",
        items: [
          { name: "VR Software Consulting Services", description: "We analyze your business needs and offer strategic VR consulting to ensure your virtual reality project aligns perfectly with your goals and maximizes ROI." },
          { name: "VR 3D Design & UI/UX", description: "Our creative team builds intuitive and stunning 3D environments with immersive UI/UX that keep users engaged and deliver a seamless virtual experience." },
          { name: "Custom VR App Development", description: "End-to-end development of custom VR applications tailored to your specific industry needs, ensuring high performance and platform compatibility." },
          { name: "VR Game Development", description: "We create captivating and interactive VR games with realistic physics, compelling storylines, and multiplayer capabilities for ultimate entertainment." },
          { name: "VR Support & Maintenance", description: "Continuous post-launch support and regular updates to ensure your VR application runs flawlessly and stays ahead of technological advancements." },
          { name: "VR Integration Services", description: "Seamlessly integrate VR solutions with your existing enterprise systems, IoT devices, and smart hardware for a unified digital ecosystem." },
          { name: "AR/VR Prototyping", description: "Rapid prototyping of your AR/VR ideas to validate concepts, test user interactions, and secure stakeholder buy-in before full-scale development." },
          { name: "WebVR Development", description: "Browser-based VR experiences that require no app downloads, making immersive content easily accessible to a wider audience directly on the web." },
          { name: "Metaverse Development", description: "Build interconnected virtual worlds and decentralized economies. We help you establish a strong presence in the rapidly growing Metaverse." }
        ]
      },
      {
        type: "expertise",
        title: "Smart Solutions Integrate with Smart Hardware",
        subtitle: "Our developers are proficient in building experiences for the industry's leading VR headsets and peripherals.",
        items: [
          { title: "PC-Tethered VR", items: ["Oculus Rift", "HTC Vive"] },
          { title: "Standalone & Mobile", items: ["Samsung Gear VR", "Google Cardboard"] },
          { title: "Console & Mixed Reality", items: ["PlayStation VR", "Microsoft HoloLens"] }
        ]
      },
      {
        type: "pricing",
        title: "Calculate Candidate Salary",
        subtitle: "",
        plans: []
      },
      {
        type: "interview",
        badge: "EXPERIENCE",
        title: "Custom AR/VR Apps Proven Industry Records",
        subtitle: "End-to-End VR App Development Company",
        stat1Val: "14+",
        stat1Lbl: "Years Experience",
        stat2Val: "450+",
        stat2Lbl: "Apps Delivered",
        formTitle: "Ready to build?"
      },
      {
        type: "faqs",
        items: [
          { question: "What is Virtual Reality (VR) App Development?", answer: "VR app development is the process of creating software applications that immerse users in a simulated 3D environment. This involves 3D modeling, interactive UI/UX design, and specialized programming using game engines like Unity or Unreal Engine, targeting hardware like Oculus, HTC Vive, or mobile VR headsets." },
          { question: "Which industries benefit most from VR?", answer: "VR is transforming multiple sectors including Gaming & Entertainment, Healthcare (surgical training, therapy), Education (virtual classrooms), Real Estate (virtual tours), Manufacturing (prototyping, safety training), and Retail (virtual try-ons and showrooms)." },
          { question: "How long does it take to develop a custom VR app?", answer: "The timeline varies significantly based on complexity. A simple WebVR experience might take 1-2 months, while a complex multiplayer VR game or detailed enterprise training simulation can take 6-12 months or more. We provide accurate timelines during our initial consultation phase." },
          { question: "Do you develop for both standalone and PC-tethered VR headsets?", answer: "Yes. Our team has extensive experience developing optimized applications for standalone headsets like the Meta Quest series, as well as high-fidelity experiences for PC-tethered systems like the HTC Vive Pro and Valve Index." }
        ]
      },
      {
        type: "cta",
        title: "Looking for the right tech partner? Let's Build a Custom VR App",
        subtitle: "Consultation, Design, Development, and Deployment under one roof.",
        buttonText: "Get a Free Consultation",
        buttonUrl: "#contact-form"
      }
    ]
  },
  'augmented-reality-development': {
    blocks: [
      {
        type: "hero",
        title: "Augmented Reality App Development Company",
        subtitle: "Enhance the real world with innovative digital overlays.",
        description: "Our Augmented Reality solutions bridge the gap between physical and digital, offering immersive experiences that captivate users, streamline operations, and drive unmatched business growth.",
        primaryCta: "Let's talk",
        primaryCtaUrl: "#contact-form",
        secondaryCta: "",
        secondaryCtaUrl: ""
      },
      {
        type: "benefits",
        title: "About Our AR Team",
        subtitle: "Our AR development experts specialize in blending the physical and digital worlds flawlessly. With deep expertise in spatial computing, computer vision, and interactive design, we turn complex augmented reality concepts into market-ready applications.",
        paragraph: "Why Choose Us?",
        btnText: "Talk to our experts",
        btnUrl: "#contact-form",
        items: [
          { label: "Proficient in ARKit, ARCore & Unity" },
          { label: "Specialized in Computer Vision & SLAM" },
          { label: "Agile Delivery with Rapid Prototyping" }
        ]
      },
      {
        type: "services",
        title: "Next Gen AR Development Solutions",
        subtitle: "We provide state-of-the-art Augmented Reality development services.",
        items: [
          { name: "AR App for Retail", description: "Develop interactive AR applications that allow customers to visualize products in real-time, enhancing their shopping experience and boosting sales." },
          { name: "AR App for Healthcare", description: "Revolutionize patient care and medical training with advanced AR applications designed to aid surgeries, diagnostics, and medical education." },
          { name: "Custom AR App Development", description: "Build highly customized AR solutions tailored to specific industry needs, delivering engaging experiences across iOS, Android, and wearable devices." },
          { name: "Location-based AR App Development", description: "Create immersive AR experiences tied to real-world locations, perfect for navigation, tourism, real estate, and interactive marketing campaigns." },
          { name: "AR App Support and Maintenance", description: "Ensure the longevity and optimal performance of your AR applications with our comprehensive support, updates, and maintenance services." },
          { name: "AR App UI/UX Design", description: "Design intuitive and visually stunning user interfaces and experiences specifically crafted for the unique interactions of augmented reality." },
          { name: "AR Integration Services", description: "Seamlessly integrate augmented reality capabilities into your existing enterprise systems, mobile apps, or web platforms for a unified digital ecosystem." }
        ]
      },
      {
        type: "expertise",
        title: "Our AR App Development Tech Stack",
        subtitle: "Leveraging industry-standard frameworks and engines to build robust, scalable, and high-fidelity augmented reality applications.",
        items: [
          { title: "Hardware", items: ["Microsoft HoloLens", "Magic Leap", "Meta Quest Pro", "Vuzix", "Smartphones (iOS/Android)", "RealWear"] },
          { title: "Game Engines", items: ["Unity", "Unreal Engine"] },
          { title: "AR Frameworks", items: ["ARKit", "ARCore", "Vuforia", "WebXR"] }
        ]
      },
      {
        type: "pricing",
        title: "Calculate Candidate Salary",
        subtitle: "",
        plans: []
      },
      {
        type: "interview",
        badge: "EXPERIENCE",
        title: "Adding Value to Businesses through Augmented Reality",
        subtitle: "A smart and reliable AR/VR tech partner Krazio.",
        stat1Val: "14+",
        stat1Lbl: "Industry Experience",
        stat2Val: "450+",
        stat2Lbl: "Creative Nerds",
        formTitle: "Ready to build?"
      },
      {
        type: "faqs",
        items: [
          { question: "What is Augmented Reality (AR) App Development?", answer: "AR app development is the process of creating applications that overlay digital information, such as 3D models, text, and interactive elements, onto the user's view of the real world. This is achieved using the device's camera and sensors, often utilizing frameworks like ARKit, ARCore, Unity, or specialized wearable hardware." },
          { question: "How is AR different from VR?", answer: "While Virtual Reality (VR) completely immerses the user in a simulated digital environment, Augmented Reality (AR) enhances the real world by projecting digital elements into the user's physical surroundings. AR allows users to remain aware of and interact with their actual environment." },
          { question: "Which industries can benefit from AR development?", answer: "AR is highly versatile and benefits numerous industries including Retail (virtual try-ons, product visualization), Healthcare (surgical assistance, medical training), Manufacturing (remote assistance, assembly guidance), Education (interactive learning), Real Estate (virtual staging), and Marketing (immersive campaigns)." },
          { question: "How much does it cost to develop an AR application?", answer: "The cost of developing an AR app depends heavily on the project's complexity, the platforms targeted (iOS, Android, wearables), the level of 3D modeling required, and the chosen technology stack (e.g., marker-based vs. markerless AR). We provide custom quotes after a detailed analysis of your specific requirements." }
        ]
      },
      {
        type: "cta",
        title: "Looking for the right tech partner? Let's Build a Custom AR App",
        subtitle: "Join industry leaders who trust us for cutting-edge immersive tech solutions.",
        buttonText: "Get a Free Consultation",
        buttonUrl: "#contact-form"
      }
    ]
  },
  'mixed-reality-development': {
    blocks: [
      {
        type: "hero",
        title: "Mixed Reality (MR) Development Company",
        subtitle: "Unleash the power of Mixed Reality with our bespoke development services.",
        description: "We create high-fidelity, interactive, and immersive experiences that seamlessly blend the digital and physical worlds. From groundbreaking enterprise applications to captivating games, our expert developers bring your MR vision to life with precision and creativity.",
        primaryCta: "Let's talk",
        primaryCtaUrl: "#contact-form",
        secondaryCta: "",
        secondaryCtaUrl: ""
      },
      {
        type: "benefits",
        title: "A New Realm of Reality Transforming Businesses",
        subtitle: "Join forces with a team of seasoned professionals dedicated to pushing the boundaries of mixed reality. Our developers, designers, and strategists possess the expertise and passion required to deliver innovative MR solutions that redefine user experiences and drive business success.",
        paragraph: "Tools and Technologies",
        btnText: "Talk to our experts",
        btnUrl: "#contact-form",
        items: [
          { label: "VR/MR Headsets" },
          { label: "3D Modeling Software" },
          { label: "Game Engines (Unity, Unreal Engine)" },
          { label: "PC/Mac Computers" },
          { label: "AR/VR/MR Frameworks" },
          { label: "UI/UX Design Tools" }
        ]
      },
      {
        type: "services",
        title: "Our Mixed Reality Development Services",
        subtitle: "We offer a comprehensive suite of mixed reality development services.",
        items: [
          { name: "MR Strategy & Consulting Services", description: "We analyze your business objectives and provide expert guidance on how to leverage mixed reality to achieve a competitive edge. Our strategic consulting ensures your MR investment yields maximum returns." },
          { name: "MR Web & App Development", description: "Through our expertise, we build robust and scalable mixed reality applications for web and mobile platforms, ensuring seamless performance across various devices and headsets." },
          { name: "MR UI/UX Applications", description: "Our design team creates intuitive and visually stunning user interfaces and experiences tailored specifically for mixed reality environments, maximizing user engagement." },
          { name: "MR Hardware Game Development", description: "We develop captivating and interactive mixed reality games with compelling narratives and realistic interactions that push the boundaries of entertainment." },
          { name: "Industry-Specific Custom MR Software", description: "Our tailored mixed reality software solutions are designed to address the specific challenges and requirements of your industry, from healthcare and education to manufacturing and retail." },
          { name: "Support & Maintenance for MR Apps", description: "We provide ongoing support and maintenance services to ensure your mixed reality applications remain up-to-date, secure, and functioning optimally long after launch." }
        ]
      },
      {
        type: "expertise",
        title: "Feature-Rich Mixed Reality",
        subtitle: "Our mixed reality developers build immersive applications that leverage a wide range of cutting-edge features.",
        items: [
          { title: "Interaction & Input", items: ["Voice Commands and Speech to Text", "Eye Tracking Technology"] },
          { title: "Environment & Audio", items: ["3D Objects", "Spatial Audio & Mapping"] },
          { title: "Data & Display", items: ["Incorporate Information on Screen", "Real Time Data Display"] }
        ]
      },
      {
        type: "pricing",
        title: "Calculate Candidate Salary",
        subtitle: "",
        plans: []
      },
      {
        type: "interview",
        badge: "EXPERIENCE",
        title: "True Immersive Experience Unlocked with 3D Touch Technology",
        subtitle: "Creating an impact is what we aim for. Our mixed reality solutions are designed to leave a lasting impression and drive measurable results for our clients. Here is what we have achieved with our mixed reality solutions so far.",
        stat1Val: "10+",
        stat1Lbl: "Years Experience",
        stat2Val: "232+",
        stat2Lbl: "Projects Delivered",
        formTitle: "Ready to build?"
      },
      {
        type: "faqs",
        items: [
          { question: "What is Mixed Reality (MR)?", answer: "Mixed reality (MR) merges real and virtual worlds to produce new environments and visualizations, where physical and digital objects co-exist and interact in real time. It goes beyond AR by allowing users to interact with digital objects as if they were real." },
          { question: "Do I need specific headsets for MR apps?", answer: "Yes, fully immersive Mixed Reality experiences typically require specialized headsets like Microsoft HoloLens, Magic Leap, or the Meta Quest Pro, which have advanced spatial mapping and pass-through capabilities." },
          { question: "How much time does it take to build an MR app?", answer: "The development timeline for an MR application depends on its complexity, features, and the required 3D assets. A basic prototype may take 2-3 months, while a fully-fledged enterprise solution could take 6-12 months." },
          { question: "Which industries benefit the most from MR?", answer: "MR is highly beneficial in industries such as Healthcare (surgical planning and training), Manufacturing (assembly guidance and maintenance), Architecture and Construction (design visualization), and Education (interactive learning experiences)." },
          { question: "Can you develop MR apps for mobile devices?", answer: "While true MR requires advanced headsets for full spatial awareness, we can develop sophisticated AR applications for modern mobile devices (using ARKit and ARCore) that offer a subset of MR capabilities, such as placing and interacting with 3D objects in the real world." }
        ]
      },
      {
        type: "cta",
        title: "Looking for the right tech partner? Let's Build a Custom MR App",
        subtitle: "Accelerate your digital transformation with our expert mixed reality development team.",
        buttonText: "Get a Free Consultation",
        buttonUrl: "#contact-form"
      }
    ]
  },
  '3d-game-modeling': {
    blocks: [
      {
        type: "hero",
        title: "3D Modeling For Games",
        subtitle: "Transforming visionary concepts into stunning 3D realities.",
        description: "We specialize in high-quality 3D asset creation for multiple platforms, ensuring immersive and captivating visual experiences.",
        primaryCta: "Let's Talk",
        primaryCtaUrl: "#contact-form",
        secondaryCta: "",
        secondaryCtaUrl: ""
      },
      {
        type: "benefits",
        title: "Why Choose Krazio for 3D Modeling Services?",
        subtitle: "With years of expertise in game art, our team delivers captivating 3D models tailored to your vision. We blend creativity with technical excellence to produce assets that stand out in a competitive market.",
        paragraph: "Why Choose Us?",
        btnText: "Talk to our experts",
        btnUrl: "#contact-form",
        items: [
          { label: "Proficient in Top 3D Modeling Tools" },
          { label: "Specialized in High/Low Poly Gaming Assets" },
          { label: "Dedicated QA & Pipeline Integration" },
          { label: "Agile & Collaborative Art Process" }
        ]
      },
      {
        type: "services",
        title: "3D Modeling Services For Games",
        subtitle: "Push the boundaries of visual fidelity with our custom 3D modeling services.",
        items: [
          { name: "3D Modeling for Games", description: "Create breathtaking 3D assets that serve as the foundation of your game. Our models are highly detailed and optimized for any engine." },
          { name: "3D Modeling for Console & PC Games", description: "Delivering high-poly models tailored for advanced rendering capabilities of modern consoles and high-end gaming PCs." },
          { name: "3D Modeling for Environmental & Industry", description: "Design realistic and immersive environments, props, and architectural visualizations that set the perfect scene for your game." },
          { name: "3D Modeling for Virtual Reality Games", description: "Build highly optimized, low-latency 3D models specifically designed to maintain immersion in virtual reality experiences." },
          { name: "3D Character Design & Animation", description: "From concept art to fully rigged characters, we breathe life into heroes and creatures with precise modeling and fluid animation." },
          { name: "Custom 3D Modeling Services", description: "Need something unique? We provide bespoke 3D modeling solutions tailored exactly to your game's unique artistic vision." }
        ]
      },
      {
        type: "expertise",
        title: "3D Modeling Tools",
        subtitle: "We use the most advanced modeling, sculpting, and texturing software to create state-of-the-art 3D assets that meet the high standards of modern gaming.",
        items: [
          { title: "Modeling & Sculpting", items: ["Autodesk Maya", "Blender", "ZBrush", "3ds Max"] },
          { title: "Texturing & Materials", items: ["Substance Painter", "Marvelous Designer"] },
          { title: "Engines & Rendering", items: ["Cinema 4D", "Unity", "Unreal Engine"] }
        ]
      },
      {
        type: "pricing",
        title: "Calculate Candidate Salary",
        subtitle: "",
        plans: []
      },
      {
        type: "interview",
        badge: "ONBOARDING",
        title: "From Requirement to Onboarding",
        subtitle: "Give Your Game Ideas An Artistic Touch. Drive engagement, boost revenue, and achieve sustainable growth with Krazio.",
        stat1Val: "10+",
        stat1Lbl: "Years Experience",
        stat2Val: "232+",
        stat2Lbl: "Projects Delivered",
        formTitle: "Ready to start?"
      },
      {
        type: "faqs",
        items: [
          { question: "What is 3D Modeling?", answer: "3D modeling is the process of creating a mathematical representation of any surface of an object in three dimensions using specialized software. The product is called a 3D model, which can be displayed as a two-dimensional image through a process called 3D rendering or used in a computer simulation of physical phenomena." },
          { question: "How long does it take to create a 3D model?", answer: "The time required to create a 3D model varies greatly depending on its complexity, detail, and intended use. A simple prop might take a few hours, while a highly detailed, fully rigged character can take several weeks." },
          { question: "What tools do you use for 3D modeling?", answer: "Our artists are proficient in industry-standard tools including Autodesk Maya, Blender, ZBrush, 3ds Max, Substance Painter, and Cinema 4D, depending on the specific requirements of the asset being created." },
          { question: "How much does 3D modeling cost?", answer: "The cost depends on the complexity of the models, the number of assets required, and the level of detail (low-poly vs. high-poly). We offer custom quotes after reviewing your project's concept art and requirements." },
          { question: "Do you offer rigging and animation?", answer: "Yes, we provide end-to-end 3D services. After modeling and texturing, our technical artists can provide a robust skeletal rig, followed by our animators bringing the asset to life with fluid motion." }
        ]
      },
      {
        type: "cta",
        title: "Looking for an art team? Start a Conversation",
        subtitle: "Bring your visionary game ideas to life with our expert 3D artists.",
        buttonText: "Let's Talk",
        buttonUrl: "#contact-form"
      }
    ]
  }
};

async function fixAll() {
  for (const [slug, content] of Object.entries(pagesData)) {
    const { data: existing } = await supabase.from('pages').select('id').eq('slug', slug).maybeSingle();
    
    if (existing) {
      console.log(`Updating ${slug} DB record...`);
      await supabase.from('pages').update({ content }).eq('id', existing.id);
    } else {
      console.log(`Record for ${slug} not found!`);
    }

    const dirPath = path.join(__dirname, '..', 'src', 'app', 'hire-team', slug);
    if (fs.existsSync(dirPath)) {
      console.log(`Removing hardcoded directory: ${dirPath}`);
      fs.rmSync(dirPath, { recursive: true, force: true });
    }
  }
  console.log("Migration complete!");
}

fixAll().catch(console.error);
