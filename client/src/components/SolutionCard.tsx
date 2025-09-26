import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ReactNode } from 'react';

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  to?: string;
}

export default function SolutionCard({ icon, title, description, delay = 0, to }: SolutionCardProps) {
  const Card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-2xl text-center hover-elevate cursor-pointer group transition-all duration-300"
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

  return to ? (
    <Link href={to} aria-label={title} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-chart-2 rounded-2xl">
      {Card}
    </Link>
  ) : Card;
}
