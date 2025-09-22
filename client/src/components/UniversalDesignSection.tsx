import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { Accessibility, Users, MapPin } from 'lucide-react';

export default function UniversalDesignSection() {
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
            data-testid="section-title-universal-design"
          >
            Universal Design in Practice
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="section-description-universal-design"
          >
            Design that welcomes all. Walkable, accessible, equitable communities for mixed incomes and abilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SolutionCard 
            icon={<Accessibility className="w-12 h-12 text-blue-600" />}
            title="Accessibility First"
            description="Ramps, wide doorways, and adaptive features integrated seamlessly into beautiful design"
            delay={0.1}
          />
          <SolutionCard 
            icon={<Users className="w-12 h-12 text-green-600" />}
            title="Mixed Income"
            description="Diverse housing options from affordable units to market-rate homes in the same community"
            delay={0.2}
          />
          <SolutionCard 
            icon={<MapPin className="w-12 h-12 text-purple-600" />}
            title="Walkable Design"
            description="15-minute neighborhoods with essential services accessible by foot or wheelchair"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}