import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { Eye, DollarSign, Settings } from 'lucide-react';

export default function DaoGovernanceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-chart-2/85 to-chart-3/85 text-white">
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
            data-testid="section-title-dao-governance"
          >
            Community Governance Through DAO
          </h2>
          <p 
            className="text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed"
            data-testid="section-description-dao-governance"
          >
            Residents vote and manage budgets and services through a secure, smart contract-based system.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SolutionCard 
            icon={<Eye className="w-12 h-12 text-blue-300" />}
            title="Transparent Voting"
            description="All community decisions recorded on blockchain for complete transparency"
            delay={0.1}
          />
          <SolutionCard 
            icon={<DollarSign className="w-12 h-12 text-green-300" />}
            title="Budget Control"
            description="Residents collectively decide how community funds are allocated and spent"
            delay={0.2}
          />
          <SolutionCard 
            icon={<Settings className="w-12 h-12 text-yellow-300" />}
            title="Service Management"
            description="Direct oversight of maintenance, security, and community programs"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}