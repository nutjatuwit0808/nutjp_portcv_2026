"use client";

import { useEffect, useState } from "react";

export const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "case-studies",
  "projects",
  "experience",
  "credentials",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_LABEL_KEYS: Record<SectionId, string> = {
  hero: "nav.home",
  about: "nav.about",
  skills: "nav.skills",
  "case-studies": "nav.caseStudies",
  projects: "nav.projects",
  experience: "nav.experience",
  credentials: "nav.credentials",
  contact: "nav.contact",
};

export const SECTION_LABELS: Record<SectionId, string> = {
  hero: "Home",
  about: "About",
  skills: "Skills",
  "case-studies": "Case Studies",
  projects: "Projects",
  experience: "Experience",
  credentials: "Credentials",
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
