import { Route, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <nav className="flex items-center justify-between px-8 py-6 sticky top-0 z-40 glass backdrop-blur-xl">
        <Link to="/" className="text-2xl font-semibold text-brand">Futura.</Link>
        <div className="flex items-center gap-4 text-sm text-gray-200">
          <Link to="/" className="hover:text-brand transition">Accueil</Link>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </motion.div>
    </div>
  );
}
