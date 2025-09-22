import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleConnectWallet = () => {
    console.log('Connect wallet triggered'); // todo: implement wallet connection
  };

  const navItems = [
    { label: 'Problem', sectionId: 'problem' },
    { label: 'Solution', sectionId: 'solution' },
    { label: 'Tokens', sectionId: 'tokens' },
    { label: 'Roadmap', sectionId: 'roadmap' },
    { label: 'Impact', sectionId: 'impact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-chart-2 to-chart-3 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span 
              className="text-xl font-bold bg-gradient-to-r from-chart-2 to-chart-3 bg-clip-text text-transparent"
              data-testid="nav-logo"
            >
              Habitat DAO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-foreground/80 hover:text-chart-2 transition-colors duration-200 font-medium"
                data-testid={`nav-link-${item.sectionId}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-chart-2/30 text-chart-2 hover:bg-chart-2 hover:text-white"
              data-testid="nav-download-whitepaper"
            >
              <Download className="w-4 h-4 mr-2" />
              Whitepaper
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-chart-2 to-chart-3 text-white hover:opacity-90"
              onClick={handleConnectWallet}
              data-testid="nav-connect-wallet"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            data-testid="nav-mobile-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-slate-200/50 dark:border-slate-700/50"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left text-foreground/80 hover:text-chart-2 transition-colors duration-200 font-medium py-2"
                  data-testid={`nav-mobile-link-${item.sectionId}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-chart-2/30 text-chart-2 hover:bg-chart-2 hover:text-white"
                  data-testid="nav-mobile-download-whitepaper"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Whitepaper
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-chart-2 to-chart-3 text-white hover:opacity-90"
                  onClick={handleConnectWallet}
                  data-testid="nav-mobile-connect-wallet"
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}