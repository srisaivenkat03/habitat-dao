import { motion } from 'framer-motion';
import { Shield, FileCheck, Scale, Handshake } from 'lucide-react';

const legalItems = [
  {
    icon: <Shield className="w-6 h-6" />,
    text: "Wyoming DAO LLC structure providing legal recognition and liability protection"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    text: "SEC, KYC/AML, and real estate regulation compliance ensuring investor protection"
  },
  {
    icon: <Scale className="w-6 h-6" />,
    text: "Token classification and liability protections under current regulatory framework"
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    text: "Partnership agreements with local municipalities and housing authorities"
  }
];

export default function LegalFrameworkSection() {
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
            data-testid="section-title-legal"
          >
            Legal & Compliance
          </h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {legalItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-slate-50/5 p-8 rounded-2xl border-l-4 border-chart-3 hover-elevate cursor-pointer group border border-white/20 hover:border-white/40 hover:bg-gradient-to-br hover:from-white/20 hover:to-blue-50/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid={`legal-item-${index + 1}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-chart-3/20 to-chart-2/20 rounded-xl flex items-center justify-center text-chart-3 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-chart-3 group-hover:to-chart-2 transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-blue-50 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}