'use client';

import React from 'react';
import { TrendingUp, CreditCard } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f9fc] px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              Strategic Analytics & Economic Insight
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              I leverage a structured economic perspective to solve complex business challenges through data-driven strategy. My expertise lies in architecting robust KPI models and revenue analytics pipelines that identify growth opportunities and mitigate operational risks. From optimizing supply chain efficiencies to refining customer segmentation, I translate raw metrics into strategic roadmaps that support executive-level decision-making.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">KPI Modeling</h3>
                  <p className="text-sm text-slate-600">
                    Defining and tracking the metrics that drive growth and operational efficiency.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Revenue Analytics</h3>
                  <p className="text-sm text-slate-600">
                    Identifying leakage and optimization opportunities through predictive modeling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square"
          >
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPvsNmPpGdGt6YFn6WTZLsl31P2CP009Z-0kwcNed_lJr86Kx9PWrfGU6GDz46hJ84FMFX8u6sqrtmF0lo5QCNOivKmCmGe-ScIGYeSu60PRkp-REicJyv9Cae_zwXjmQBGzmHi1mZWTdD4g6HZNjs1oFDihRHgEeSvEmtxRJOFzHrLaoR4RyDhKVkpuqbPeFXeZQ3pfF1xs02-GxQmCJe1bwwnlDxNMrAK1jljXqGec6WIdN-nqdTEVO0PRJ0E6n9eO5w4dZDAuM"
              alt="Clean data visualization dashboard on a screen"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
