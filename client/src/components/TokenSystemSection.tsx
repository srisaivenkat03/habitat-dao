import { motion } from 'framer-motion';
import TokenCard from './TokenCard';

export default function TokenSystemSection() {
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
            data-testid="section-title-tokens"
          >
            Dual-Token System
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <TokenCard 
            name="Habitat Asset Token"
            symbol="HAT"
            description="Fractional ownership in property and infrastructure. HAT tokens represent your stake in the community's real estate assets, appreciating in value as the community grows and property values increase."
            variant="primary"
            delay={0.1}
          />
          <TokenCard 
            name="Habitat Stablecoin"
            symbol="HUSD"
            description="Used for daily transactions like rent, groceries, services. HUSD provides price stability for everyday transactions while keeping value within the community ecosystem."
            variant="secondary"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}