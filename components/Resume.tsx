'use client';

import React from 'react';
import { FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">
            Professional Experience
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl aspect-[1/1.4] md:aspect-[1.4/1] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center justify-center p-12 text-center"
          >
            <FileText className="w-16 h-16 text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Muhammed_Sinan_Resume.pdf</h3>
            <p className="text-slate-500 mb-8 max-w-sm">
              Detailed breakdown of my professional journey, academic honors, and certified data credentials.
            </p>
            <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              <Download className="w-5 h-5" />
              Download PDF Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
