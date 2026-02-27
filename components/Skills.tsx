'use client';

import React from 'react';
import { Terminal, BarChart, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const skillGroups = [
  {
    title: 'Technical Stack',
    icon: Terminal,
    skills: [
      { name: 'SQL (PostgreSQL)', level: 90 },
      { name: 'Python (NumPy, Pandas)', level: 85 },
      { name: 'Excel / VBA', level: 95 },
    ]
  },
  {
    title: 'Visualization',
    icon: BarChart,
    skills: [
      { name: 'Power BI / DAX', level: 88 },
      { name: 'Tableau Desktop', level: 80 },
      { name: 'Matplotlib / Seaborn', level: 75 },
    ]
  },
  {
    title: 'Business Strategy',
    icon: Lightbulb,
    skills: [
      { name: 'KPI Benchmarking', level: 92 },
      { name: 'Market Forecasting', level: 85 },
      { name: 'A/B Testing Analysis', level: 78 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#f8f9fc] px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-16 text-center">
          Technical & Analytical Proficiency
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <group.icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
              </div>
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">{skill.name}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-blue-600 h-full"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
