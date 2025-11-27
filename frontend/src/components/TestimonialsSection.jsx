import { motion } from 'framer-motion';

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Feedback</p>
          <h2 className="text-2xl font-semibold">Avis Clients</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-5 flex gap-3 border border-white/5"
          >
            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="text-sm text-gray-300">“{testimonial.message}”</p>
              <div className="mt-3 text-sm font-semibold">{testimonial.author}</div>
              <p className="text-xs text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
