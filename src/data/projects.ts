export interface ProjectStackItem {
  label: string;
  note: string;
}

export interface ProjectFeature {
  title: string;
  detail: string;
}

export interface ProjectLink {
  label: string;
  description: string;
  note: string;
}

export interface ProjectShowcaseItem {
  id: string;
  name: string;
  year: string;
  accent: string;
  accentSoft: string;
  accentText: string;
  shortDescription: string;
  summary: string;
  logoLabel: string;
  logoImage?: string;
  screenshots: string[];
  focus: string[];
  overview: string;
  architecture: string[];
  stack: ProjectStackItem[];
  features: ProjectFeature[];
  links: ProjectLink[];
}

export const projects: ProjectShowcaseItem[] = [
  {
    id: 'devplanner',
    name: 'DevPlanner',
    year: '2026',
    accent: '#0f766e',
    accentSoft: '#dff3ef',
    accentText: '#0f5f58',
    shortDescription: 'AI-assisted planning for PRDs, task breakdowns, and dependency graphs.',
    summary:
      'Turns rough product ideas into structured execution plans, with AI drafting the PRD and the system validating the task graph before it reaches the user.',
    logoLabel: 'DP',
    logoImage: '/logos/DevPlanner.png',
    screenshots: [
      '/screenshots/DevPlanner/1-Home.png',
      '/screenshots/DevPlanner/2-Project-List.png',
      '/screenshots/DevPlanner/3-Chat.png',
      '/screenshots/DevPlanner/4-Workflow-Graph.png',
      '/screenshots/DevPlanner/5-System-diagrams.png',
    ],
    focus: ['PRD drafting', 'Task breakdowns', 'Dependency-safe generation'],
    overview:
      'A planning tool that turns product ideas into structured execution plans with AI-assisted breakdowns.',
    architecture: [
      'Conversation captures product intent before generation starts.',
      'The crew output is validated so the task graph stays acyclic and usable.',
      'Sessions can be locked in after review so generation feels deliberate instead of automatic.',
    ],
    stack: [
      { label: 'FastAPI', note: 'API layer and orchestration.' },
      { label: 'PostgreSQL', note: 'Persisted projects and sessions.' },
      { label: 'LLM orchestration', note: 'Agents draft the PRD and task graph.' },
      { label: 'Graph validation', note: 'Keeps the dependency tree safe.' },
      { label: 'SSE updates', note: 'Live generation feedback.' },
    ],
    features: [
      { title: 'PRD generation', detail: 'Structured drafts that set the scope before implementation starts.' },
      { title: 'Dependency mapping', detail: 'Transforms product notes into a navigable task graph.' },
      { title: 'Real-time progress', detail: 'Streams stage updates while the crew is working.' },
      { title: 'Project graph view', detail: 'Makes the output easy to scan and revise.' },
    ],
    links: [
      { label: 'Source code', description: 'GitHub repository', note: 'https://github.com/asim1734/DevPlanner' },
    ],
  },
  {
    id: 'my-game-den',
    name: 'My Game Den',
    year: '2026',
    accent: '#be185d',
    accentSoft: '#fceaf2',
    accentText: '#9d174d',
    shortDescription: 'Track your game library, build tier lists, and write reviews.',
    summary:
      'A game catalog application for discovery, collection management, tier lists, and personal reviews with a React and Express stack.',
    logoLabel: 'MGD',
    logoImage: '/logos/MyGameDen.png',
    screenshots: [
      '/screenshots/My-game-den/1-Dashboard.png',
      '/screenshots/My-game-den/2-Game-Details.png',
      '/screenshots/My-game-den/3-Browse-section.png',
      '/screenshots/My-game-den/4-Library.png',
      '/screenshots/My-game-den/5-TierList-Builder.png',
    ],
    focus: ['Game discovery', 'Collection management', 'Tier list creation'],
    overview:
      'A game catalog application for discovery, collection management, tier lists, and personal reviews.',
    architecture: [
      'IGDB-backed search and browse flows surface the game catalog quickly.',
      'Collections and tier lists keep the library organized across personal workflows.',
      'Review history and per-game lookup make it easy to revisit prior opinions.',
    ],
    stack: [
      { label: 'React', note: 'Frontend app and stateful interactions.' },
      { label: 'Express', note: 'API routes and protected endpoints.' },
      { label: 'MongoDB', note: 'Collections, games, and reviews.' },
      { label: 'IGDB API', note: 'Game metadata, covers, and discovery data.' },
      { label: 'Drag and drop', note: 'Tier list building interactions.' },
    ],
    features: [
      { title: 'Browse and filters', detail: 'Supports discovery by genre, platform, rating, and release year.' },
      { title: 'Tier list creation', detail: 'Lets users order games into custom lists visually.' },
      { title: 'Game detail pages', detail: 'Surfaces screenshots, trailers, and metadata in one place.' },
    ],
    links: [
      { label: 'Product demo', description: 'Live demo', note: 'https://my-game-den.vercel.app/' },
      { label: 'Source code', description: 'GitHub repository', note: 'https://github.com/asim1734/My-Game-Den' },
    ],
  },
  {
    id: 'workforcehub',
    name: 'WorkforceHub',
    year: '2026',
    accent: '#1d4ed8',
    accentSoft: '#eaf1ff',
    accentText: '#1e40af',
    shortDescription: 'Employee management with auth, role-based access, and admin workflows.',
    summary:
      'A full-stack workforce management platform for secure employee administration, role-based access, and clear dashboard workflows.',
    logoLabel: 'WH',
    logoImage: '/logos/WorkforceHub.png',
    screenshots: [
      '/screenshots/WorkforceHub/1-Directory.png',
      '/screenshots/WorkforceHub/2-Dashboard.png',
      '/screenshots/WorkforceHub/3-Logs.png',
      '/screenshots/WorkforceHub/4-Info-cards.png',
    ],
    focus: ['Role-based access', 'User administration', 'Operational clarity'],
    overview:
      'A full-stack workforce management platform for secure employee administration and role-based access.',
    architecture: [
      'Auth flow protects the administrative surface and keeps user actions scoped by role.',
      'Search and pagination keep the list views responsive as records grow.',
      'Dockerized deployment makes the setup easier to run and reproduce.',
    ],
    stack: [
      { label: 'React', note: 'Interactive dashboard UI.' },
      { label: 'Express', note: 'Backend API and route handling.' },
      { label: 'MongoDB', note: 'User and organization data.' },
      { label: 'JWT auth', note: 'Session protection and access control.' },
      { label: 'Docker', note: 'Repeatable deployment setup.' },
    ],
    features: [
      { title: 'RBAC', detail: 'Different permissions for admin, HR, manager, and employee roles.' },
      { title: 'Search and pagination', detail: 'Keeps the user directory readable and fast.' },
      { title: 'Protected routes', detail: 'Locks down sensitive workflows and views.' },
      { title: 'Responsive dashboard', detail: 'Works across desktop and tablet layouts.' },
    ],
    links: [
      { label: 'Source code', description: 'GitHub repository', note: 'https://github.com/asim1734/WorkforceHub' },
    ],
  },
];
