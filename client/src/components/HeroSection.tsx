import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Play } from 'lucide-react';

export default function HeroSection() {
  const handleDownloadWhitepaper = () => {
    const url = '/Housing%20for%20Migrants_compressed_0.pdf';
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.style.webkitBackdropFilter = 'blur(8px)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const container = document.createElement('div');
    container.style.width = 'min(95vw, 1200px)';
    container.style.height = 'min(90vh, 800px)';
    container.style.background = '#fff';
    container.style.borderRadius = '16px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
    container.style.position = 'relative';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    // Header with title and close button
    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.padding = '16px 20px';
    header.style.borderBottom = '1px solid #e5e7eb';
    header.style.background = '#f9fafb';

    const title = document.createElement('h3');
    title.textContent = 'Housing for Migrants - Research Whitepaper';
    title.style.margin = '0';
    title.style.fontSize = '18px';
    title.style.fontWeight = '600';
    title.style.color = '#111827';

    const close = document.createElement('button');
    close.innerHTML = '×';
    close.setAttribute('aria-label', 'Close PDF viewer');
    close.style.fontSize = '24px';
    close.style.color = '#6b7280';
    close.style.background = 'transparent';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.padding = '4px 8px';
    close.style.borderRadius = '6px';
    close.style.transition = 'all 0.2s';
    close.onmouseover = () => {
      close.style.background = '#e5e7eb';
      close.style.color = '#374151';
    };
    close.onmouseout = () => {
      close.style.background = 'transparent';
      close.style.color = '#6b7280';
    };

    header.appendChild(title);
    header.appendChild(close);

    // PDF viewer container
    const viewerContainer = document.createElement('div');
    viewerContainer.style.flex = '1';
    viewerContainer.style.position = 'relative';
    viewerContainer.style.background = '#f3f4f6';

    // Direct PDF embed using object/embed elements
    const pdfObject = document.createElement('object');
    pdfObject.data = url;
    pdfObject.type = 'application/pdf';
    pdfObject.style.width = '100%';
    pdfObject.style.height = '100%';
    pdfObject.style.border = 'none';

    // Fallback embed for older browsers
    const pdfEmbed = document.createElement('embed');
    pdfEmbed.src = url;
    pdfEmbed.type = 'application/pdf';
    pdfEmbed.style.width = '100%';
    pdfEmbed.style.style = '100%';
    pdfEmbed.style.border = 'none';

    // Fallback iframe as last resort
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.title = 'Housing for Migrants Whitepaper';

    // Loading indicator
    const loading = document.createElement('div');
    loading.style.position = 'absolute';
    loading.style.top = '50%';
    loading.style.left = '50%';
    loading.style.transform = 'translate(-50%, -50%)';
    loading.style.textAlign = 'center';
    loading.style.color = '#6b7280';
    loading.innerHTML = '<div style="margin-bottom: 12px;">Loading PDF...</div><div style="width: 40px; height: 40px; margin: 0 auto; border: 3px solid #e5e7eb; border-top: 3px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite;"></div>';

    // Add CSS animation for loading spinner
    const style = document.createElement('style');
    style.textContent = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
    document.head.appendChild(style);

    // Progressive fallback approach
    const tryLoadPDF = () => {
      // First try object element
      pdfObject.appendChild(pdfEmbed);
      pdfEmbed.appendChild(iframe);

      // Hide loading after attempting to load
      setTimeout(() => {
        loading.style.display = 'none';
      }, 2000);
    };

    // Alternative viewer instructions
    const instructions = document.createElement('div');
    instructions.style.position = 'absolute';
    instructions.style.bottom = '16px';
    instructions.style.left = '20px';
    instructions.style.right = '20px';
    instructions.style.display = 'flex';
    instructions.style.flexDirection = 'column';
    instructions.style.alignItems = 'center';
    instructions.style.gap = '8px';
    instructions.style.fontSize = '14px';
    instructions.style.color = '#6b7280';
    instructions.style.background = 'rgba(255, 255, 255, 0.95)';
    instructions.style.padding = '16px';
    instructions.style.borderRadius = '8px';
    instructions.style.backdropFilter = 'blur(4px)';
    instructions.style.textAlign = 'center';

    const downloadButton = document.createElement('a');
    downloadButton.href = url;
    downloadButton.download = 'Housing-for-Migrants-Whitepaper.pdf';
    downloadButton.textContent = '⬇ Download PDF';
    downloadButton.style.color = '#fff';
    downloadButton.style.background = '#3b82f6';
    downloadButton.style.padding = '8px 16px';
    downloadButton.style.borderRadius = '6px';
    downloadButton.style.textDecoration = 'none';
    downloadButton.style.fontWeight = '500';
    downloadButton.style.marginBottom = '8px';
    downloadButton.onmouseover = () => downloadButton.style.background = '#2563eb';
    downloadButton.onmouseout = () => downloadButton.style.background = '#3b82f6';

    const openButton = document.createElement('a');
    openButton.href = url;
    openButton.target = '_blank';
    openButton.rel = 'noopener noreferrer';
    openButton.textContent = '🔗 Open in New Tab';
    openButton.style.color = '#3b82f6';
    openButton.style.textDecoration = 'none';
    openButton.style.fontWeight = '500';
    openButton.onmouseover = () => openButton.style.textDecoration = 'underline';
    openButton.onmouseout = () => openButton.style.textDecoration = 'none';

    instructions.appendChild(downloadButton);
    instructions.appendChild(openButton);

    const cleanup = () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      overlay.remove();
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cleanup();
    };

    close.onclick = () => cleanup();
    overlay.onclick = (e) => { if (e.target === overlay) cleanup(); };
    window.addEventListener('keydown', onKeyDown);

    viewerContainer.appendChild(pdfObject);
    viewerContainer.appendChild(loading);
    viewerContainer.appendChild(instructions);

    container.appendChild(header);
    container.appendChild(viewerContainer);
    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // Try to load the PDF
    tryLoadPDF();
  };

  const handleWatchVideo = () => {
    const videoUrl = 'https://www.youtube.com/embed/jjP5he-G42g?autoplay=1';
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.backdropFilter = 'blur(8px)';
    overlay.style.webkitBackdropFilter = 'blur(8px)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const container = document.createElement('div');
    container.style.width = 'min(900px, 92vw)';
    container.style.aspectRatio = '16/9';
    container.style.background = '#000';
    container.style.borderRadius = '12px';
    container.style.overflow = 'hidden';
    container.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
    container.style.position = 'relative';

    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true as any;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.frameBorder = '0';
    iframe.title = 'Demo Video';

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

    const cleanup = () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      overlay.remove();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cleanup();
    };

    close.onclick = () => cleanup();
    overlay.onclick = (e) => { if (e.target === overlay) cleanup(); };
    window.addEventListener('keydown', onKeyDown);

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
