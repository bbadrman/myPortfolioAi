import { create } from 'zustand';

const sampleProjects = [
  {
    id: 1,
    slug: 'neon-dashboard',
    title: 'Neon Dashboard',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    technologies: ['React', 'Three.js', 'Tailwind'],
    description: 'Dashboard analytique immersif avec charts 3D et UI futuriste.',
    stack: ['React', 'Three Fiber', 'Zustand', 'Framer Motion', 'API Platform'],
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80'
    ],
    github: 'https://github.com/example/neon-dashboard',
    demo: 'https://demo.neon-dashboard.com'
  },
  {
    id: 2,
    slug: 'metaverse-showcase',
    title: 'Metaverse Showcase',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Three Fiber', 'Node', 'WebGL'],
    description: 'Expérience immersive 3D pour présenter des produits en réalité virtuelle.',
    stack: ['React', 'Three Fiber', 'GSAP', 'Symfony API'],
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80'
    ],
    github: 'https://github.com/example/metaverse-showcase',
    demo: 'https://demo.metaverse.com'
  }
];

const sampleSkills = [
  { name: 'React / Three Fiber', level: 92 },
  { name: 'Symfony / API Platform', level: 85 },
  { name: 'UX Motion Design', level: 88 },
  { name: 'Architecture Cloud', level: 80 }
];

const sampleTestimonials = [
  {
    id: 1,
    author: 'Camille Dubois',
    role: 'CTO, NovaTech',
    message: 'Une expérience utilisateur bluffante avec un socle technique robuste. Livraison impeccable.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    author: 'Julien Martin',
    role: 'Product Designer, Æther',
    message: 'Animations ultra fluides et intégration 3D sur mesure. Collaboration 10/10.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80'
  }
];

export const usePortfolioStore = create((set, get) => ({
  projects: sampleProjects,
  skills: sampleSkills,
  testimonials: sampleTestimonials,
  selectedProject: null,
  selectProject: (slug) => {
    const project = get().projects.find((p) => p.slug === slug);
    set({ selectedProject: project });
    return project;
  },
}));
