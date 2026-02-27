'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'E-Commerce Revenue Audit',
    description: 'Analyzed 1.2M transactions to identify a 15% revenue leakage in checkout funnels.',
    tags: ['SQL', 'Tableau'],
    impact: '+15% Conversion',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA0iQDe6M5AflWP96MQn65v0DTFYlGPwHlBsLAnpVZWtF5u9q66k6aGdmLpw6hiShHJYQYXq-w_j-sWTsNfox-tSFQcVe-NSm2JtwYNK0mw0IwwNLWhPJCDyDpiJwF4RCiy0xKgNjIaUIbDWLWmASLsoSXP1VeN7naUi8kvJCXk91bMF6NCTOnCC4aFQ-axKj5MXLl1foNtcZsAK4nrC4DtVi0NavfBbCyY2aH2RAE-cK-GAA7ZhFPWvZ3l1xxkNRq3ZAZI4Qutac'
  },
  {
    title: 'Supply Chain Efficiency',
    description: 'Automated logistics tracking, reducing manual reporting time by 40 hours monthly.',
    tags: ['Power BI', 'DAX'],
    impact: '-20% Lead Time',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbCm1aPXBRPyz8xcHB95QUuspnLFY_F23RZ_irZ2QOToJ9LJ9KxEAqegdkbFHISK_91PjAeFtxsF6I_M2hQGbK_kamPsb8ai0q5nH-GWL7b9mUvIURw2TQ6sr2oPDwZyvzwaKFOmAmo7PbHOJ--MDDBHtx4aOV6pLgUajiV5p4sh_uplfPpinCP3_P3mzVqktlDPYGWrxau3Ex5Ovq_HOejYIn8s6kG_SNXvpx7KdfdSCMZIkKy16CsRfeTjaqjRm8bbF0-UfaiJc'
  },
  {
    title: 'Job Market Sentiment',
    description: 'Web scraped 10k+ job listings to predict emerging skill demands for 2024.',
    tags: ['Python', 'Pandas'],
    impact: 'Predictive Insights',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZfAFCwjgJHbpy_12knoyqirRaeR54_2qDBUan2k4yiekWExLVI_INUVi3FCTd8KtjFq2BNU4E7Z9TPFBt89jnNmUlX886EKcioihCYdNhT3zT3OBL4c3Clfxc0SGC_opG_6RnoZj9PNQmEnF6eZJERQZs9YE6m3O6Vpm2y_KuIP_mCq1JB7himfnwatbyBf0xCGwFbye3lEDSi3chDOKYfvRloJHNLSg2aX3xnPWxEvSWgRSAFI5_nPGGdI0VxfcWy9YRqnirRJ4'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white px-6 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Selected Case Studies
          </h2>
          <p className="mt-4 text-slate-600">Real-world impact through data-driven solutions.</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{project.description}</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">{project.impact}</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
