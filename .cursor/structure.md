# Portfolio SPA - File Structure

Use this structure as reference when working on the nutjp_portcv_2026 portfolio project.

```
app/
├── layout.tsx          # Update metadata, dark mode default
├── page.tsx            # Single page - composes all sections
├── globals.css         # Dark theme, accent colors
components/
├── FloatingSidebar.tsx # Overlay nav with ScrollSpy
├── Hero.tsx
├── About.tsx
├── TechnicalArsenal.tsx
├── FeaturedProjects.tsx
├── ExperienceTimeline.tsx
├── Contact.tsx
├── MobileNav.tsx       # Hamburger menu for mobile
lib/
├── scroll-utils.ts     # ScrollSpy logic, smooth scroll
public/
├── resume_jatuwit_2026.pdf  # Copy from external path
├── profile.jpg         # Placeholder - user to add
```
