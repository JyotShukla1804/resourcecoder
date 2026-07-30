export interface CaseStudyContent {
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface CaseStudy {
  id: number;
  title: string;
  company: string;
  overlayText1?: string;
  overlayText2?: string;
  tags: string[];
  date: string;
  image: string;
  content: CaseStudyContent;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Discover How Gigacover Scaled Their Tech Team in Vietnam",
    company: "Gigacover",
    tags: ["HR", "Payroll", "Recruitment"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "Gigacover, a fast-growing tech company, sought to rapidly expand its engineering capabilities to meet surging product demand. They targeted Vietnam for its deep pool of high-quality tech talent.",
      challenge: "Scaling an offshore team quickly while navigating local employment laws, payroll compliance, and cultural nuances posed significant operational hurdles. They needed a seamless way to hire without establishing a legal entity.",
      solution: "Krazio Cloud provided end-to-end Recruitment and HR services. We sourced top-tier software engineers, managed local payroll administration, and ensured full legal compliance, acting as their dedicated partner on the ground.",
      results: [
        "Successfully hired a team of 15 senior developers within 6 weeks.",
        "Achieved 100% compliance with local labor and tax laws.",
        "Reduced overall operational costs by 40% compared to local hiring."
      ]
    }
  },
  {
    id: 2,
    title: "How Krazio Cloud Helped Fulfilled Build Their Vietnam Tech Team",
    company: "Fulfilled",
    tags: ["HR", "Recruitment"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "Fulfilled required a specialized offshore development team to accelerate their product roadmap and enhance their platform's capabilities.",
      challenge: "Finding niche talent in a competitive market while maintaining budget constraints was proving difficult for their internal HR team.",
      solution: "We deployed a targeted recruitment strategy tailored to their specific technology stack, screening hundreds of candidates to find the perfect cultural and technical fit.",
      results: [
        "Built a specialized tech team of 8 engineers.",
        "Decreased time-to-hire by 50%.",
        "Seamless integration with their existing Agile workflows."
      ]
    }
  },
  {
    id: 3,
    title: "Building Cynopsis' Vietnam Tech Team",
    company: "Cynopsis.co",
    tags: ["Recruitment", "HR"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "Cynopsis.co aimed to establish a strong technical presence in Vietnam to support their global regulatory technology solutions.",
      challenge: "The primary challenge was sourcing developers with experience in highly secure, compliant financial systems.",
      solution: "Our specialized recruiters tapped into exclusive networks of fintech developers in Vietnam, managing the entire recruitment lifecycle from sourcing to onboarding.",
      results: [
        "Successfully onboarded a dedicated fintech development pod.",
        "Maintained stringent security and background check protocols.",
        "Enabled Cynopsis to accelerate their feature delivery pipeline by 35%."
      ]
    }
  },
  {
    id: 4,
    title: "ErudiFi Navigates and Resolves HR Challenges in Vietnam",
    company: "ErudiFi",
    tags: ["HR", "Recruitment", "Payroll"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "ErudiFi, a tech-driven education financing company, needed to overcome complex HR hurdles while expanding their operations into Vietnam.",
      challenge: "Navigating unfamiliar local labor laws, setting up compliant payroll systems, and handling employee benefits were causing administrative bottlenecks.",
      solution: "We provided comprehensive HR and Payroll services, functioning as an extension of ErudiFi's internal team to manage all local compliance and administrative tasks.",
      results: [
        "Zero compliance issues or legal setbacks during expansion.",
        "Streamlined payroll processing for all local employees.",
        "Freed up the core team to focus entirely on product growth."
      ]
    }
  },
  {
    id: 5,
    title: "How ShopBack Built Its Vietnam Tech Hub",
    company: "ShopBack",
    tags: ["HR", "Recruitment", "ODC"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "ShopBack, a leading rewards platform, sought to establish a fully functional Offshore Development Center (ODC) in Vietnam to scale their engineering operations.",
      challenge: "They required a massive scale-up of top-tier engineers quickly, without sacrificing quality or culture fit, and needed a physical hub for operations.",
      solution: "Krazio Cloud managed the entire ODC setup, from facility management to aggressive recruitment drives, building a self-sustaining tech hub.",
      results: [
        "Scaled the tech hub to over 50 engineers within 6 months.",
        "Maintained an employee retention rate of over 95%.",
        "Successfully established a state-of-the-art office space for the team."
      ]
    }
  },
  {
    id: 6,
    title: "Helping V-Key Build an Offshore Team for Global Expansion",
    company: "V-Key",
    tags: ["Recruitment", "HR", "Payroll", "ODC"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "V-Key needed to build a highly skilled offshore team to support their global digital identity and cybersecurity solutions.",
      challenge: "Sourcing developers with deep expertise in cryptography and mobile security in a new market required specialized recruitment strategies.",
      solution: "We implemented a rigorous technical vetting process and handled all HR, payroll, and ODC logistics to ensure a smooth transition.",
      results: [
        "Onboarded specialized security engineers meeting V-Key's strict standards.",
        "Established a secure, compliant offshore development environment.",
        "Accelerated the rollout of their global security products."
      ]
    }
  },
  {
    id: 7,
    title: "Alfagomma Successfully Built Their Tech Team in Vietnam",
    company: "Alfagomma",
    tags: ["HR", "Payroll", "ODC", "Recruitment"],
    date: "08/12/2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "Alfagomma required a dedicated tech team to drive their digital transformation initiatives and modernise their legacy systems.",
      challenge: "They needed a partner capable of handling the entire lifecycle—from sourcing talent to managing daily HR operations and payroll.",
      solution: "Krazio Cloud provided an all-in-one ODC solution, taking full responsibility for recruitment, infrastructure, and ongoing employee management.",
      results: [
        "Successfully modernized core legacy systems ahead of schedule.",
        "Built a dedicated team of 20+ IT professionals.",
        "Significantly reduced overhead costs associated with IT infrastructure."
      ]
    }
  },
  {
    id: 8,
    title: "Helping Dreamcloud Grow Their Vietnam Tech Team",
    company: "Dreamcloud",
    tags: ["Recruitment", "ODC", "HR", "Payroll"],
    date: "23/12/2024",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "Dreamcloud sought to rapidly scale their cloud engineering capabilities by establishing a presence in Vietnam.",
      challenge: "The high demand for cloud architects and DevOps engineers made recruitment highly competitive.",
      solution: "Leveraging our deep local market knowledge and extensive talent network, we aggressively sourced and secured top-tier cloud talent.",
      results: [
        "Hired 12 certified cloud engineers in record time.",
        "Established a seamless cross-border collaboration workflow.",
        "Enabled Dreamcloud to take on larger enterprise contracts."
      ]
    }
  },
  {
    id: 9,
    title: "An E-commerce Firm Rebuilt Its Offshore Development Team",
    company: "E-commerce Firm",
    tags: ["Recruitment"],
    date: "26/06/2020",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "A prominent e-commerce firm was struggling with high turnover and low productivity in their existing offshore team and needed a complete overhaul.",
      challenge: "They needed to rebuild the team from scratch while maintaining the ongoing operation of their high-traffic e-commerce platform.",
      solution: "We conducted a complete talent audit, implemented strict quality control in recruitment, and gradually transitioned the workload to a newly hired, elite team.",
      results: [
        "Zero downtime during the team transition phase.",
        "Increased team productivity and sprint velocity by over 40%.",
        "Significantly improved code quality and reduced bug rates."
      ]
    }
  },
  {
    id: 10,
    title: "How a US SaaS Firm Hired 10 Vietnam Developers in 28 Days",
    overlayText1: "How a US SaaS Firm Hired",
    overlayText2: "10 Vietnam Developers in 28 Days",
    company: "US SaaS Firm",
    tags: ["EOR", "Recruitment"],
    date: "23/06/2020",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "A US-based SaaS company needed to scale their development team urgently to meet an aggressive product launch deadline.",
      challenge: "They had no local entity in Vietnam and needed a fully legal, compliant way to hire and pay developers within a month.",
      solution: "Krazio Cloud utilized our Employer of Record (EOR) services to legally employ the developers on their behalf, bypassing the need for entity setup.",
      results: [
        "Hired and onboarded 10 senior developers in exactly 28 days.",
        "Ensured 100% compliance with local tax and labor laws.",
        "Met the product launch deadline successfully."
      ]
    }
  },
  {
    id: 11,
    title: "Building a Tech Team in Vietnam Without the Legal Headaches",
    overlayText1: "Building a Tech Team in Vietnam",
    overlayText2: "Without the Legal & Compliance Headaches",
    company: "Global Tech Co.",
    tags: ["Recruitment", "EOR"],
    date: "20/05/2025",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "A growing technology firm wanted to tap into Vietnam's talent pool but was deterred by the complex legal and administrative requirements.",
      challenge: "They lacked the internal resources to navigate local employment contracts, tax withholdings, and mandatory statutory benefits.",
      solution: "Through our comprehensive EOR model, we absorbed all legal liability and administrative burden, acting as the official employer while the talent worked directly for the client.",
      results: [
        "Completely eliminated legal and compliance risks for the client.",
        "Provided full transparency into local payroll and taxes.",
        "Allowed the client to focus solely on project management."
      ]
    }
  },
  {
    id: 12,
    title: "How an Australian Startup Built a Tech Hub in Vietnam",
    overlayText1: "How an Australian Firm Built a Tech Hub",
    overlayText2: "in Vietnam Without a Single Entity",
    company: "Australian Startup",
    tags: ["Recruitment", "ODC"],
    date: "28/05/2020",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "An Australian startup needed to rapidly scale its engineering team but found local hiring costs prohibitive.",
      challenge: "They required a dedicated team environment (ODC) in Vietnam but did not want to commit the capital or time required to establish a foreign subsidiary.",
      solution: "We provided a fully managed ODC solution, housing the team in our state-of-the-art facilities while managing all local recruitment and HR functions.",
      results: [
        "Established a fully functional tech hub within 8 weeks.",
        "Saved an estimated $150,000 in initial setup costs.",
        "Built a cohesive, high-performing team of 15 engineers."
      ]
    }
  },
  {
    id: 13,
    title: "How a Singapore Fintech Hired 6 Engineers in 3 Weeks",
    overlayText1: "How a Singapore Fintech Hired 6",
    overlayText2: "Vietnam Engineers in 3 Weeks",
    company: "Singapore Fintech",
    tags: ["Recruitment"],
    date: "14/08/2020",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "A fast-paced Singaporean fintech startup received a major round of funding and needed to execute their roadmap immediately.",
      challenge: "The extreme urgency required sourcing, interviewing, and onboarding niche blockchain and backend engineers in under a month.",
      solution: "We activated our premium talent network and dedicated a specialized recruitment task force to focus exclusively on their requirements round-the-clock.",
      results: [
        "Successfully hired 6 highly specialized engineers in just 21 days.",
        "Maintained a 100% offer acceptance rate.",
        "Enabled the startup to meet critical investor milestones."
      ]
    }
  },
  {
    id: 14,
    title: "Helping a SaaS Startup Run Its Team Seamlessly",
    overlayText1: "Helping a Singapore SaaS Startup Run Its",
    overlayText2: "Vietnam Team Seamlessly with EOR Services",
    company: "SaaS Startup",
    tags: ["EOR", "HR"],
    date: "02/11/2025",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "A growing SaaS startup had successfully hired remote workers in Vietnam but was struggling to manage payroll, benefits, and HR compliance smoothly.",
      challenge: "Disjointed payment methods and lack of understanding of local employee benefits were causing dissatisfaction among their remote team.",
      solution: "We transitioned their existing contractors to our EOR platform, standardizing their contracts, providing comprehensive local benefits, and ensuring on-time payroll in local currency.",
      results: [
        "Increased employee satisfaction and retention significantly.",
        "Provided premium healthcare benefits to the entire team.",
        "Streamlined the client's monthly invoicing and payroll processes."
      ]
    }
  },
  {
    id: 15,
    title: "How a Startup Built Its AI Team in Just 30 Days",
    overlayText1: "How a Startup Built Its AI Team",
    overlayText2: "in Just 30 Days With Krazio Cloud",
    company: "AI Startup",
    tags: ["Recruitment", "AI"],
    date: "02/07/2025",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    content: {
      overview: "An innovative AI startup needed to build a dedicated team of Machine Learning engineers and Data Scientists to accelerate their product development.",
      challenge: "AI talent is notoriously scarce and highly competitive. Identifying candidates with genuine, practical ML experience rather than just theoretical knowledge was critical.",
      solution: "Our technical recruiters partnered closely with the client's CTO to administer specialized technical assessments, tapping into specialized AI communities in Vietnam.",
      results: [
        "Built a core AI team of 5 elite engineers within 30 days.",
        "Successfully launched their proprietary AI model beta 2 months early.",
        "Established Krazio Cloud as their exclusive long-term recruitment partner."
      ]
    }
  }
];
