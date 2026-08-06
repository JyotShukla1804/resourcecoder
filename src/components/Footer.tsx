"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Slider from "react-slick";
const BehanceIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M9.825 10.366c.866-.37 1.487-1.127 1.487-2.185 0-1.848-1.391-2.616-3.719-2.616H2v13h5.753c2.723 0 4.148-1.07 4.148-3.036 0-1.332-.781-2.28-2.076-2.631zm-4.708-2.261h2.247c1 0 1.545.412 1.545 1.137 0 .73-.556 1.191-1.574 1.191H5.117V8.105zm0 7.828v-3.023h2.528c1.233 0 1.93.473 1.93 1.444 0 .963-.67 1.579-2.002 1.579H5.117zm11.233-5.32c-2.316 0-3.692 1.636-3.692 4.025 0 2.502 1.464 4.07 3.791 4.07 1.83 0 3.013-1.002 3.39-2.477h-2.164c-.266.6-.837.95-1.503.95-1.163 0-1.802-.821-1.85-2.096h5.666c.026-.263.042-.562.042-.876 0-2.378-1.282-3.596-3.68-3.596zm-1.583 2.52c.118-1.042.85-1.635 1.64-1.635.867 0 1.442.614 1.516 1.635h-3.156zM13.411 6.551h5.811v1.654h-5.811z" />
  </svg>
);
import {
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Download,
  Users,
} from "lucide-react";
const FacebookIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const XIcon = ({ className = "" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from "next/navigation";

const SocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300"
  >
    <Icon className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    href={to}
    className="text-gray-400 hover:text-white transition-colors duration-300 block"
  >
    {children}
  </Link>
);

const LocationCard = ({ country, flag, city, address }: { country?: string; flag: string; city: string; address: string }) => (
  <div className="p-4 border border-gray-800 rounded-sm bg-gray-900/50 h-full w-[400px] mx-2">
    <div className="flex items-center gap-2 mb-2">
      <img src={flag} alt={city} className="h-3 object-contain" />
      <h4 className="text-white font-medium">{city}</h4>
    </div>
    <p className="text-gray-400 text-sm">{address}</p>
  </div>
);

const Certification = ({ image, alt }: { image: string; alt?: string }) => (
  <div className="flex items-center justify-center p-2">
    <img src={image} alt={alt} className="h-20 object-contain" />
  </div>
);

const Rating = ({ platform, logo, link }: { platform: string; logo: string; link: string }) => (
  <div className="flex flex-col items-center">
    {/* <img src={logo} alt={platform} className="h-12 mt-1 mx-3" /> */}
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={logo}
        alt={platform}
        className="h-12 mt-1 mx-3 cursor-pointer"
      />
    </a>
  </div>
);

const Footer = () => {
  const officesSliderRef = useRef(null);
  const globalSliderRef = useRef(null);

  const [locationsRef, locationsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [officesRef, officesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [certificationsRef, certificationsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [footerRef, footerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();
  const dunsSealSrc =
    "https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1";
  const [isDunsSealAllowedHost, setIsDunsSealAllowedHost] = useState(false);

  useEffect(() => {
    const host = window.location.hostname;
    setIsDunsSealAllowedHost(
      host === "kraziocloud.com" || host === "www.kraziocloud.com",
    );
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000, // make this HIGH for smoother continuous feel
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // no delay, keep it moving
    cssEase: "linear", // ensures constant speed
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const logos = [
    {
      id: 1,
      image: "/Infyniaa.svg",
      link: "https://infyniaa.com/",
      name: "Infyniaa",
      showName: true,
      alt: "Infyniaa company logo",
      width: 140,
      height: 60,
    },
    {
      id: 2,
      image: "/company-Logo.svg",
      link: "https://www.eyezonai.com/",
      name: "EyezonAI",
      showName: true,
      alt: "EyezonAi company logo",
      width: 140,
      height: 60,
    },
    {
      id: 3,
      image: "/Frame 33.svg",
      link: "https://fluxoraa.com/",
      name: "Fluxoraa",
      showName: false,
      alt: "Fluxoraa company logo",
      width: 140,
      height: 60,
    },
    {
      id: 4,
      image: "/NextarTech.svg",
      link: "https://nextartech.com/",
      name: "NextarTech",
      showName: false,
      alt: "NextarTech company logo",
      width: 140,
      height: 60,
    },
    {
      id: 5,
      image: "/VR Labs Studio.svg",
      link: "https://vrlabsstudio.com/",
      name: "VR Lab Studio",
      showName: false,
      alt: "VR Lab Studio company logo",
      width: 140,
      height: 60,
    },
    {
      id: 6,
      image: "/Orbiixa.svg",
      link: "https://orbiixa.com/",
      name: "Orbiixa",
      showName: true,
      alt: "orbiixa company logo",
      width: 140,
      height: 60,
    },
    {
      id: 7,
      image: "/Code MVPS.svg",
      link: "https://codemvps.com/",
      name: "Code MVPS",
      showName: true,
      alt: "Code MVPS company logo",
      width: 140,
      height: 60,
    },
  ];
  const indiaLocations = [
    {
      country: "India",
      flag: "https://assets.bacancytechnology.com/main-boot-5/images/india-flag.svg",
      city: "Ahmedabad",
      address:
        "101 B Wing, Ganesh Glory 11, Jagatpur Rd, Near BSNL Office, Gota, Ahmedabad, Gujarat, India - 382470",
    },
    {
      country: "Hongkong",
      flag: "https://flagcdn.com/h40/hk.png",
      city: "Hong Kong",
      address:
        "Block J, 29/F, King Palace Plaza, 55 King Yip Street, Kwun Tong, Hong Kong",
    },
    {
      country: "Netherlands",
      flag: "https://flagcdn.com/h40/nl.png",
      city: "Rotterdam",
      address: "Groenendaal 31C, 3011 SL Rotterdam, The Netherlands, Europe",
    },
    {
      country: "Singapore",
      flag: "https://flagcdn.com/h40/sg.png",
      city: "Singapore",
      address: "380 JIn Besar, Singapore 209000",
    },
    {
      country: "UAE",
      flag: "https://flagcdn.com/h40/ae.png",
      city: "Abu Dhabi",
      address:
        "Al Khatem Tower, ADGM Square, Al Maryah Island Abu Dhabi, Abu Dhabi",
    },
    {
      country: "USA",
      flag: "https://flagcdn.com/h40/us.png",
      city: "New York",
      address:
        "1325 Avenue of the Americas, 27th and 28th Floors, New York City, NY 10019, United States",
    },
    // {
    //   country: "Australia",
    //   flag: "https://flagcdn.com/h40/au.png",
    //   city: "Perth",
    //   address: "St Martins Tower, Level 27/44 St Georges Terrace, Perth WA 6000, Australia"
    // },
  ];

  const usLocations = [
    {
      country: "USA",
      flag: "https://flagcdn.com/h40/us.png",
      city: "New York",
      address:
        "1325 Avenue of the Americas, 27th and 28th Floors, New York City, NY 10019, United States",
    },
    {
      country: "UAE",
      flag: "https://flagcdn.com/h40/ae.png",
      city: "Abu Dhabi",
      address:
        "Al Khatem Tower, ADGM Square, Al Maryah Island Abu Dhabi, Abu Dhabi",
    },
    {
      country: "Australia",
      flag: "https://flagcdn.com/h40/au.png",
      city: "Perth",
      address:
        "St Martins Tower, Level 27/44 St Georges Terrace, Perth WA 6000, Australia",
    },
    {
      country: "UK",
      flag: "https://flagcdn.com/h40/gb.png",
      city: "London",
      address:
        "4th Floor, Rex House, 4-12 Regent St., London SW1Y 4PE, United Kingdom",
    },
  ];

  const certifications = [
    { image: "/cer1.webp", alt: "Clutch Premium" },
    { image: "/cer2.webp", alt: "Clutch Global" },
    { image: "/cer4.webp", alt: "Great Place to Work" },
    { image: "/cer5.webp", alt: "Business Partner" },
    { image: "/cer6.webp", alt: "App Development" },
    { image: "/cer7.webp", alt: "Top Developers" },
    { image: "/cer8.webp", alt: "Top B2B Company" },
    { image: "/cer9.webp", alt: "Top Design Company" },
    { image: "/cer10.webp", alt: "Top Web Developers" },
    { image: "/cer11.webp", alt: "Top Mobile App Development Company" },
    { image: "/cer14.webp", alt: "Top E-Commerce Developers" },
    { image: "/cer15.jpg", alt: "Top AI Companies" },
    { image: "/cer16.webp", alt: "Top Blockchain Companies" },
    { image: "/cer17.webp", alt: "Top Digital Marketing Agencies" },
    { image: "/cer18.png", alt: "Top SEO Companies" },
    { image: "/cer19.webp", alt: "Top Social Media Marketing Companies" },
    {
      image: "/designrush2.png",
      alt: "Top designRush Companies",
      link: "https://www.designrush.com/agency/profile/krazio-cloud-pvt-ltd",
    },
  ];

  const ratings = [
    {
      platform: "Google",
      logo: "/cer13.webp",
      rating: "4.6",
      link: "https://share.google/8yIuAi60glaGa7drU",
    },
    {
      platform: "Clutch",
      logo: "/cer3.webp",
      rating: "4.8",
      link: "https://clutch.co/profile/krazio-cloud",
    },
    {
      platform: "GoodFirms",
      logo: "/cer12.webp",
      rating: "4.8",
      link: "https://www.goodfirms.co/company/krazio-cloud-pvt-ltd",
    },
    {
      platform: "metaverse",
      logo: "/metaverse-standards-logo-60px.svg",
      link: "https://metaverse-standards.org/",
    },
  ];

  // Footer links based on App.js routes, removing unnecessary/extra ones
  const footerLinks = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "https://kraziocloud.com/case-studies/", label: "Case Studies" },
    { to: "https://kraziocloud.com/blogs/", label: "Most Recent Blogs" },
    { to: "https://kraziocloud.com/careers/", label: "Careers" },
    { to: "https://kraziocloud.com/contact/", label: "Contact" },
    { to: "https://kraziocloud.com/refund-policy/", label: "Refund Policy" },
    { to: "/partner-with-us", label: "Our Partners" },
    { to: "https://kraziocloud.com/global-locations/", label: "Global Locations" },
    { to: "https://kraziocloud.com/newsroom/", label: "Press & Newsroom" },
    { to: "https://kraziocloud.com/csr/", label: "CSR" },
    { to: "https://kraziocloud.com/ai-agent/", label: "AI Agent" },
    { to: "https://kraziocloud.com/products/", label: "Products" },
    { to: "https://kraziocloud.com/life-at-krazio/", label: "Life At Krazio" },
    { to: "https://kraziocloud.com/leadership/", label: "Our Leadership Team" },
    { to: "https://kraziocloud.com/privacy-policy/", label: "Privacy Policy" },
  ];

  const pathname = usePathname();
  const loopLocations = [...indiaLocations, ...indiaLocations];
  const AutoAnimateSlider = ({ indiaLocations }: { indiaLocations: any[] }) => { };
  // Duplicate the array so we can loop seamlessly

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-black text-white">
      {/* Offices and Development Centers */}
      <motion.div
        ref={officesRef}
        variants={containerVariants}
        initial="hidden"
        animate={officesInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 "
      >
        <div className="flex justify-between items-center mb-6 mt-6">
          <motion.h2 variants={itemVariants} className="text-2xl font-bold">
            Offices and Development Centers
          </motion.h2>
        </div>

        {/* <motion.div variants={itemVariants}>
          <Slider ref={officesSliderRef} {...sliderSettings}>
            {indiaLocations.map((location, index) => (
              <LocationCard key={`india-${index}`} {...location} />
            ))}
          </Slider>

        </motion.div> */}

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }} // slide full width
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 20, // adjust speed
            }}
          >
            {loopLocations.map((location, index) => (
              <div key={index} className="min-w-[250px] flex-shrink-0">
                <LocationCard {...location} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Global Presence */}
      <motion.div
        ref={locationsRef}
        variants={containerVariants}
        initial="hidden"
        animate={locationsInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800 "
      >
        {/* <div className="flex justify-between items-center mb-6">
          <motion.h2 variants={itemVariants} className="text-2xl font-bold">
            Global Presence
          </motion.h2>
          <div className="flex gap-2">
            <button
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              onClick={() => globalSliderRef.current?.slickPrev()}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              onClick={() => globalSliderRef.current?.slickNext()}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div> */}

        {/* <motion.div variants={itemVariants}>
          <Slider ref={globalSliderRef} {...sliderSettings}>
            {usLocations.map((location, index) => (
              <LocationCard key={`us-${index}`} {...location} />
            ))}
          </Slider>
        </motion.div> */}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-6"
            >
              {ratings.map((rating, index) => (
                <Rating key={index} {...rating} />
              ))}
            </motion.div>

            {isDunsSealAllowedHost && (
              <motion.div
                variants={itemVariants}
                className="mt-6 inline-block rounded bg-white p-1"
              >
                <iframe
                  id="Iframe1"
                  src={dunsSealSrc}
                  width="114"
                  height="97"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  title="Dun & Bradstreet Registered Seal"
                  className="bg-white"
                />
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
              <a
                href="/krazio-corporate-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple inline-flex items-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                <span className="font-medium">Krazio Profile</span>
              </a>
              <Link
                href="/partner-with-us"
                className="btn-ripple inline-flex items-center px-6 py-3 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors duration-300 text-white"
              >
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">Partner</span>
              </Link>
            </motion.div>

          </div>

          {/* <div className="flex flex-col items-end justify-center">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div>
                <h3 className="text-gray-400">Contact Number</h3>
                <p className="text-white text-lg">+91 7202002034 | +1 (623) 887-5363</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-300" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-4">
              <div>
                <h3 className="text-gray-400">Email Us</h3>
                <p className="text-white text-lg">sales@kraziocloud.com</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-300" />
              </div>
            </motion.div>
          </div> */}

          <div className="flex flex-col items-start md:items-end justify-center">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <div className="text-right">
                <h3 className="text-gray-400">Contact Number</h3>
                <p className="text-white text-sm sm:text-base md:text-lg whitespace-nowrap">
                  <a href="tel:+917202002034"> +91 7202002034 </a>|
                  <a href="tel:+1(623)887-5363"> +1 (623) 887-5363</a>
                </p>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Phone className="w-6 h-6 text-gray-300" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-4"
            >
              <div className="text-right">
                <h3 className="text-gray-400">Email Us</h3>
                <a href="mailto:sales@kraziocloud.com">
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    sales@kraziocloud.com
                  </p>
                </a>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* <div className="border-t border-gray-800 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="
            group
            flex
            items-center
            justify-center
            w-[120px]
            sm:w-[140px]
            md:w-[160px]
          "
        >
          <img
            src={logo.image}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="
              h-8
              sm:h-10
              md:h-12
              w-auto
              max-w-full
              object-contain
              opacity-80
              transition-all
              duration-300
              ease-out
              will-change-transform
              group-hover:opacity-100
              group-hover:scale-105
            "
          />
        </div>
      ))}
    </div>
  </div>
</div> */}
      {/* <div className="border-t border-gray-800 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="group flex items-center gap-3"
        >
          <img
            src={logo.image}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="
              h-8
              sm:h-10
              md:h-12
              w-auto
              object-contain
              opacity-80
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:scale-105
            "
          />

          {logo.showName && (
            <span className=" text-base
      sm:text-lg
      md:text-xl
      font-bold
      text-white
      whitespace-nowrap
      tracking-wide">
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</div> */}
      {/* <div className="border-t border-gray-800 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-x-10
        gap-y-8
        items-center
      "
    >
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="
            group
            flex
            flex-row
            items-center
            justify-center
            gap-4
          "
        >
          <img
            src={logo.image}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="
              h-8
              sm:h-10
              md:h-12
              w-auto
              object-contain
              opacity-80
              transition-all
              duration-300
              ease-out
              group-hover:opacity-100
              group-hover:scale-105
            "
          />

          {logo.showName && (
            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                font-bold
                text-white
                tracking-wide
                whitespace-nowrap
              "
            >
              {logo.name}
            </span>
          )}
        </div>
      ))}
    </div>

  </div>
</div> */}
      <div className=" py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-flex flex-col items-center">
              <span className="text-white/50 text-[11px] sm:text-xs uppercase tracking-[0.25em] mb-1">
                Part of
              </span>
              <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-white/40 drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)] [mask-image:linear-gradient(to_bottom,white_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,white_75%,transparent)]">
                Krazio Group
              </h2>
              <div className="mt-2 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((logo) => (
              <a
                key={logo.id}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className="h-7 sm:h-8 md:h-10 w-auto object-contain opacity-80 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-105"
                />

                {logo.showName && (
                  <span className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide whitespace-nowrap">
                    {logo.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Certifications */}
      {/* {location.pathname !== "/certificates" && (
        <motion.div
          ref={certificationsRef}
          variants={containerVariants}
          initial="hidden"
          animate={certificationsInView ? "visible" : "hidden"}
          className="py-8 border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-6 gap-4"
            >
              {certifications.map((cert, index) => (
                <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer">
                  <Certification {...cert} />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )} */}

      {/* Footer Links */}
      <motion.div
        ref={footerRef}
        variants={containerVariants}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        className="hidden md:block border-t border-gray-800 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-between gap-y-6"
          >
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </nav>


            <div className="flex gap-4">
              <SocialLink
                href="https://www.facebook.com/kraziocloud/"
                icon={FacebookIcon}
              />
              <SocialLink href="http://twitter.com/KrazioCloud" icon={XIcon} />
              <SocialLink
                href="http://linkedin.com/company/krazio-cloud"
                icon={LinkedinIcon}
              />
              <SocialLink
                href="http://instagram.com/krazio_cloud"
                icon={InstagramIcon}
              />
              <SocialLink
                href="https://www.behance.net/kraziocloud"
                // icon={() => (
                //   <img
                //     src={beIcon}
                //     alt="Behance"
                //     className="w-5 h-5 object-contain "
                //   />
                // )}
                icon={() => <BehanceIcon className="w-5 h-5 text-white" />}
              />
              <SocialLink
                href="https://www.youtube.com/@kraziocloud"
                icon={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube-icon lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                )}
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            <p>
              Copyright © {currentYear} Krazio Cloud. All Rights Reserved. An
              ISO 27001:2013 Certified Company
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export { Footer };
