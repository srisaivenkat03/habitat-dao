import { motion } from 'framer-motion';
import StatCard from './StatCard';

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent tracking-tight"
            data-testid="section-title-problem"
          >
            The Crisis
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="section-description-problem"
          >
            Millions lack access to safe, inclusive, and affordable housing. Zoning, funding gaps, and outdated models limit impact.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StatCard 
            number="580K" 
            label="Americans experiencing homelessness" 
            delay={0.1}
          />
          <StatCard 
            number="7.3M" 
            label="Affordable housing units needed" 
            delay={0.2}
          />
          <StatCard 
            number="$290B" 
            label="Annual funding gap" 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}