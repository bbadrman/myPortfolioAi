import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch('http://localhost:8000/api/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40" />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Contact</p>
          <h2 className="text-2xl font-semibold">Discutons</h2>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="space-y-2 text-sm">
            <span>Nom</span>
            <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:border-brand" />
          </label>
          <label className="space-y-2 text-sm">
            <span>Email</span>
            <input name="email" value={form.email} onChange={handleChange} type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:border-brand" />
          </label>
        </div>
        <label className="space-y-2 text-sm block">
          <span>Message</span>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:border-brand" />
        </label>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="px-4 py-3 rounded-xl bg-gradient-to-r from-brand to-accent text-black font-semibold shadow-neon"
        >
          {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
        </motion.button>
        {status === 'success' && <p className="text-sm text-green-400">Message envoyé !</p>}
        {status === 'error' && <p className="text-sm text-red-400">Une erreur est survenue.</p>}
      </form>
    </section>
  );
}
