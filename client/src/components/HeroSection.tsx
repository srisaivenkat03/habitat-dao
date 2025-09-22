import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Play } from 'lucide-react';

export default function HeroSection() {
  const handleDownloadWhitepaper = () => {
    const url = 'https://unece.org/sites/default/files/2021-02/Housing%20for%20Migrants_compressed_0.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'whitepaper.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleWatchVideo = () => {
    const videoUrl = 'https://www.youtube.com/embed/-kJTUI8Fy-0?si=CyzGjolK62Ghbwlj&autoplay=1';
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.75)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';

    const container = document.createElement('div');
    container.style.width = 'min(900px, 92vw)';
    container.style.aspectRatio = '16/9';
    container.style.background = '#000';
    container.style.borderRadius = '12px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';

    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true as any;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.frameBorder = '0';

    const close = document.createElement('button');
    close.textContent = '×';
    close.setAttribute('aria-label', 'Close');
    close.style.position = 'absolute';
    close.style.top = '16px';
    close.style.right = '24px';
    close.style.fontSize = '28px';
    close.style.color = '#fff';
    close.style.background = 'transparent';
    close.style.border = 'none';
    close.style.cursor = 'pointer';

    close.onclick = () => overlay.remove();
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

    container.appendChild(iframe);
    overlay.appendChild(container);
    overlay.appendChild(close);
    document.body.appendChild(overlay);
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
          
          
        </motion.div>
      </div>
      
    </section>
  );
}
