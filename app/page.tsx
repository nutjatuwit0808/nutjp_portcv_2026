import { FloatingSidebar } from "@/components/FloatingSidebar";
import { MobileNav } from "@/components/MobileNav";
import { TopProgressBar } from "@/components/TopProgressBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechnicalArsenal } from "@/components/TechnicalArsenal";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <TopProgressBar />
      <FloatingSidebar />
      <MobileNav />
      <main className="pt-14">
        <Hero />
        <About />
        <TechnicalArsenal />
        <FeaturedProjects />
        <ExperienceTimeline />
        <Contact />
      </main>
    </div>
  );
}
