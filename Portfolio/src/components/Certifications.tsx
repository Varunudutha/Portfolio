import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Code2, Database, Terminal, Cpu, Braces } from 'lucide-react';

const certifications = [
  {
    title: 'Java',
    issuer: 'Udemy',
    description: 'Mastered Core Java concepts, including OOP, data structures, and exception handling.',
    Icon: Braces,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    description: 'Proficient in relational database querying with advanced SQL techniques.',
    Icon: Database,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'C Programming',
    issuer: 'tutorscampus.com',
    description: 'Covered data types, loops, functions, and foundational programming concepts.',
    Icon: Terminal,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Problem Solving',
    issuer: 'HackerRank',
    description: 'Basics of DSA including arrays, sorting, and searching algorithms.',
    Icon: Cpu,
    color: 'from-purple-500 to-pink-500',
  },
];

const achievements = [
  {
    title: '5-Star Java Badge',
    platform: 'HackerRank',
    description: 'Achieved elite status through consistent problem-solving excellence',
    Icon: Star,
    iconColor: 'text-yellow-500',
  },
  {
    title: 'Virtual Internships',
    platform: 'Forage',
    description: 'Successfully completed industry-level virtual internship programs',
    Icon: Award,
    iconColor: 'text-blue-500',
  },
  {
    title: '150+ DSA Problems',
    platform: 'LeetCode',
    description: 'Solved over 150+ Data Structures and Algorithms challenges',
    Icon: Code2,
    iconColor: 'text-orange-500',
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3"
          >
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-lg`}>
                    <cert.Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    {/* Title & Issuer */}
                    <h4 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3"
          >
            <Trophy className="w-6 h-6 text-accent" />
            Notable Achievements
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.15 }}
                className="group glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4 group-hover:bg-primary/10 transition-colors">
                  <achievement.Icon className={`w-8 h-8 ${achievement.iconColor}`} />
                </div>

                {/* Title */}
                <h4 className="font-heading font-bold text-lg text-foreground mb-1">
                  {achievement.title}
                </h4>

                {/* Platform */}
                <p className="text-primary text-sm font-medium mb-3">{achievement.platform}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
