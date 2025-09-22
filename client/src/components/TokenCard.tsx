import { motion } from 'framer-motion';

interface TokenCardProps {
  name: string;
  symbol: string;
  description: string;
  variant: 'primary' | 'secondary';
  delay?: number;
}

export default function TokenCard({ name, symbol, description, variant, delay = 0 }: TokenCardProps) {
  const isSecondary = variant === 'secondary';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`
        p-8 rounded-2xl relative border cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300
        ${isSecondary 
          ? 'bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/20 dark:to-amber-900/20 border-amber-200/50 dark:border-amber-700/50 hover:border-amber-300 dark:hover:border-amber-600' 
          : 'bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-emerald-900/20 border-emerald-200/50 dark:border-emerald-700/50 hover:border-emerald-300 dark:hover:border-emerald-600'
        }
      `}
      data-testid={`token-card-${symbol.toLowerCase()}`}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${
            isSecondary 
              ? 'bg-gradient-to-br from-amber-400 to-yellow-500 text-white' 
              : 'bg-gradient-to-br from-emerald-500 to-green-600 text-white'
          }`}>
            {symbol[0]}
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {symbol}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {name}
            </p>
          </div>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-6 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            isSecondary ? 'bg-amber-400' : 'bg-emerald-500'
          }`}></div>
          <span className="text-sm font-medium text-muted-foreground">
            {isSecondary ? 'Utility Token' : 'Asset Token'}
          </span>
        </div>
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
          isSecondary ? 'from-amber-300/50 to-yellow-300/50' : 'from-emerald-300/50 to-green-300/50'
        }`}
        aria-hidden="true"
      />
    </motion.div>
  );
}