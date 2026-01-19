import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '../store/usePortfolioStore.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { selectProject } = usePortfolioStore();
  const project = selectProject(slug);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-gray-400">Projet introuvable.</p>
        <Link to="/" className="text-brand">Retour</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <div className="flex justify-between items-start gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Projet</p>
          <h1 className="text-3xl font-semibold">{project.title}</h1>
          <div className="flex gap-2 mt-3 text-xs text-gray-300 flex-wrap">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{tech}</span>
            ))}
          </div>
        </div>
        <Link to="/" className="text-sm text-brand">← Retour</Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {project.gallery.map((img) => (
          <motion.img key={img} src={img} alt={project.title} className="rounded-xl object-cover h-72 w-full" whileHover={{ scale: 1.02 }} />
        ))}
      </div>

      <p className="text-gray-200 leading-relaxed">{project.description}</p>

      <div>
        <h3 className="text-lg font-semibold mb-3">Stack utilisée</h3>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-300">
          {project.stack.map((tech) => (
            <li key={tech} className="glass rounded-lg px-3 py-2 border border-white/5">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <a href={project.github} className="px-4 py-2 rounded-lg border border-white/10" target="_blank" rel="noreferrer">GitHub</a>
        <a href={project.demo} className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand to-accent text-black font-semibold" target="_blank" rel="noreferrer">Voir la démo</a>
      </div>
    </div>
  );
}
