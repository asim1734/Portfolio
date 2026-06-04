import { Hero } from '@/components/Hero';
import { ChatSection } from '@/components/ChatSection';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { SkillsGrid } from '@/components/SkillsGrid';
import { ContactSection } from '@/components/ContactSection';
import { skills } from '@/data/skills';

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <ChatSection />
      <div id="experience" className="scroll-mt-24 md:scroll-mt-28" aria-hidden="true" />
      <ProjectShowcase />
      <SkillsGrid skills={skills} />
      <ContactSection />
      <div id="publications" className="scroll-mt-24 md:scroll-mt-28" aria-hidden="true" />
    </main>
  );
}
