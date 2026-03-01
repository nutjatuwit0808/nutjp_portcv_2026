"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl"
      >
        <h2 className="mb-8 text-3xl font-bold text-white">Contact</h2>
        <div className="space-y-8">
          <a
            href="mailto:nutjatuwit.dev@gmail.com"
            className="flex items-center gap-3 text-slate-300 transition-colors hover:text-blue-400"
          >
            <Mail size={24} />
            <span>nutjatuwit.dev@gmail.com</span>
          </a>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm text-slate-400"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm text-slate-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
            >
              <Send size={18} />
              {submitted ? "Thank you!" : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
