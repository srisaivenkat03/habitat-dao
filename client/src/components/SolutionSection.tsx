import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { Home, Vote, Coins } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            data-testid="section-title-solution"
          >
            Our Solution: Habitat DAO
          </h2>
          <p 
            className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed"
            data-testid="section-description-solution"
          >
            Revolutionary approach combining universal design, community governance, and blockchain technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          <SolutionCard 
            icon={<Home className="w-12 h-12 text-blue-300" />}
            title="Universal Design Housing"
            description="Accessible, inclusive communities designed for all abilities and income levels"
            delay={0.1}
          />
          <SolutionCard 
            icon={<Vote className="w-12 h-12 text-green-300" />}
            title="Community DAO Governance"
            description="Residents participate directly in decision-making through secure blockchain voting"
            delay={0.2}
          />
          <SolutionCard 
            icon={<Coins className="w-12 h-12 text-yellow-300" />}
            title="Dual-Token Crypto Economy"
            description="Innovative tokenomics enabling fractional ownership and seamless transactions"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}