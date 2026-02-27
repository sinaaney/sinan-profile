'use client';

import React from 'react';
import { Mail, MapPin, Link as LinkIcon, Code } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
                <Image 
                  src="https://picsum.photos/seed/profile/200/200" 
                  alt="Muhammed Sinan PT"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Let&apos;s Talk Data</h2>
                <p className="text-blue-500 font-medium">Strategic Analytics Consultant</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Currently looking for opportunities in Data Analytics and Business Intelligence roles. Based in Kerala, India, available for both on-site and remote collaboration.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <a href="mailto:sinanpoovanthodipmr@gmail.com" className="text-lg hover:text-blue-500 transition-colors">
                  sinanpoovanthodipmr@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-lg">Kerala, India</span>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="#" className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <LinkIcon className="w-5 h-5" />
              </a>
              <a href="#" className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white/5 p-8 border border-white/10"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                  <input 
                    className="w-full rounded-lg border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" 
                    type="text" 
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input 
                    className="w-full rounded-lg border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" 
                    type="email" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea 
                  className="w-full rounded-lg border-none bg-white/10 px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" 
                  rows={4}
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20" 
                type="submit"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammed Sinan PT. Built with precision and insights.
        </div>
      </div>
    </section>
  );
}
