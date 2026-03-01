"use client";

import { useEffect, useState } from "react";

export const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_LABELS: Record<SectionId, string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  experience: "Experience",
  contact: "Contact",
};

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
            break;
          }
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
