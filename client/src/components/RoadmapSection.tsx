import { motion } from 'framer-motion';

const roadmapItems = [
  "Form DAO and launch tokens with initial community of 100 founding members",
  "Acquire land and build pilot community with 50 units in partnership with local government", 
  "Deploy governance tools and establish community voting protocols",
  "Scale to multiple locations and integrate additional services like healthcare and education",
  "Measure and optimize impact through continuous data collection and community feedback"
];

export default function RoadmapSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
            data-testid="section-title-roadmap"
          >
            Implementation Roadmap
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <ol className="space-y-8">
            {roadmapItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-800 dark:via-slate-900/50 dark:to-slate-800 p-8 rounded-2xl relative hover-elevate cursor-pointer group border border-slate-200/50 dark:border-slate-700/50 hover:border-chart-2/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid={`roadmap-item-${index + 1}`}
              >
                <div 
                  className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-chart-2 to-chart-3 rounded-2xl flex items-center justify-center font-bold text-white border-4 border-white dark:border-slate-800 text-lg shadow-xl group-hover:scale-110 transition-transform duration-300"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div className="ml-16">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}