import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="card-tilt glass rounded-2xl p-4 gradient-border"
    >
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <div className="overflow-hidden rounded-xl mb-4">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2 text-xs">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{tech}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
