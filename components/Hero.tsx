'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white px-6 lg:px-20">
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-6"
          >
            Available for Projects
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-black tracking-tight text-slate-900 md:text-7xl mb-6 leading-tight"
          >
            Strategic Data Analytics for Business Growth
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-medium text-blue-600 md:text-2xl mb-4"
          >
            Transforming Complex Data into Decision-Making Clarity
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl text-lg leading-relaxed text-slate-600 mb-10"
          >
            I architect high-impact analytical frameworks that optimize revenue and operational performance. By bridging economic theory with advanced data engineering, I deliver actionable insights that drive measurable business outcomes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-600/25 hover:translate-y-[-2px] transition-all"
            >
              View Projects
            </a>
            <a 
              href="#resume" 
              className="inline-flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-bold text-slate-900 hover:bg-slate-50 transition-all"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[450px] h-[550px] mx-auto">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] -rotate-3" />
            <div className="absolute -inset-4 border border-blue-600/10 rounded-[2rem] rotate-3" />
            
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://picsum.photos/seed/profile/800/1000" 
                alt="Muhammed Sinan PT"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-8 bottom-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-slate-900">Ready for Strategy</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
