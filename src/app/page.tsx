import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { SkillsGrid, type Skill } from '@/components/SkillsGrid';

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'React Flow'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Vercel', 'CI/CD', 'Monorepos'],
  },
  {
    category: 'Architecture',
    items: ['State Management', 'Design Systems', 'Zod Validation', 'Drag & Drop APIs'],
  },
  {
    category: 'AI & ML',
    items: ['LLM Integration', 'Prompt Engineering', 'Multi-Agent Systems'],
  },
  {
    category: 'Soft Skills',
    items: ['Leadership', 'Communication', 'Problem Solving', 'Mentoring'],
  },
];

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <div id="experience" className="scroll-mt-24 md:scroll-mt-28" aria-hidden="true" />
      <ProjectShowcase />
      <SkillsGrid skills={skills} />
      <div id="publications" className="scroll-mt-24 md:scroll-mt-28" aria-hidden="true" />
    </main>
  );
}
