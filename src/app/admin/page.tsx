"use client";

import React, { useState, useEffect } from "react";
import { DEFAULT_PAGE_CONTENT } from "@/lib/constants";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Dynamic Blocks CMS state
  const [pages, setPages] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] = useState<any>(null);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [expandedBlocks, setExpandedBlocks] = useState<Record<number, boolean>>({});
  const [saving, setSaving] = useState(false);
  const [loadingPages, setLoadingPages] = useState(true);

  // Modals state
  const [showAddBlockModal, setShowAddBlockModal] = useState(false);
  const [showCreatePageModal, setShowCreatePageModal] = useState(false);
  const [newPageTitle, setNewPageTitle] = useState("");
  const [newPageSlug, setNewPageSlug] = useState("");
  const [creatingPage, setCreatingPage] = useState(false);
  const [editingBlockIdx, setEditingBlockIdx] = useState<number | null>(null);

  // Uploading state
  const [uploadingState, setUploadingState] = useState<Record<string, boolean>>({});

  const handleImageUpload = async (blockIdx: number, fieldKey: string, itemIdx: number | null, file: File) => {
    const key = itemIdx !== null ? `${blockIdx}-${fieldKey}-${itemIdx}` : `${blockIdx}-${fieldKey}`;
    setUploadingState(prev => ({ ...prev, [key]: true }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
        credentials: "same-origin",
      });

      if (!res.ok) {
        const errData = await res.json();
        alert("Upload failed: " + (errData.error || res.statusText));
        return;
      }

      const data = await res.json();
      if (data.url) {
        if (itemIdx !== null) {
          updateBlockItemField(blockIdx, fieldKey, itemIdx, "image", data.url);
        } else {
          updateBlockField(blockIdx, fieldKey, data.url);
        }
      }
    } catch (err) {
      alert("Failed to upload image file");
    } finally {
      setUploadingState(prev => ({ ...prev, [key]: false }));
    }
  };

  const stripHtml = (html: any) => {
    if (typeof html !== "string") return html;
    return html.replace(/<[^>]*>/g, "");
  };

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch("/api/admin/login");
        if (res.ok) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        // ignore
      } finally {
        setCheckingAuth(false);
      }
    };
    checkStatus();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchPages();
    }
  }, [isLoggedIn]);

  const fetchPages = async () => {
    setLoadingPages(true);
    try {
      const res = await fetch("/api/admin/pages", { cache: "no-store" });
      if (!res.ok) {
        console.error("Error fetching pages: status", res.status);
        return;
      }
      const data = await res.json();
      if (data) {
        setPages(data);
      }
    } catch (err) {
      console.error("Failed to connect to admin pages API:", err);
    } finally {
      setLoadingPages(false);
    }
  };

  const loadPageContent = (page: any) => {
    if (!page) return;
    const dbContent = page.content || {};

    // Extract blocks with fallback configuration for backwards compatibility
    const pageBlocks = dbContent.blocks || [
      { type: "hero", ...dbContent.hero },
      { type: "benefits", ...dbContent.intro },
      { type: "services", ...dbContent.technologies },
      { type: "pricing", ...dbContent.pricing },
      { type: "interview", ...dbContent.process },
      { type: "stories", ...dbContent.useCases },
      { type: "expertise", ...dbContent.frameworkDetails },
      { type: "augmentation", ...dbContent.augmentation },
      { type: "faqs", ...dbContent.faqs },
      { type: "cta", ...dbContent.cta }
    ].filter((b: any) => b.type);

    // Recursively strip HTML tags from loaded content so inputs remain clean
    const cleanObject = (obj: any): any => {
      if (typeof obj === "string") {
        return stripHtml(obj);
      }
      if (Array.isArray(obj)) {
        return obj.map(cleanObject);
      }
      if (obj !== null && typeof obj === "object") {
        const result: any = {};
        for (const k of Object.keys(obj)) {
          result[k] = cleanObject(obj[k]);
        }
        return result;
      }
      return obj;
    };

    const cleanedBlocks = pageBlocks.map((b: any) => {
      const type = b.type;
      const cleaned = cleanObject(b);
      cleaned.type = type; // Keep type field unchanged
      return cleaned;
    });

    setBlocks(cleanedBlocks);

    // Expand the first block by default
    setExpandedBlocks({ 0: true });
  };

  const handlePageSelect = (pageId: string) => {
    const page = pages.find((p) => p.id === pageId);
    if (page) {
      setSelectedPage(page);
      loadPageContent(page);
    }
  };

  const openCreatePageModal = () => {
    setNewPageTitle("");
    setNewPageSlug("");
    setShowCreatePageModal(true);
  };

  const handleTitleChange = (val: string) => {
    setNewPageTitle(val);
    const slugified = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setNewPageSlug(slugified);
  };

  const submitCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPageTitle.trim() || !newPageSlug.trim()) {
      alert("Page Title and Slug are required.");
      return;
    }

    setCreatingPage(true);

    // Default template blocks for new pages
    const defaultBlocks = [
      { type: "hero", ...DEFAULT_PAGE_CONTENT.hero },
      { type: "benefits", ...DEFAULT_PAGE_CONTENT.intro },
      { type: "services", ...DEFAULT_PAGE_CONTENT.technologies },
      { type: "pricing", ...DEFAULT_PAGE_CONTENT.pricing },
      { type: "interview", ...DEFAULT_PAGE_CONTENT.process },
      { type: "cta", ...DEFAULT_PAGE_CONTENT.cta }
    ];

    try {
      const res = await fetch("/api/admin/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newPageTitle,
          slug: newPageSlug,
          content: { blocks: defaultBlocks }
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        alert("Error creating page: " + (errData.error || res.statusText));
        return;
      }

      const data = await res.json();
      if (data) {
        alert("Page created successfully!");
        setShowCreatePageModal(false);
        const pagesRes = await fetch("/api/admin/pages", { cache: "no-store" });
        if (pagesRes.ok) {
          const updatedPages = await pagesRes.json();
          setPages(updatedPages);
          setSelectedPage(data);
          loadPageContent(data);
        }
      }
    } catch (err) {
      alert("Failed to create page");
    } finally {
      setCreatingPage(false);
    }
  };

  const handleSavePage = async () => {
    if (!selectedPage) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/pages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedPage.id,
          content: { blocks }
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        alert("Error saving: " + (errData.error || res.statusText));
        return;
      }

      alert("Saved successfully!");
      const pagesRes = await fetch("/api/admin/pages", { cache: "no-store" });
      if (pagesRes.ok) {
        const updatedPages = await pagesRes.json();
        setPages(updatedPages);
        setSelectedPage(null); // Return to Pages landing list
      }
    } catch (err) {
      alert("Failed to save content");
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePage = async (pageId: string, pageTitle: string) => {
    if (!confirm(`Are you sure you want to delete the page "${pageTitle}"?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/pages?id=${pageId}`, { method: "DELETE" });
      if (!res.ok) {
        const errData = await res.json();
        alert("Error deleting page: " + (errData.error || res.statusText));
        return;
      }
      await fetchPages();
      if (selectedPage && selectedPage.id === pageId) {
        setSelectedPage(null);
        setBlocks([]);
      }
    } catch (err) {
      alert("Failed to delete page");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        setIsLoggedIn(true);
      } else {
        const data = await res.json();
        setError(data.error || "Invalid username or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (err) {
      // ignore
    }
    setIsLoggedIn(false);
    setSelectedPage(null);
    setBlocks([]);
  };

  // Block handlers
  const updateBlockField = (blockIdx: number, field: string, value: any) => {
    setBlocks(prev => prev.map((b, idx) => {
      if (idx === blockIdx) {
        return { ...b, [field]: value };
      }
      return b;
    }));
  };

  const updateBlockItemField = (blockIdx: number, listKey: string, itemIdx: number, field: string, value: any) => {
    setBlocks(prev => prev.map((b, idx) => {
      if (idx === blockIdx) {
        const list = [...(b[listKey] || [])];
        list[itemIdx] = { ...list[itemIdx], [field]: value };
        return { ...b, [listKey]: list };
      }
      return b;
    }));
  };

  const addBlockListItem = (blockIdx: number, listKey: string, defaultItem: any) => {
    setBlocks(prev => prev.map((b, idx) => {
      if (idx === blockIdx) {
        return { ...b, [listKey]: [...(b[listKey] || []), defaultItem] };
      }
      return b;
    }));
  };

  const removeBlockListItem = (blockIdx: number, listKey: string, itemIdx: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setBlocks(prev => prev.map((b, idx) => {
        if (idx === blockIdx) {
          return { ...b, [listKey]: (b[listKey] || []).filter((_: any, i: number) => i !== itemIdx) };
        }
        return b;
      }));
    }
  };

  const deleteBlock = (blockIdx: number) => {
    const blockType = blocks[blockIdx]?.type || "section";
    if (confirm(`Are you sure you want to delete the "${blockType}" section?`)) {
      setBlocks(prev => prev.filter((_, idx) => idx !== blockIdx));
    }
  };

  const moveBlock = (blockIdx: number, direction: "up" | "down") => {
    if (direction === "up" && blockIdx === 0) return;
    if (direction === "down" && blockIdx === blocks.length - 1) return;
    const targetIdx = direction === "up" ? blockIdx - 1 : blockIdx + 1;
    setBlocks(prev => {
      const copy = [...prev];
      const temp = copy[blockIdx];
      copy[blockIdx] = copy[targetIdx];
      copy[targetIdx] = temp;
      return copy;
    });

    // Swap expanded state
    setExpandedBlocks(prev => {
      const next = { ...prev };
      const currentExpanded = !!next[blockIdx];
      const targetExpanded = !!next[targetIdx];
      next[blockIdx] = targetExpanded;
      next[targetIdx] = currentExpanded;
      return next;
    });
  };

  const toggleBlockExpand = (blockIdx: number) => {
    setExpandedBlocks(prev => ({ ...prev, [blockIdx]: !prev[blockIdx] }));
  };

  const addBlock = (type: string) => {
    const templates: Record<string, any> = {
      hero: {
        type: "hero",
        title: "Expert ReactJS Developers",
        subtitle: "Build fast, scalable web apps with Krazio",
        description: "Hire dedicated programmers to build and optimize your products.",
        primaryCta: "Hire React Developer",
        primaryCtaUrl: "#contact-form",
        secondaryCta: "View Portfolio",
        secondaryCtaUrl: "#contact-form"
      },
      benefits: {
        type: "benefits",
        title: "Why Hire Developers From Us",
        subtitle: "Trusted by top enterprises",
        paragraph: "Key Benefits",
        items: [{ label: "Front-end Mastery", text: "Clean and scalable front-end code architectures." }],
        btnText: "Consult Our Process",
        btnUrl: "/our-development-process"
      },
      services: {
        type: "services",
        title: "Development Services",
        subtitle: "We build modern interfaces and custom architectures.",
        items: [{ name: "Product Development", icon: "react", description: "Bug-free custom application development." }]
      },
      pricing: {
        type: "pricing",
        title: "Flexible Engagement Models",
        subtitle: "Choose the pricing model that works best for your team",
        plans: [{ name: "Hourly", price: "20", unit: "hour", badge: "Pay As You Go", description: "NDA secured contracts", cta_text: "Get Started", cta_url: "#contact-form", is_featured: false, features: ["Flexible terms", "Detailed logs"] }],
        bottomCtaText: "Schedule Interview",
        bottomCtaUrl: "#contact-form"
      },
      interview: {
        type: "interview",
        badge: "Available Now",
        title: "Schedule a Developer Interview & Get a Trial",
        subtitle: "Onboard industry experts within days.",
        stat1Val: "48hrs",
        stat1Lbl: "Onboarding time",
        stat2Val: "98%",
        stat2Lbl: "Success rate",
        formTitle: "Describe your project"
      },
      stories: {
        type: "stories",
        title: "Success Stories",
        subtitle: "See our works in action",
        items: [{ title: "Finance Web App", category: "Finance", desc: "Best-in-class software solution.", image: "/success_finance.png", techs: ["React JS", "Redux"], btnText: "Request a Quote", btnUrl: "#contact-form" }]
      },
      expertise: {
        type: "expertise",
        title: "Technical Expertise",
        subtitle: "Full-stack framework masteries",
        items: [{ title: "Languages", items: ["JavaScript", "TypeScript"] }]
      },
      augmentation: {
        type: "augmentation",
        row1Title: "Why Hire From Krazio?",
        row1P1: "Industry-vetted experts who deliver clean, production-ready codebase templates.",
        row1P2: "Our developers handle state, transitions, routing, and APIs.",
        row1Btn: "Talk to Expert",
        row1BtnUrl: "#contact-form",
        row2Title: "Team Augmentation Options",
        row2P1: "Scale up or down rapidly according to requirements.",
        row2P2: "Flexible integration with your existing dev team.",
        row2Btn: "Scale Team Now",
        row2BtnUrl: "#contact-form"
      },
      faqs: {
        type: "faqs",
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know",
        items: [{ question: "Do you sign NDA?", answer: "Yes, we prioritize security." }]
      },
      cta: {
        type: "cta",
        title: "Ready to Start?",
        subtitle: "Get a free technical consultation today.",
        buttonText: "Schedule Call",
        buttonUrl: "#contact-form"
      },
      whyKrazio: {
        type: "whyKrazio",
        title: "Why Hiring Dedicated Developers from Krazio is the Best Choice?",
        subtitle: "When it comes to IT resources, hiring dedicated developers from Krazio ensures faster development, expert skills, and cost efficiency. Our developers work exclusively on your project, delivering high-quality solutions with full commitment.",
        image: "/why-krazio.jpg"
      }
    };

    const newBlock = templates[type] || { type };
    setBlocks(prev => [...prev, newBlock]);
    setShowAddBlockModal(false);

    // Automatically expand the newly added block
    const nextIdx = blocks.length;
    setExpandedBlocks(prev => ({ ...prev, [nextIdx]: true }));
  };

  const getBlockLabel = (block: any) => {
    const typeLabel = block.type ? block.type.charAt(0).toUpperCase() + block.type.slice(1) : "Unknown";
    const titleVal = block.title || block.heading || block.row1Title || "";
    return titleVal ? `${typeLabel}: ${stripHtml(titleVal)}` : `${typeLabel} Section`;
  };

  const getBlockBadgeColor = (type: string) => {
    switch (type) {
      case "hero": return "bg-indigo-50 text-indigo-700 border border-indigo-200/60";
      case "benefits": return "bg-emerald-50 text-emerald-700 border border-emerald-200/60";
      case "services": return "bg-blue-50 text-blue-700 border border-blue-200/60";
      case "pricing": return "bg-pink-50 text-pink-700 border border-pink-200/60";
      case "interview": return "bg-purple-50 text-purple-700 border border-purple-200/60";
      case "stories": return "bg-teal-50 text-teal-700 border border-teal-200/60";
      case "expertise": return "bg-amber-50 text-amber-700 border border-amber-200/60";
      case "augmentation": return "bg-cyan-50 text-cyan-700 border border-cyan-200/60";
      case "faqs": return "bg-violet-50 text-violet-700 border border-violet-200/60";
      case "cta": return "bg-rose-50 text-rose-700 border border-rose-200/60";
      case "whyKrazio": return "bg-sky-50 text-sky-700 border border-sky-200/60";
      default: return "bg-slate-100 text-slate-700 border border-slate-200";
    }
  };

  const getBlockThumbnail = (type: string, block: any) => {
    const titleText = stripHtml(block.title || block.heading || block.row1Title || "Section Details");
    const gradient = "from-indigo-650 to-indigo-800";
    let icon = "⚡";

    switch (type) {
      case "hero":
        icon = "✨";
        break;
      case "benefits":
        icon = "✔️";
        break;
      case "services":
        icon = "🛠️";
        break;
      case "pricing":
        icon = "🏷️";
        break;
      case "interview":
        icon = "🤝";
        break;
      case "stories":
        icon = "📖";
        break;
      case "expertise":
        icon = "🎓";
        break;
      case "augmentation":
        icon = "👥";
        break;
      case "faqs":
        icon = "❓";
        break;
      case "cta":
        icon = "🚀";
        break;
      case "whyKrazio":
        icon = "💡";
        break;
    }

    return (
      <div className={`h-full min-h-[96px] bg-gradient-to-tr ${gradient} p-3 flex flex-col justify-between text-white relative overflow-hidden select-none`}>
        <div className="absolute right-0 bottom-0 opacity-10 text-7xl font-black translate-x-1/4 translate-y-1/4 pointer-events-none">
          {icon}
        </div>

        <span className="text-[9px] bg-white/20 backdrop-blur-sm border border-white/25 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider w-fit">
          {icon} {type.toUpperCase()}
        </span>
        <div className="font-extrabold text-xs truncate max-w-full z-10">
          {titleText}
        </div>
      </div>
    );
  };

  const getPageThumbnail = (page: any, pageIdx: number) => {
    const titleText = page.title || "Untitled Page";
    const gradients = [
      "from-indigo-600 via-indigo-700 to-indigo-850",
      "from-emerald-600 via-teal-700 to-teal-850",
      "from-pink-600 via-rose-700 to-rose-850",
      "from-purple-600 via-violet-700 to-violet-850",
      "from-blue-600 via-indigo-700 to-indigo-850",
      "from-amber-600 via-orange-700 to-orange-850",
      "from-cyan-600 via-blue-700 to-blue-850",
      "from-rose-600 via-pink-700 to-pink-850"
    ];
    const gradient = gradients[pageIdx % gradients.length];
    const icon = "📄";

    return (
      <div className={`h-32 bg-gradient-to-tr ${gradient} p-4 flex flex-col justify-end text-white relative overflow-hidden select-none`}>
        <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black translate-x-1/4 translate-y-1/4 pointer-events-none">
          {icon}
        </div>

        <div className="font-extrabold text-sm truncate max-w-full z-10">
          {titleText}
        </div>
      </div>
    );
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-500 flex flex-col items-center justify-center p-6 font-sans">
        <div className="animate-spin h-8 w-8 text-indigo-600 border-2 border-t-transparent border-indigo-600 rounded-full" />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen w-screen flex flex-col bg-slate-50 text-slate-800 font-sans overflow-x-hidden">

        {/* Top Navbar */}
        <nav className="w-full bg-black border-b border-zinc-850 flex items-center justify-between px-6 md:px-12 py-4 shadow-sm sticky top-0 z-40 select-none">
          {/* Logo on the left */}
          <div className="flex items-center gap-3 select-none">
            <img src="/logo-k.png" alt="K" className="h-8 w-auto object-contain flex-shrink-0" />
          </div>

          {/* User info & Signout on the right */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-650 to-purple-600 text-white font-bold flex items-center justify-center shadow-md flex-shrink-0">
                A
              </div>
              <div className="hidden sm:block text-left overflow-hidden">
                <span className="text-xs font-bold text-slate-200 block leading-tight truncate">
                  admin
                </span>
                <span className="text-[10px] text-zinc-400 block truncate leading-none mt-0.5">
                  CMS Administrator
                </span>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-red-400 hover:bg-red-950/20 border border-zinc-800 hover:border-red-900/60 transition-all cursor-pointer shadow-sm bg-zinc-900"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto">
          {loadingPages ? (
            <div className="flex-1 flex flex-col items-center justify-center py-40">
              <div className="animate-spin h-8 w-8 text-indigo-600 border-2 border-t-transparent border-indigo-600 rounded-full" />
              <p className="text-slate-500 text-sm mt-4 font-semibold">Loading page configurations...</p>
            </div>
          ) : selectedPage ? (
            // UNIFIED SCROLLABLE MULTI-SECTION EDITOR
            <div className="max-w-4xl w-full mx-auto space-y-8 text-left animate-fade-in pb-36">
              {/* Back to Pages Collection Link */}
              <button
                onClick={() => setSelectedPage(null)}
                className="flex items-center gap-2 text-xs font-bold text-indigo-650 hover:text-indigo-850 transition-colors cursor-pointer select-none"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                <span>Back to Pages Collection</span>
              </button>

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 leading-none">
                    {selectedPage.title}
                  </h1>
                  <p className="text-slate-500 text-sm mt-2 font-medium flex items-center gap-2">
                    Route: <span className="text-indigo-650 font-mono bg-indigo-50/60 px-2 py-0.5 rounded border border-indigo-100/55">{selectedPage.slug === "hire-team" ? "/hire-team" : `/hire-team/${selectedPage.slug}`}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedPage.slug === "hire-team" ? "/hire-team" : `/hire-team/${selectedPage.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
                  >
                    <span>Preview</span>
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stacked Sections List */}
              <div className="space-y-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-black text-slate-900">Dynamic Page Sections Zone</h3>
                  <button
                    onClick={() => setShowAddBlockModal(true)}
                    className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border border-indigo-150 rounded-xl text-xs font-bold shadow-sm cursor-pointer transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Add Component Section</span>
                  </button>
                </div>

                {blocks.length === 0 ? (
                  <div className="flex flex-col justify-center items-center py-20 text-center border border-dashed border-slate-200 bg-white rounded-3xl p-8 shadow-sm space-y-4">
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M3 9h18" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">No sections configured</h4>
                      <p className="text-slate-500 text-sm max-w-sm mt-1">Insert content component sections to construct this page layout dynamically.</p>
                      <button
                        onClick={() => setShowAddBlockModal(true)}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer mt-4"
                      >
                        + Add First Section
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-8">
                    {blocks.map((block, blockIdx) => (
                      <div
                        key={blockIdx}
                        className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6 relative text-left"
                      >
                        {/* Section Card Header controls */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                          <div className="flex items-center gap-3">
                            <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider font-mono ${getBlockBadgeColor(block.type)}`}>
                              {block.type}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400">
                              Section #{blockIdx + 1}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* Move Up */}
                            <button
                              onClick={() => moveBlock(blockIdx, "up")}
                              disabled={blockIdx === 0}
                              className="w-9 h-9 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-500 hover:text-indigo-650 rounded-lg border border-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                              title="Move Up"
                            >
                              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                              </svg>
                            </button>

                            {/* Move Down */}
                            <button
                              onClick={() => moveBlock(blockIdx, "down")}
                              disabled={blockIdx === blocks.length - 1}
                              className="w-9 h-9 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-500 hover:text-indigo-650 rounded-lg border border-slate-200 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                              title="Move Down"
                            >
                              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </svg>
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => deleteBlock(blockIdx)}
                              className="w-9 h-9 flex items-center justify-center bg-white hover:bg-red-50 text-slate-455 hover:text-red-655 rounded-lg border border-slate-200 hover:border-red-100 transition-colors cursor-pointer"
                              title="Delete Section"
                            >
                              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.34 9m-4.78 0L9 9m4.78-3L12 3m0 0l-3.22 3m3.22-3h3.56m-7.12 0H6.75A2.25 2.25 0 004.5 8.25v12.5C4.5 21.97 5.61 23 6.97 23h10.06c1.36 0 2.47-1.03 2.47-2.25V8.25a2.25 2.25 0 00-2.25-2.25h-3.56" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Render Fields */}
                        <div className="space-y-6 pt-2">
                          {renderBlockFields(block, blockIdx)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions Form Footer */}
              {blocks.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200/80 px-6 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
                  <div className="max-w-4xl w-full mx-auto flex items-center justify-end gap-3">
                    <button
                      onClick={() => setSelectedPage(null)}
                      className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-sm font-bold shadow-sm cursor-pointer transition-colors flex items-center justify-center whitespace-nowrap"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSavePage}
                      disabled={saving}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl text-sm font-bold shadow-md shadow-indigo-600/10 cursor-pointer disabled:opacity-50 transition-colors flex items-center justify-center whitespace-nowrap"
                    >
                      {saving ? "Saving..." : "Save Page Content"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // PAGES COLLECTION LANDING VIEW
            <div className="max-w-6xl w-full mx-auto space-y-8 text-left">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 leading-none">
                    Pages Collection
                  </h1>
                  <p className="text-slate-500 text-sm mt-2 font-medium">
                    Select a page below to view and manage its component sections.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={openCreatePageModal}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span>Create Page</span>
                  </button>
                </div>
              </div>

              {/* Pages Grid */}
              <div className="space-y-4">
                {pages.filter((p) => p.slug !== "hire-team").length === 0 ? (
                  <div className="flex flex-col justify-center items-center py-20 text-center border border-dashed border-slate-200 bg-white rounded-3xl p-8 shadow-sm space-y-4">
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M3 9h18" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">No pages created</h4>
                      <p className="text-slate-500 text-sm max-w-sm mt-1">Create a new page template route to get started.</p>
                      <button
                        onClick={openCreatePageModal}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-750 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer mt-4"
                      >
                        + Create First Page
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.filter((p) => p.slug !== "hire-team").map((page, pageIdx) => {
                      return (
                        <div
                          key={page.id}
                          onClick={() => handlePageSelect(page.id)}
                          className="bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md rounded-2xl overflow-hidden transition-all flex flex-col justify-between group cursor-pointer"
                        >
                          {/* Card Thumbnail */}
                          {getPageThumbnail(page, pageIdx)}

                          {/* Card Body */}
                          <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                            <div className="space-y-2">
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider font-mono bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                                Route: {page.slug === "hire-team" ? "/hire-team" : `/hire-team/${page.slug}`}
                              </span>
                              <h4 className="font-extrabold text-slate-800 text-sm line-clamp-2 leading-tight">
                                {page.title}
                              </h4>
                              <p className="text-xs text-slate-550 line-clamp-2 leading-normal">
                                Configure dynamic page section layouts, edit copy, CTA settings, and manage sections.
                              </p>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="px-4 py-3 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-indigo-650 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg">
                              {page.content?.blocks?.length || 0} component section{(page.content?.blocks?.length || 0) === 1 ? "" : "s"}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={(e) => { e.stopPropagation(); handlePageSelect(page.id); }}
                                className="p-1.5 bg-white hover:bg-indigo-50 text-slate-550 hover:text-indigo-650 rounded-lg border border-slate-200 hover:border-indigo-100 transition-colors cursor-pointer text-xs font-bold flex items-center gap-1"
                              >
                                <span>Edit Page</span>
                                <svg className="w-3 h-3 text-slate-450" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                              </button>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleDeletePage(page.id, page.title); }}
                                className="p-1.5 bg-white hover:bg-red-50 text-slate-450 hover:text-red-650 rounded-lg border border-slate-200 hover:border-red-100 transition-colors cursor-pointer text-xs font-bold flex items-center gap-1"
                                title="Delete Page"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.34 9m-4.78 0L9 9m4.78-3L12 3m0 0l-3.22 3m3.22-3h3.56m-7.12 0H6.75A2.25 2.25 0 004.5 8.25v12.5C4.5 21.97 5.61 23 6.97 23h10.06c1.36 0 2.47-1.03 2.47-2.25V8.25a2.25 2.25 0 00-2.25-2.25h-3.56" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Add Section Modal */}
        {showAddBlockModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-[28px] max-w-lg w-full p-8 shadow-2xl relative animate-fade-in text-left">
              <button
                onClick={() => setShowAddBlockModal(false)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 hover:bg-slate-250 text-slate-450 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="text-xl font-black text-slate-900 mb-2">Add Page Component Section</h3>
              <p className="text-slate-500 text-sm mb-6">Select a component to append to your page builder layout sequence.</p>

              <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-1">
                {[
                  { id: "hero", label: "Hero Section", desc: "Top introduction section with titles and actions" },
                  { id: "benefits", label: "Benefits Section", desc: "Features/pros list showing your value" },
                  { id: "services", label: "Services Section", desc: "Core services and product definitions" },
                  { id: "pricing", label: "Pricing Section", desc: "Engagement plans and pricing lists" },
                  { id: "interview", label: "Interview Section", desc: "Onboarding trial statistics and headers" },
                  { id: "stories", label: "Stories Section", desc: "Customer reviews and success studies" },
                  { id: "expertise", label: "Expertise Section", desc: "Specific languages and checklist items" },
                  { id: "augmentation", label: "Augmentation Section", desc: "Two rows comparing staff integrations" },
                  { id: "whyKrazio", label: "Why Krazio Section", desc: "Choose Krazio points with right column image" },
                  { id: "faqs", label: "FAQs Section", desc: "List of accordion question-answer lines" },
                  { id: "cta", label: "CTA Section", desc: "Bold section template with bottom action" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => addBlock(item.id)}
                    className="p-4 bg-slate-50/60 hover:bg-slate-100 text-left border border-slate-200/80 hover:border-indigo-400/40 rounded-2xl transition-all cursor-pointer flex flex-col space-y-1 hover:shadow-sm"
                  >
                    <span className="font-extrabold text-sm text-slate-800">{item.label}</span>
                    <span className="text-[11px] text-slate-500 leading-normal">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Create Page Modal */}
        {showCreatePageModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <form
              onSubmit={submitCreatePage}
              className="bg-white border border-slate-200 rounded-[28px] max-w-md w-full p-8 shadow-2xl relative animate-fade-in text-left space-y-6"
            >
              <button
                type="button"
                onClick={() => setShowCreatePageModal(false)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 hover:bg-slate-250 text-slate-450 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div>
                <h3 className="text-xl font-black text-slate-900">Create Dynamic Page</h3>
                <p className="text-slate-500 text-xs mt-1">Configure a new dynamic layout page route template.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">Page Title</label>
                  <input
                    type="text"
                    required
                    value={newPageTitle}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Hire VueJS Developer"
                    className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-slate-800 text-sm placeholder-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">Page Route Slug</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-slate-400 text-xs font-mono">/hire-team/</span>
                    <input
                      type="text"
                      required
                      value={newPageSlug}
                      onChange={(e) => setNewPageSlug(e.target.value)}
                      placeholder="hire-vuejs-developer"
                      className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl pl-24 pr-4 py-2.5 text-slate-800 text-sm font-mono placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreatePageModal(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creatingPage}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-755 text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer transition-colors disabled:opacity-50"
                >
                  {creatingPage ? "Creating..." : "Create Page"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }

  // Login screen
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[440px] bg-white border border-slate-200/80 rounded-[32px] p-8 sm:p-10 shadow-lg relative z-10 flex flex-col">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-650 to-purple-600 mb-4 shadow-sm">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Admin Console</h2>
          <p className="text-slate-500 text-xs mt-1.5 font-semibold">CMS & Page Builder login credentials</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200/80 rounded-2xl text-red-655 text-xs font-semibold flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 shadow-md cursor-pointer mt-6 h-[48px] rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );

  // Render block fields generator
  function renderBlockFields(block: any, idx: number) {
    const renderField = (label: string, key: string, isTextarea = false, rows = 3) => {
      const val = block[key] || "";
      return (
        <div className="space-y-2 text-left">
          <label className="block text-sm font-semibold text-slate-700">{label}</label>
          {isTextarea ? (
            <textarea
              rows={rows}
              value={val}
              onChange={(e) => updateBlockField(idx, key, e.target.value)}
              className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-slate-800 text-sm placeholder-slate-400 resize-y shadow-sm"
            />
          ) : (
            <input
              type="text"
              value={val}
              onChange={(e) => updateBlockField(idx, key, e.target.value)}
              className="w-full bg-white border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-slate-800 text-sm placeholder-slate-400 shadow-sm"
            />
          )}
        </div>
      );
    };

    switch (block.type) {
      case "hero":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Hero Heading / Title", "title")}
            {renderField("Hero Subheading / Subtitle", "subtitle", true, 2)}
            {renderField("About Paragraph Description", "description", true, 3)}
            
            {/* Hero Image Upload */}
            <div className="space-y-2 pt-1 text-left">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Hero Image (Cloudinary / CDN)</label>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                {block.image ? (
                  <img
                    src={block.image}
                    alt="preview"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0 bg-slate-50"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z'/%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 flex-shrink-0 text-slate-400 text-xs font-semibold">
                    No Image
                  </div>
                )}

                <div className="flex-1 w-full space-y-1.5">
                  <input
                    type="text"
                    value={block.image || ""}
                    onChange={(e) => updateBlockField(idx, "image", e.target.value)}
                    placeholder="Pasted Cloudinary URL or /react_developer_hero.png"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none placeholder-slate-400"
                  />
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center justify-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250 rounded-lg text-[10px] font-bold cursor-pointer transition-colors shadow-sm select-none">
                      <span>Choose File...</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(idx, "image", null, file);
                          }
                        }}
                      />
                    </label>
                    {uploadingState[`${idx}-image`] && (
                      <span className="text-[10px] font-semibold text-indigo-650 animate-pulse">
                        Uploading to Cloudinary...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Primary Button Text", "primaryCta")}
              {renderField("Primary Button Link URL", "primaryCtaUrl")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Secondary Button Text", "secondaryCta")}
              {renderField("Secondary Button Link URL", "secondaryCtaUrl")}
            </div>
          </div>
        );

      case "benefits":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Benefits Heading", "title")}
            {renderField("Benefits Subtitle Description", "subtitle", true, 2)}
            {renderField("Checklist Main Title Header", "paragraph")}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Bottom Button Text", "btnText")}
              {renderField("Bottom Button URL", "btnUrl")}
            </div>

            {/* Benefit list array */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Benefits Checklist Items</span>
                <button
                  type="button"
                  onClick={() => addBlockListItem(idx, "items", { label: "Benefit Title", text: "Benefit detail description" })}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                >
                  + Add Checklist Item
                </button>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {(block.items || []).length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No checklist items. Click '+ Add Checklist Item' to insert.</p>
                ) : (
                  (block.items || []).map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider">Checklist Card #{itemIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeBlockListItem(idx, "items", itemIdx)}
                          className="text-[11px] text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Card Title</label>
                          <input
                            type="text"
                            value={item.label || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "label", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Card Description</label>
                          <textarea
                            rows={2}
                            value={item.text || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "text", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 text-xs focus:outline-none resize-y"
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );

      case "services":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Services Section Heading", "title")}
            {renderField("Services Section Subtitle / Paragraph", "subtitle", true, 2)}

            {/* Services list array */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Service Feature Cards</span>
                <button
                  type="button"
                  onClick={() => addBlockListItem(idx, "items", { name: "ReactJS Service", icon: "react", description: "Standard React service delivery description." })}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                >
                  + Add Service Card
                </button>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {(block.items || []).length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No services configured. Click '+ Add Service Card' to insert.</p>
                ) : (
                  (block.items || []).map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider">Service Card #{itemIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeBlockListItem(idx, "items", itemIdx)}
                          className="text-[11px] text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Service Title</label>
                          <input
                            type="text"
                            value={item.name || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "name", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Service Icon Name</label>
                          <input
                            type="text"
                            value={item.icon || "react"}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "icon", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 text-xs focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Card Description</label>
                        <textarea
                          rows={2}
                          value={item.description || item.desc || ""}
                          onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "description", e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-800 text-xs focus:outline-none resize-y"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );

      case "pricing":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Pricing Heading", "title")}
            {renderField("Pricing Description Subtitle", "subtitle", true, 2)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Pricing Section Bottom Button Text", "bottomCtaText")}
              {renderField("Pricing Section Bottom Button Link URL", "bottomCtaUrl")}
            </div>

            {/* Pricing Plans list array */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Pricing Plans</span>
                <button
                  type="button"
                  onClick={() => addBlockListItem(idx, "plans", { name: "Hourly Model", price: "20", unit: "hour", badge: "Pay As You Go", description: "Short NDA description", cta_text: "Get Started", cta_url: "#contact-form", is_featured: false, features: ["Flexible term", "Regular updates"] })}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                >
                  + Add Pricing Plan
                </button>
              </div>

              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                {(block.plans || []).length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No plans defined. Click '+ Add Pricing Plan' to insert.</p>
                ) : (
                  (block.plans || []).map((plan: any, planIdx: number) => (
                    <div key={planIdx} className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-3 relative text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Plan Card #{planIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeBlockListItem(idx, "plans", planIdx)}
                          className="text-[11px] text-red-500 hover:text-red-700 font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Plan Name</label>
                          <input
                            type="text"
                            value={plan.name || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], name: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Price (Number)</label>
                          <input
                            type="text"
                            value={plan.price || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], price: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-550 font-bold uppercase tracking-wider">Billing Unit</label>
                          <input
                            type="text"
                            value={plan.unit || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], unit: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none"
                            placeholder="hour, month, etc."
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-550 font-bold uppercase tracking-wider">Promo Badge Tag</label>
                          <input
                            type="text"
                            value={plan.badge || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], badge: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Button Text</label>
                          <input
                            type="text"
                            value={plan.cta_text || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], cta_text: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-880 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Button Link URL</label>
                          <input
                            type="text"
                            value={plan.cta_url || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], cta_url: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-880 text-xs focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Short Plan Description</label>
                          <textarea
                            rows={2}
                            value={plan.description || ""}
                            onChange={(e) => {
                              const list = [...(block.plans || [])];
                              list[planIdx] = { ...list[planIdx], description: e.target.value };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none resize-y"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Plan Features (One per line)</label>
                          <textarea
                            rows={2}
                            value={plan._featuresRaw !== undefined ? plan._featuresRaw : (plan.features || []).join("\n")}
                            onChange={(e) => {
                              const val = e.target.value;
                              const list = [...(block.plans || [])];
                              list[planIdx] = {
                                ...list[planIdx],
                                features: val.split("\n").filter(Boolean),
                                _featuresRaw: val
                              };
                              updateBlockField(idx, "plans", list);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none resize-y"
                            placeholder="Direct communication&#10;Full NDA security"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-1 select-none">
                        <input
                          type="checkbox"
                          id={`plan-featured-check-${planIdx}`}
                          checked={!!plan.is_featured}
                          onChange={(e) => {
                            const list = [...(block.plans || [])];
                            list[planIdx] = { ...list[planIdx], is_featured: e.target.checked };
                            updateBlockField(idx, "plans", list);
                          }}
                          className="rounded bg-white border-slate-350 text-indigo-650 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                        />
                        <label htmlFor={`plan-featured-check-${planIdx}`} className="text-xs font-bold text-slate-500 cursor-pointer">
                          Highlight this plan (Featured Plan Card)
                        </label>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );

      case "interview":
        return (
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Badge Info Label", "badge")}
              {renderField("Form Panel Title", "formTitle")}
            </div>
            {renderField("Interview Heading Header", "title")}
            {renderField("Description / Subtitle Paragraph", "subtitle", true, 2)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Stat 1 Value", "stat1Val")}
              {renderField("Stat 1 Label Description", "stat1Lbl")}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Stat 2 Value", "stat2Val")}
              {renderField("Stat 2 Label Description", "stat2Lbl")}
            </div>
          </div>
        );

      case "stories":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Stories Main Heading", "title")}
            {renderField("Stories Section Subtitle", "subtitle", true, 2)}

            {/* Stories list array */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Client Success Cards</span>
                <button
                  type="button"
                  onClick={() => addBlockListItem(idx, "items", { title: "Success Project", category: "Retail", desc: "Detailed case study description.", image: "/success_finance.png", techs: ["React JS"], btnText: "Request Quote", btnUrl: "#contact-form" })}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                >
                  + Add Success Story
                </button>
              </div>

              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                {(block.items || []).length === 0 ? (
                  <p className="text-xs text-zinc-500 italic">No success stories defined. Click '+ Add Success Story' to insert.</p>
                ) : (
                  (block.items || []).map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-3 relative text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Story Card #{itemIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeBlockListItem(idx, "items", itemIdx)}
                          className="text-[11px] text-red-550 hover:text-red-700 font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Card Title</label>
                          <input
                            type="text"
                            value={item.title || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "title", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-850 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Category Sector</label>
                          <input
                            type="text"
                            value={item.category || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "category", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-850 text-xs focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 pt-1">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Image (Cloudinary / CDN)</label>
                        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt="preview"
                              className="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0 bg-slate-50"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z'/%3E%3C/svg%3E";
                              }}
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 flex-shrink-0 text-slate-400 text-xs font-semibold">
                              No Image
                            </div>
                          )}

                          <div className="flex-1 w-full space-y-1.5">
                            <input
                              type="text"
                              value={item.image || ""}
                              onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "image", e.target.value)}
                              placeholder="Pasted Cloudinary URL or /path/to/local.png"
                              className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none placeholder-slate-400"
                            />
                            <div className="flex items-center gap-2">
                              <label className="relative inline-flex items-center justify-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250 rounded-lg text-[10px] font-bold cursor-pointer transition-colors shadow-sm select-none">
                                <span>Choose File...</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="sr-only"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      handleImageUpload(idx, "items", itemIdx, file);
                                    }
                                  }}
                                />
                              </label>
                              {uploadingState[`${idx}-items-${itemIdx}`] && (
                                <span className="text-[10px] font-semibold text-indigo-650 animate-pulse">
                                  Uploading to Cloudinary...
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Button Text</label>
                          <input
                            type="text"
                            value={item.btnText || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "btnText", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-850 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Technology tags (comma separated)</label>
                          <input
                            type="text"
                            value={item._techsRaw !== undefined ? item._techsRaw : (item.techs || []).join(", ")}
                            onChange={(e) => {
                              const val = e.target.value;
                              const arr = val.split(",").map(t => t.trim()).filter(Boolean);
                              updateBlockItemField(idx, "items", itemIdx, "techs", arr);
                              updateBlockItemField(idx, "items", itemIdx, "_techsRaw", val);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-850 text-xs focus:outline-none"
                            placeholder="React JS, Redux"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Case Description Details</label>
                        <textarea
                          rows={2}
                          value={item.desc || item.description || ""}
                          onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "desc", e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-850 text-xs focus:outline-none resize-y"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );

      case "expertise":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Expertise Main Title Heading", "title")}
            {renderField("Expertise Description Subtitle", "subtitle", true, 2)}

            {/* Expertise Groups list array */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Expertise Groups</span>
                <button
                  type="button"
                  onClick={() => addBlockListItem(idx, "items", { title: "Languages", items: ["HTML", "CSS"] })}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                >
                  + Add Expertise Group
                </button>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {(block.items || []).length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No expertise groups. Click '+ Add Expertise Group' to insert.</p>
                ) : (
                  (block.items || []).map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-3 relative text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Group Card #{itemIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeBlockListItem(idx, "items", itemIdx)}
                          className="text-[11px] text-red-550 hover:text-red-700 font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Group Category Title</label>
                          <input
                            type="text"
                            value={item.title || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "title", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-850 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Checklist Skills (comma separated)</label>
                          <input
                            type="text"
                            value={item._itemsRaw !== undefined ? item._itemsRaw : (item.items || []).join(", ")}
                            onChange={(e) => {
                              const val = e.target.value;
                              const arr = val.split(",").map(t => t.trim()).filter(Boolean);
                              updateBlockItemField(idx, "items", itemIdx, "items", arr);
                              updateBlockItemField(idx, "items", itemIdx, "_itemsRaw", val);
                            }}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-850 text-xs focus:outline-none"
                            placeholder="Next.js, Redux, ES6"
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );

      case "augmentation":
        return (
          <div className="grid grid-cols-1 gap-6 text-left">
            {/* Row 1 */}
            <div className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-4">
              <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Augmentation Row 1 (Core Values)</span>
              {renderField("Row 1 Title Heading", "row1Title")}
              {renderField("Row 1 Paragraph 1 Description", "row1P1", true, 2)}
              {renderField("Row 1 Paragraph 2 Detail", "row1P2", true, 2)}
              
              {/* Row 1 Image Upload */}
              <div className="space-y-2 pt-1 text-left">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Row 1 Image (Cloudinary / CDN)</label>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  {block.row1Image ? (
                    <img
                      src={block.row1Image}
                      alt="preview"
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0 bg-slate-50"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z'/%3E%3C/svg%3E";
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 flex-shrink-0 text-slate-400 text-xs font-semibold">
                      No Image
                    </div>
                  )}

                  <div className="flex-1 w-full space-y-1.5">
                    <input
                      type="text"
                      value={block.row1Image || ""}
                      onChange={(e) => updateBlockField(idx, "row1Image", e.target.value)}
                      placeholder="Pasted Cloudinary URL or /team_collab_sticky.png"
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none placeholder-slate-400"
                    />
                    <div className="flex items-center gap-2">
                      <label className="relative inline-flex items-center justify-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250 rounded-lg text-[10px] font-bold cursor-pointer transition-colors shadow-sm select-none">
                        <span>Choose File...</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(idx, "row1Image", null, file);
                            }
                          }}
                        />
                      </label>
                      {uploadingState[`${idx}-row1Image`] && (
                        <span className="text-[10px] font-semibold text-indigo-650 animate-pulse">
                          Uploading to Cloudinary...
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderField("Row 1 Button CTA Text", "row1Btn")}
                {renderField("Row 1 Button CTA URL", "row1BtnUrl")}
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-4">
              <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">Augmentation Row 2 (Setup Options)</span>
              {renderField("Row 2 Title Heading", "row2Title")}
              {renderField("Row 2 Paragraph 1 Description", "row2P1", true, 2)}
              {renderField("Row 2 Paragraph 2 Detail", "row2P2", true, 2)}
              
              {/* Row 2 Image Upload */}
              <div className="space-y-2 pt-1 text-left">
                <label className="text-[10px] text-slate-505 font-bold uppercase tracking-wider block">Row 2 Image (Cloudinary / CDN)</label>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  {block.row2Image ? (
                    <img
                      src={block.row2Image}
                      alt="preview"
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0 bg-slate-50"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z'/%3E%3C/svg%3E";
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 flex-shrink-0 text-slate-400 text-xs font-semibold">
                      No Image
                    </div>
                  )}

                  <div className="flex-1 w-full space-y-1.5">
                    <input
                      type="text"
                      value={block.row2Image || ""}
                      onChange={(e) => updateBlockField(idx, "row2Image", e.target.value)}
                      placeholder="Pasted Cloudinary URL or /team_working_table.png"
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none placeholder-slate-400"
                    />
                    <div className="flex items-center gap-2">
                      <label className="relative inline-flex items-center justify-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250 rounded-lg text-[10px] font-bold cursor-pointer transition-colors shadow-sm select-none">
                        <span>Choose File...</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(idx, "row2Image", null, file);
                            }
                          }}
                        />
                      </label>
                      {uploadingState[`${idx}-row2Image`] && (
                        <span className="text-[10px] font-semibold text-indigo-650 animate-pulse">
                          Uploading to Cloudinary...
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderField("Row 2 Button CTA Text", "row2Btn")}
                {renderField("Row 2 Button CTA URL", "row2BtnUrl")}
              </div>
            </div>
          </div>
        );

      case "whyKrazio":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Heading Title", "title")}
            {renderField("Subtitle Description", "subtitle", true, 2)}
            
            {/* Image Upload field */}
            <div className="space-y-2 pt-1 text-left">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Image (Cloudinary / CDN)</label>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                {block.image ? (
                  <img
                    src={block.image}
                    alt="preview"
                    className="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0 bg-slate-50"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cbd5e1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.9 2.9m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 00-1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z'/%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center bg-slate-50 flex-shrink-0 text-slate-400 text-xs font-semibold">
                    No Image
                  </div>
                )}

                <div className="flex-1 w-full space-y-1.5">
                  <input
                    type="text"
                    value={block.image || ""}
                    onChange={(e) => updateBlockField(idx, "image", e.target.value)}
                    placeholder="Pasted Cloudinary URL or /why-krazio.jpg"
                    className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 text-xs focus:outline-none placeholder-slate-400"
                  />
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center justify-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250 rounded-lg text-[10px] font-bold cursor-pointer transition-colors shadow-sm select-none">
                      <span>Choose File...</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(idx, "image", null, file);
                          }
                        }}
                      />
                    </label>
                    {uploadingState[`${idx}-image`] && (
                      <span className="text-[10px] font-semibold text-indigo-650 animate-pulse">
                        Uploading to Cloudinary...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "faqs":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("FAQs Heading Title", "title")}
            {renderField("FAQs Subtitle description text", "subtitle")}

            {/* FAQ Items list array */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-indigo-650 uppercase tracking-wide">FAQ Accordion Lines</span>
                <button
                  type="button"
                  onClick={() => addBlockListItem(idx, "items", { question: "New FAQ Question?", answer: "New FAQ Answer detail." })}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80 rounded-xl text-[11px] font-bold cursor-pointer transition-colors"
                >
                  + Add FAQ Line
                </button>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {(block.items || []).length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No FAQ items defined. Click '+ Add FAQ Line' to insert.</p>
                ) : (
                  (block.items || []).map((item: any, itemIdx: number) => (
                    <div key={itemIdx} className="bg-slate-50/60 border border-slate-200 rounded-xl p-4 space-y-3 relative text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">FAQ line #{itemIdx + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeBlockListItem(idx, "items", itemIdx)}
                          className="text-[11px] text-red-550 hover:text-red-700 font-semibold cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Question Text</label>
                          <input
                            type="text"
                            value={item.question || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "question", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-850 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Answer Text</label>
                          <textarea
                            rows={2}
                            value={item.answer || ""}
                            onChange={(e) => updateBlockItemField(idx, "items", itemIdx, "answer", e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-850 text-xs focus:outline-none resize-y"
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );

      case "cta":
        return (
          <div className="grid grid-cols-1 gap-5">
            {renderField("Banner Title Heading", "title")}
            {renderField("Banner Subtitle Text", "subtitle", true, 2)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderField("Button Text", "buttonText")}
              {renderField("Button Link URL", "buttonUrl")}
            </div>
          </div>
        );

      default:
        return (
          <div className="p-4 border border-slate-200 bg-slate-50/50 rounded-xl text-center text-xs text-slate-500">
            Field editors are not defined for section type "{block.type}".
          </div>
        );
    }
  }
}
