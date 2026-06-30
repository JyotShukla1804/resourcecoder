"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const hash = window.location.hash;
        if (hash) {
          const id = decodeURIComponent(hash.replace("#", ""));
          const element = document.getElementById(id);
          if (element) {
            // Smooth scroll with offset for sticky header
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      // Run on mount
      handleScroll();

      // Listen for hashchange events
      window.addEventListener("hashchange", handleScroll);
      return () => {
        window.removeEventListener("hashchange", handleScroll);
      };
    }
  }, []);

  return null;
}
