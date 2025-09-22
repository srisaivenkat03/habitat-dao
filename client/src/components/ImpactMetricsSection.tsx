import { motion } from 'framer-motion';
import StatCard from './StatCard';

export default function ImpactMetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/50 dark:to-blue-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent"
            data-testid="section-title-impact"
          >
            Impact That Matters
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="section-description-impact"
          >
            We will track outcomes such as housing units built, DAO participation, and service adoption.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <StatCard 
            number="50+" 
            label="Housing units planned" 
            delay={0.1}
          />
          <StatCard 
            number="100" 
            label="Founding members target" 
            delay={0.2}
          />
          <StatCard 
            number="$5M" 
            label="Initial funding goal" 
            delay={0.3}
          />
          <StatCard 
            number="5" 
            label="Cities planned for expansion" 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}