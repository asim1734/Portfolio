import { Hero } from '@/components/Hero';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { SkillsGrid, type Skill } from '@/components/SkillsGrid';

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'Vercel', 'AWS', 'CI/CD'],
  },
  {
    category: 'Architecture',
    items: ['State Management', 'Design Systems', 'Testing', 'Performance'],
  },
  {
    category: 'AI & ML',
    items: ['LLM Integration', 'Prompt Engineering', 'Vector DBs'],
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
      <ProjectShowcase />
      <SkillsGrid skills={skills} />
    </main>
  );
}
