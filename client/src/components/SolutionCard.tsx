import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function SolutionCard({ icon, title, description, delay = 0 }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-800 dark:via-slate-900/50 dark:to-slate-800 p-8 rounded-2xl text-center border border-slate-200/50 dark:border-slate-700/50 hover-elevate cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
      data-testid={`solution-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-chart-2/10 to-chart-3/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-chart-2/20 group-hover:to-chart-3/20 transition-all duration-300">
        <div className="text-chart-2 group-hover:text-chart-3 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-foreground dark:text-white group-hover:text-chart-2 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-6 w-8 h-1 bg-gradient-to-r from-chart-2 to-chart-3 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}