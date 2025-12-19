import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techIcons = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', delay: 0 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', delay: 0.2 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', delay: 0.4 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', delay: 0.6 },
  { name: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', delay: 0.8 },
];

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 pl-8 md:pl-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-4"
            >
              <span className="text-foreground">UDUTHA</span>
              <br />
              <span className="text-gradient-primary">VARUN</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl sm:text-2xl font-heading font-medium tracking-wider text-muted-foreground">
                FULL STACK DEVELOPER
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Passionate CS student crafting elegant digital experiences with{' '}
              <span className="text-primary">React</span>,{' '}
              <span className="text-primary">Node.js</span>, and modern web technologies.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Hyderabad, Telangana, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full glow-effect transition-all hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="px-8 py-6 text-lg font-medium rounded-full border-primary/50 hover:bg-primary/10 hover:border-primary transition-all hover:scale-105"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/Varunudutha', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/varun-udutha-67b137265/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:uduthavarun968@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+919347764310', label: 'Phone' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:bg-primary/10 hover:border-primary/50 transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Icons Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Central Circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glow-effect"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-40 h-40 rounded-full bg-card flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold gradient-text">UV</span>
                </div>
              </motion.div>

              {/* Orbiting Tech Icons */}
              {techIcons.map((tech, index) => {
                const angle = (360 / techIcons.length) * index;
                const radius = 170;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute top-1/2 left-1/2 w-16 h-16 glass-card rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: x - 32,
                      y: y - 32,
                    }}
                    transition={{
                      delay: 0.8 + tech.delay,
                      duration: 0.5,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    <motion.div
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {tech.name}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
