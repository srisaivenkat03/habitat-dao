import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email); //todo: remove mock functionality
    setEmail('');
  };

  return (
    <footer className="py-16 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-blue-950/20 dark:to-sky-900/20 border-t-2 border-primary/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p 
            className="text-xl mb-4 text-foreground font-medium"
            data-testid="footer-title"
          >
            Join the Movement to End Homelessness
          </p>
          <p 
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
            data-testid="footer-description"
          >
            Stay updated on our progress and be the first to know about community launches, token releases, and partnership announcements.
          </p>
          
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input 
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full border-2 border-primary/30 focus:border-chart-3"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-chart-3 to-green-400 hover:from-chart-3/90 hover:to-green-400/90 text-white px-6 rounded-full"
                data-testid="button-newsletter-signup"
              >
                Subscribe
              </Button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-primary/20">
            <p className="text-sm text-muted-foreground">
              © 2024 Habitat DAO. All rights reserved. Building inclusive communities through blockchain innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}