import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  delay?: number;
}

export default function StatCard({ number, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover-elevate cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
      data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span 
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-chart-2 via-chart-3 to-chart-2 bg-clip-text text-transparent block mb-4 group-hover:scale-105 transition-transform duration-300"
        data-testid={`stat-number-${number}`}
      >
        {number}
      </span>
      <div 
        className="text-base md:text-lg text-muted-foreground font-medium leading-tight"
        data-testid={`stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {label}
      </div>
      <div className="mt-3 w-12 h-1 bg-gradient-to-r from-chart-2 to-chart-3 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}