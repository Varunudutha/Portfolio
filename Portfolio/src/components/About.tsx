import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users, Target } from 'lucide-react';

const stats = [
  { value: '150+', label: 'LeetCode Problems', icon: Code2 },
  { value: '8.66', label: 'CGPA', icon: Target },
  { value: '5★', label: 'Java HackerRank', icon: Rocket },
  { value: '3+', label: 'Projects Built', icon: Users },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pl-8 md:pl-24 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative Quote */}
              <div className="absolute -top-10 -left-6 text-8xl text-primary/10 font-serif">"</div>

              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 leading-relaxed">
                <span className="text-primary">Designing systems</span> with logic,<span className="text-primary"> building solutions</span> with code.{' '}
                
              </h3>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-medium">Udutha Varun</span>, a Computer Science
                  undergraduate specializing in IoT at Malla Reddy Engineering College, Hyderabad.
                </p>
                <p>
                  My passion lies in building <span className="text-primary">fast, intuitive, and meaningful</span> digital
                  experiences. From designing smooth user interfaces to crafting efficient backend logic,
                  I enjoy turning complex problems into simple, elegant solutions.
                </p>
                <p>
                  With hands-on experience in <span className="text-foreground font-medium">React, Node.js, Java,
                    and databases</span>, I'm constantly learning and pushing myself through projects, challenges,
                  and late-night debugging sessions.
                </p>
              </div>

              {/* Philosophy Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {['Design.', 'Develop.', 'Deploy.', 'Create!'].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className={`px-5 py-2 rounded-full font-heading font-medium text-sm ${tag === 'Create!'
                        ? 'bg-primary text-primary-foreground'
                        : 'glass-card text-foreground'
                      }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 glow-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Career Objective Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-6 glass-card rounded-2xl p-6 border-l-4 border-l-primary"
            >
              <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">Career Objective</h4>
              <p className="text-muted-foreground">
                Passionate CS student aiming to apply software development skills in a
                growth-driven tech role while enhancing real-world engineering experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
