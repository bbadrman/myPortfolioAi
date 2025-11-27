import { motion } from 'framer-motion';
import HeroCanvas from '../components/HeroCanvas.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { usePortfolioStore } from '../store/usePortfolioStore.js';
import { Link } from 'react-router-dom';

export default function Home() {
  const { projects, skills, testimonials } = usePortfolioStore();

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16 space-y-20">
      <section className="grid md:grid-cols-2 gap-10 items-center pt-6">
        <div className="space-y-6">
          <p className="uppercase text-xs tracking-[0.4em] text-gray-400">Creative Developer</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Portfolio 3D <span className="text-brand">immersif</span>
            <br /> pour expériences digitales.
          </h1>
          <p className="text-gray-300 max-w-xl">
            Je conçois des interfaces modernes, animées et scalables combinant React, Three.js et Symfony API.
          </p>
          <div className="flex gap-3">
            <Link to="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand to-accent text-black font-semibold shadow-neon">
              Voir mes projets
            </Link>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/10">Me contacter</a>
          </div>
        </div>
        <HeroCanvas />
      </section>

      <section id="projects" className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Work</p>
            <h2 className="text-2xl font-semibold">Mes Projets</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <SkillsSection skills={skills} />
      <TestimonialsSection testimonials={testimonials} />

      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
