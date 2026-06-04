import type { Skill } from '@/components/SkillsGrid';

export const skills: Skill[] = [
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
