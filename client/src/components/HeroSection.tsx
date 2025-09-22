import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Play } from 'lucide-react';

export default function HeroSection() {
  const handleDownloadWhitepaper = () => {
    console.log('Download whitepaper triggered'); //todo: remove mock functionality
  };

  const handleWatchVideo = () => {
    console.log('Watch explainer video triggered'); //todo: remove mock functionality
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20 relative overflow-hidden pt-16">
      {/* Professional gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-chart-2/5 via-transparent to-chart-3/5 opacity-40"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-chart-2/10"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent leading-tight tracking-tight"
            data-testid="hero-title"
          >
            Solving Homelessness Through <span className="block">Blockchain Innovation</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed"
            data-testid="hero-description"
          >
            Professional DAO infrastructure enabling transparent governance,<br />fractional ownership, and sustainable housing solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-chart-2 to-chart-3 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
              onClick={handleDownloadWhitepaper}
              data-testid="button-download-whitepaper"
            >
              <Download className="mr-3 h-5 w-5" />
              Access Whitepaper
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-chart-2/40 text-chart-2 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 transition-all duration-300"
              onClick={handleWatchVideo}
              data-testid="button-watch-video"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
              <span>SEC Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
              <span>Wyoming DAO LLC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
              <span>Audited Smart Contracts</span>
            </div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}