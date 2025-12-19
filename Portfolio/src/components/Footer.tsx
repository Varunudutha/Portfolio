import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-heading font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary">V</span>
            <span className="text-foreground">arun</span>
            <span className="text-primary">.</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made by Varun Udutha
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Varunudutha' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/varun-udutha-67b137265/' },
              { icon: Mail, href: 'mailto:uduthavarun968@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
