import { motion } from 'framer-motion';

export default function SkillsSection({ skills }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Stack</p>
          <h2 className="text-2xl font-semibold">Compétences</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-4 rounded-xl glass"
          >
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-brand">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand via-accent to-brand"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
