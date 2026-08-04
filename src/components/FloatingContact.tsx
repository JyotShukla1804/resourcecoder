"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ChevronDown, Send, Star, Award, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabaseForm } from "@/lib/supabase-form";

const countries = [
  { name: "Afghanistan", code: "AF", dial_code: "+93" }, { name: "Albania", code: "AL", dial_code: "+355" }, { name: "Algeria", code: "DZ", dial_code: "+213" },
  { name: "Andorra", code: "AD", dial_code: "+376" }, { name: "Angola", code: "AO", dial_code: "+244" }, { name: "Antigua and Barbuda", code: "AG", dial_code: "+1-268" },
  { name: "Argentina", code: "AR", dial_code: "+54" }, { name: "Armenia", code: "AM", dial_code: "+374" }, { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Austria", code: "AT", dial_code: "+43" }, { name: "Azerbaijan", code: "AZ", dial_code: "+994" }, { name: "Bahamas", code: "BS", dial_code: "+1-242" },
  { name: "Bahrain", code: "BH", dial_code: "+973" }, { name: "Bangladesh", code: "BD", dial_code: "+880" }, { name: "Barbados", code: "BB", dial_code: "+1-246" },
  { name: "Belarus", code: "BY", dial_code: "+375" }, { name: "Belgium", code: "BE", dial_code: "+32" }, { name: "Belize", code: "BZ", dial_code: "+501" },
  { name: "Benin", code: "BJ", dial_code: "+229" }, { name: "Bhutan", code: "BT", dial_code: "+975" }, { name: "Bolivia", code: "BO", dial_code: "+591" },
  { name: "Bosnia and Herzegovina", code: "BA", dial_code: "+387" }, { name: "Botswana", code: "BW", dial_code: "+267" }, { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "Brunei", code: "BN", dial_code: "+673" }, { name: "Bulgaria", code: "BG", dial_code: "+359" }, { name: "Burkina Faso", code: "BF", dial_code: "+226" },
  { name: "Burundi", code: "BI", dial_code: "+257" }, { name: "Cabo Verde", code: "CV", dial_code: "+238" }, { name: "Cambodia", code: "KH", dial_code: "+855" },
  { name: "Cameroon", code: "CM", dial_code: "+237" }, { name: "Canada", code: "CA", dial_code: "+1" }, { name: "Central African Republic", code: "CF", dial_code: "+236" },
  { name: "Chad", code: "TD", dial_code: "+235" }, { name: "Chile", code: "CL", dial_code: "+56" }, { name: "China", code: "CN", dial_code: "+86" },
  { name: "Colombia", code: "CO", dial_code: "+57" }, { name: "Comoros", code: "KM", dial_code: "+269" }, { name: "Congo", code: "CG", dial_code: "+242" }, { name: "Congo, Democratic Republic", code: "CD", dial_code: "+243" },
  { name: "Costa Rica", code: "CR", dial_code: "+506" }, { name: "Croatia", code: "HR", dial_code: "+385" }, { name: "Cuba", code: "CU", dial_code: "+53" },
  { name: "Cyprus", code: "CY", dial_code: "+357" }, { name: "Czechia", code: "CZ", dial_code: "+420" }, { name: "Denmark", code: "DK", dial_code: "+45" },
  { name: "Djibouti", code: "DJ", dial_code: "+253" }, { name: "Dominica", code: "DM", dial_code: "+1-767" }, { name: "Dominican Republic", code: "DO", dial_code: "+1-809" },
  { name: "Ecuador", code: "EC", dial_code: "+593" }, { name: "Egypt", code: "EG", dial_code: "+20" }, { name: "El Salvador", code: "SV", dial_code: "+503" },
  { name: "Equatorial Guinea", code: "GQ", dial_code: "+240" }, { name: "Eritrea", code: "ER", dial_code: "+291" }, { name: "Estonia", code: "EE", dial_code: "+372" },
  { name: "Eswatini", code: "SZ", dial_code: "+268" }, { name: "Ethiopia", code: "ET", dial_code: "+251" }, { name: "Fiji", code: "FJ", dial_code: "+679" },
  { name: "Finland", code: "FI", dial_code: "+358" }, { name: "France", code: "FR", dial_code: "+33" }, { name: "Gabon", code: "GA", dial_code: "+241" },
  { name: "Gambia", code: "GM", dial_code: "+220" }, { name: "Georgia", code: "GE", dial_code: "+995" }, { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "Ghana", code: "GH", dial_code: "+233" }, { name: "Greece", code: "GR", dial_code: "+30" }, { name: "Grenada", code: "GD", dial_code: "+1-473" },
  { name: "Guatemala", code: "GT", dial_code: "+502" }, { name: "Guinea", code: "GN", dial_code: "+224" }, { name: "Guinea-Bissau", code: "GW", dial_code: "+245" },
  { name: "Guyana", code: "GY", dial_code: "+592" }, { name: "Haiti", code: "HT", dial_code: "+509" }, { name: "Honduras", code: "HN", dial_code: "+504" },
  { name: "Hungary", code: "HU", dial_code: "+36" }, { name: "Iceland", code: "IS", dial_code: "+354" }, { name: "India", code: "IN", dial_code: "+91" },
  { name: "Indonesia", code: "ID", dial_code: "+62" }, { name: "Iran", code: "IR", dial_code: "+98" }, { name: "Iraq", code: "IQ", dial_code: "+964" },
  { name: "Ireland", code: "IE", dial_code: "+353" }, { name: "Israel", code: "IL", dial_code: "+972" }, { name: "Italy", code: "IT", dial_code: "+39" },
  { name: "Jamaica", code: "JM", dial_code: "+1-876" }, { name: "Japan", code: "JP", dial_code: "+81" }, { name: "Jordan", code: "JO", dial_code: "+962" },
  { name: "Kazakhstan", code: "KZ", dial_code: "+7" }, { name: "Kenya", code: "KE", dial_code: "+254" }, { name: "Kiribati", code: "KI", dial_code: "+686" },
  { name: "Kuwait", code: "KW", dial_code: "+965" }, { name: "Kyrgyzstan", code: "KG", dial_code: "+996" }, { name: "Laos", code: "LA", dial_code: "+856" },
  { name: "Latvia", code: "LV", dial_code: "+371" }, { name: "Lebanon", code: "LB", dial_code: "+961" }, { name: "Lesotho", code: "LS", dial_code: "+266" },
  { name: "Liberia", code: "LR", dial_code: "+231" }, { name: "Libya", code: "LY", dial_code: "+218" }, { name: "Liechtenstein", code: "LI", dial_code: "+423" },
  { name: "Lithuania", code: "LT", dial_code: "+370" }, { name: "Luxembourg", code: "LU", dial_code: "+352" }, { name: "Madagascar", code: "MG", dial_code: "+261" },
  { name: "Malawi", code: "MW", dial_code: "+265" }, { name: "Malaysia", code: "MY", dial_code: "+60" }, { name: "Maldives", code: "MV", dial_code: "+960" },
  { name: "Mali", code: "ML", dial_code: "+223" }, { name: "Malta", code: "MT", dial_code: "+356" }, { name: "Marshall Islands", code: "MH", dial_code: "+692" },
  { name: "Mauritania", code: "MR", dial_code: "+222" }, { name: "Mauritius", code: "MU", dial_code: "+230" }, { name: "Mexico", code: "MX", dial_code: "+52" },
  { name: "Micronesia", code: "FM", dial_code: "+691" }, { name: "Moldova", code: "MD", dial_code: "+373" }, { name: "Monaco", code: "MC", dial_code: "+377" },
  { name: "Mongolia", code: "MN", dial_code: "+976" }, { name: "Montenegro", code: "ME", dial_code: "+382" }, { name: "Morocco", code: "MA", dial_code: "+212" },
  { name: "Mozambique", code: "MZ", dial_code: "+258" }, { name: "Myanmar", code: "MM", dial_code: "+95" }, { name: "Namibia", code: "NA", dial_code: "+264" },
  { name: "Nauru", code: "NR", dial_code: "+674" }, { name: "Nepal", code: "NP", dial_code: "+977" }, { name: "Netherlands", code: "NL", dial_code: "+31" },
  { name: "New Zealand", code: "NZ", dial_code: "+64" }, { name: "Nicaragua", code: "NI", dial_code: "+505" }, { name: "Niger", code: "NE", dial_code: "+227" },
  { name: "Nigeria", code: "NG", dial_code: "+234" }, { name: "North Korea", code: "KP", dial_code: "+850" }, { name: "North Macedonia", code: "MK", dial_code: "+389" },
  { name: "Norway", code: "NO", dial_code: "+47" }, { name: "Oman", code: "OM", dial_code: "+968" }, { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Palau", code: "PW", dial_code: "+680" }, { name: "Panama", code: "PA", dial_code: "+507" }, { name: "Papua New Guinea", code: "PG", dial_code: "+675" },
  { name: "Paraguay", code: "PY", dial_code: "+595" }, { name: "Peru", code: "PE", dial_code: "+51" }, { name: "Philippines", code: "PH", dial_code: "+63" },
  { name: "Poland", code: "PL", dial_code: "+48" }, { name: "Portugal", code: "PT", dial_code: "+351" }, { name: "Qatar", code: "QA", dial_code: "+974" },
  { name: "Romania", code: "RO", dial_code: "+40" }, { name: "Russia", code: "RU", dial_code: "+7" }, { name: "Rwanda", code: "RW", dial_code: "+250" },
  { name: "Saint Kitts and Nevis", code: "KN", dial_code: "+1-869" }, { name: "Saint Lucia", code: "LC", dial_code: "+1-758" }, { name: "Saint Vincent and the Grenadines", code: "VC", dial_code: "+1-784" },
  { name: "Samoa", code: "WS", dial_code: "+685" }, { name: "San Marino", code: "SM", dial_code: "+378" }, { name: "Sao Tome and Principe", code: "ST", dial_code: "+239" },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966" }, { name: "Senegal", code: "SN", dial_code: "+221" }, { name: "Serbia", code: "RS", dial_code: "+381" },
  { name: "Seychelles", code: "SC", dial_code: "+248" }, { name: "Sierra Leone", code: "SL", dial_code: "+232" }, { name: "Singapore", code: "SG", dial_code: "+65" },
  { name: "Slovakia", code: "SK", dial_code: "+421" }, { name: "Slovenia", code: "SI", dial_code: "+386" }, { name: "Solomon Islands", code: "SB", dial_code: "+677" },
  { name: "Somalia", code: "SO", dial_code: "+252" }, { name: "South Africa", code: "ZA", dial_code: "+27" }, { name: "South Korea", code: "KR", dial_code: "+82" },
  { name: "South Sudan", code: "SS", dial_code: "+211" }, { name: "Spain", code: "ES", dial_code: "+34" }, { name: "Sri Lanka", code: "LK", dial_code: "+94" },
  { name: "Sudan", code: "SD", dial_code: "+249" }, { name: "Suriname", code: "SR", dial_code: "+597" }, { name: "Sweden", code: "SE", dial_code: "+46" },
  { name: "Switzerland", code: "CH", dial_code: "+41" }, { name: "Syria", code: "SY", dial_code: "+963" }, { name: "Tajikistan", code: "TJ", dial_code: "+992" },
  { name: "Tanzania", code: "TZ", dial_code: "+255" }, { name: "Thailand", code: "TH", dial_code: "+66" }, { name: "Timor-Leste", code: "TL", dial_code: "+670" },
  { name: "Togo", code: "TG", dial_code: "+228" }, { name: "Tonga", code: "TO", dial_code: "+676" }, { name: "Trinidad and Tobago", code: "TT", dial_code: "+1-868" },
  { name: "Tunisia", code: "TN", dial_code: "+216" }, { name: "Turkey", code: "TR", dial_code: "+90" }, { name: "Turkmenistan", code: "TM", dial_code: "+993" },
  { name: "Tuvalu", code: "TV", dial_code: "+688" }, { name: "Uganda", code: "UG", dial_code: "+256" }, { name: "Ukraine", code: "UA", dial_code: "+380" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" }, { name: "United Kingdom", code: "GB", dial_code: "+44" }, { name: "United States", code: "US", dial_code: "+1" },
  { name: "Uruguay", code: "UY", dial_code: "+598" }, { name: "Uzbekistan", code: "UZ", dial_code: "+998" }, { name: "Vanuatu", code: "VU", dial_code: "+678" },
  { name: "Vatican City", code: "VA", dial_code: "+379" }, { name: "Venezuela", code: "VE", dial_code: "+58" }, { name: "Vietnam", code: "VN", dial_code: "+84" },
  { name: "Yemen", code: "YE", dial_code: "+967" }, { name: "Zambia", code: "ZM", dial_code: "+260" }, { name: "Zimbabwe", code: "ZW", dial_code: "+263" }
];

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === "IN") || countries[0]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",
    linkedinLink: "",
    techStack: "",
    message: "",
  });

  React.useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpenModal);

    // Intercept clicks on CTA buttons across the site
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href && (target.href.includes('#interview-section') || target.href.includes('#contact-form'))) {
        // Check if the form section actually exists on the current page
        const formSectionExists = document.getElementById('interview-section') || document.getElementById('contact-form');
        
        // If there is NO form on this page, open the popup instead of navigating
        if (!formSectionExists) {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }
      }
    };
    
    // Use capture phase to intercept before React Router handles the link click
    window.addEventListener('click', handleGlobalClick, true);

    return () => {
      window.removeEventListener('open-contact-modal', handleOpenModal);
      window.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabaseForm
        .from('upcoming_leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            mobile: formData.phoneNumber,
            company_name: formData.companyName,
            company_web: formData.companyWebsite,
            linkedin: formData.linkedinLink,
            message: `Tech Stack: ${formData.techStack}\nMessage: ${formData.message}`,
            source_website: 'resource-coder-floating-contact',
          }
        ]);

      if (error) {
        console.error("Error submitting form:", error);
        alert(`Failed to submit request. Reason: ${error.message || error.details || 'Unknown Error'}`);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Dispatch an event so other components (like HomeCostCalculator) know it was submitted
      window.dispatchEvent(new Event('contact-modal-submitted'));

      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          companyName: "",
          companyWebsite: "",
          linkedinLink: "",
          techStack: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-[100px] right-6 z-[60] flex flex-col gap-4">
        <Link
          href="https://api.whatsapp.com/send/?phone=918160809521&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-[#4B56D2] to-[#60A5FA] hover:shadow-[0_0_20px_rgba(75,86,210,0.6)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
          </svg>
        </Link>
        <button
          id="floating-contact-button"
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-tr from-[#4B56D2] to-[#60A5FA] hover:shadow-[0_0_20px_rgba(75,86,210,0.6)] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Contact Us"
        >
          <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/40"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[1000px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-y-auto overflow-x-hidden max-h-[95vh]"
            >
              <div className="flex flex-col md:flex-row min-h-full">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 w-9 h-9 bg-slate-100/80 hover:bg-slate-200 text-slate-500 hover:text-slate-700 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left Pane (Blue) */}
                <div className="hidden md:flex md:w-[40%] bg-gradient-to-b from-[#3A45C3] to-[#2B35B3] text-white p-8 lg:p-10 flex-col justify-between relative">
                {/* Decorative glows in blue pane */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-[50px] pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                    Make Your Business,<br />
                    <span className="text-[#FFD700]">Future-Ready</span>
                  </h2>
                  <p className="text-blue-100/90 text-[15px] leading-relaxed">
                    Stay ahead of the curve with next-gen digital solutions, tailored to scale, evolve, and win in tomorrow's market.
                  </p>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
                  <div className="space-y-1">
                    <Star className="w-5 h-5 text-blue-200 mb-2" />
                    <div className="text-2xl font-black text-[#FFD700]">95%</div>
                    <div className="text-xs text-blue-100/80 leading-tight">Customer Retention<br/>Ratio</div>
                  </div>
                  <div className="space-y-1">
                    <Award className="w-5 h-5 text-blue-200 mb-2" />
                    <div className="text-2xl font-black text-[#FFD700]">10+</div>
                    <div className="text-xs text-blue-100/80 leading-tight">Years Industry<br/>Experience</div>
                  </div>
                  <div className="space-y-1">
                    <TrendingUp className="w-5 h-5 text-blue-200 mb-2" />
                    <div className="text-2xl font-black text-[#FFD700]">350+</div>
                    <div className="text-xs text-blue-100/80 leading-tight">Projects Completed</div>
                  </div>
                  <div className="space-y-1">
                    <Globe className="w-5 h-5 text-blue-200 mb-2" />
                    <div className="text-2xl font-black text-[#FFD700]">4+</div>
                    <div className="text-xs text-blue-100/80 leading-tight">Global Offices</div>
                  </div>
                </div>

                <div className="relative z-10 mt-8 space-y-3">
                  <p className="text-sm text-blue-200/90 font-medium">Trusted by leading brands:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      "HSBC.svg", "Indian_Oil.svg", "Intas.svg", "KPMG.svg",
                      "Lodha2.svg", "gujarat_tourism.svg", "Nestle.svg", "Adani.svg"
                    ].map((logo) => (
                      <div key={logo} className="bg-white rounded-lg p-1.5 h-10 sm:h-12 flex items-center justify-center">
                        <img
                          src={`/${logo}`}
                          alt="Brand logo"
                          className="max-h-full max-w-full object-contain filter hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Pane (Form) */}
              <div className="w-full md:w-[60%] p-6 md:p-8 lg:p-10 relative z-10 flex flex-col justify-start bg-white">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-emerald-300 flex items-center justify-center text-white shadow-lg shadow-green-500/30 animate-bounce">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">Request Sent!</h4>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                      Thank you for reaching out. Our tech advisors will review your details and get in touch shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8 text-left pt-1 lg:pt-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e293b] tracking-tight mb-2">
                        Got an idea? Drop it here,
                      </h3>
                      <p className="text-[15px] font-medium text-[#8B5CF6]">
                        We love turning "what ifs" into "it works."
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row 1: Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone and Company Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="flex relative">
                            <button
                              type="button"
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              className="flex items-center justify-center px-3 bg-white border border-slate-200 border-r-0 rounded-l-xl text-slate-700 text-sm shrink-0 gap-1.5 hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50"
                            >
                              <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={`${selectedCountry.name} Flag`} className="w-5 h-3.5 object-cover rounded-sm" />
                              <span>{selectedCountry.dial_code}</span>
                              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 ml-0.5 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            <AnimatePresence>
                              {isCountryDropdownOpen && (
                                <>
                                  <div className="fixed inset-0 z-40" onClick={() => setIsCountryDropdownOpen(false)} />
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-0 mt-2 w-[220px] bg-white border border-slate-100 rounded-xl shadow-xl z-50 overflow-hidden"
                                  >
                                    <div className="max-h-[200px] overflow-y-auto py-2 scrollbar-thin">
                                      {countries.map((country) => (
                                        <button
                                          key={country.code}
                                          type="button"
                                          onClick={() => {
                                            setSelectedCountry(country);
                                            setIsCountryDropdownOpen(false);
                                          }}
                                          className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-left overflow-hidden"
                                        >
                                          <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="w-5 h-3.5 object-cover rounded-sm shrink-0" />
                                          <span className="text-sm font-medium text-slate-700 truncate">{country.name}</span>
                                          <span className="text-xs text-slate-400 ml-auto whitespace-nowrap shrink-0">{country.dial_code}</span>
                                        </button>
                                      ))}
                                    </div>
                                  </motion.div>
                                </>
                              )}
                            </AnimatePresence>

                            <input
                              type="tel"
                              name="phoneNumber"
                              required
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              placeholder="Phone number"
                              className="w-full bg-white border border-slate-200 rounded-r-xl px-3 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Row 3: Website and LinkedIn */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                            Company Website
                          </label>
                          <input
                            type="url"
                            name="companyWebsite"
                            value={formData.companyWebsite}
                            onChange={handleChange}
                            placeholder="https://example.com"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300"
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                            LinkedIn / Instagram Link <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="linkedinLink"
                            required
                            value={formData.linkedinLink}
                            onChange={handleChange}
                            placeholder="Profile URL"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Row 4: Tech Stack (Full Width) */}
                      <div>
                        <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                          Select Tech Stack <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="techStack"
                            required
                            value={formData.techStack}
                            onChange={handleChange}
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select your required tech stack</option>
                            <option value="React.js Developer">React.js Developer</option>
                            <option value="Next.js Developer">Next.js Developer</option>
                            <option value="Angular Developer">Angular Developer</option>
                            <option value="Vue.js Developer">Vue.js Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Node.js Developer">Node.js Developer</option>
                            <option value="Python Developer">Python Developer</option>
                            <option value="Java Developer">Java Developer</option>
                            <option value=".NET Developer">.NET Developer</option>
                            <option value="PHP / Laravel Developer">PHP / Laravel Developer</option>
                            <option value="Golang Developer">Golang Developer</option>
                            <option value="Full-Stack Developer">Full-Stack Developer</option>
                            <option value="MERN Stack Developer">MERN Stack Developer</option>
                            <option value="MEAN Stack Developer">MEAN Stack Developer</option>
                            <option value="JavaScript Developer">JavaScript Developer</option>
                            <option value="TypeScript Developer">TypeScript Developer</option>
                            <option value="React Native Developer">React Native Developer</option>
                            <option value="Flutter Developer">Flutter Developer</option>
                            <option value="iOS Developer">iOS Developer</option>
                            <option value="Android Developer">Android Developer</option>
                            <option value="AI/ML Engineer">AI/ML Engineer</option>
                            <option value="Generative AI / LLM Developer">Generative AI / LLM Developer</option>
                            <option value="AI Integration Developer">AI Integration Developer</option>
                            <option value="Data Engineer">Data Engineer</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="DevOps Engineer">DevOps Engineer</option>
                            <option value="Cloud Engineer (AWS / Azure / GCP)">Cloud Engineer (AWS / Azure / GCP)</option>
                            <option value="WordPress Developer">WordPress Developer</option>
                            <option value="Shopify Developer">Shopify Developer</option>
                            <option value="WooCommerce Developer">WooCommerce Developer</option>
                            <option value="QA / Automation Engineer">QA / Automation Engineer</option>
                            <option value="Cybersecurity / DevSecOps Engineer">Cybersecurity / DevSecOps Engineer</option>
                            <option value="Blockchain Developer">Blockchain Developer</option>
                            <option value="Virtual Reality Development">Virtual Reality Development</option>
                            <option value="Augmented Reality Development">Augmented Reality Development</option>
                            <option value="Mixed Reality Development">Mixed Reality Development</option>
                            <option value="3D Game Modeling">3D Game Modeling</option>
                            <option value="3D Game Development">3D Game Development</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Row 5: Message */}
                      <div>
                        <label className="block text-[13px] font-semibold text-slate-700 mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-[#4B56D2] focus:ring-2 focus:ring-[#4B56D2]/20 transition-all duration-300 resize-none"
                          placeholder="Tell us about your goals, challenges, or project requirements."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`group w-full rounded-xl font-bold py-3.5 text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-4 ${
                          isSubmitting 
                            ? 'bg-slate-400 cursor-not-allowed text-white shadow-none' 
                            : 'bg-[#4B56D2] hover:bg-blue-700 text-white shadow-[0_8px_25px_rgba(75,86,210,0.3)] hover:shadow-[0_12px_35px_rgba(75,86,210,0.5)]'
                        }`}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                        {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                      </button>
                    </form>
                  </>
                )}
              </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
