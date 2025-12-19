import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Box, Cpu, Globe } from 'lucide-react';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Data Analytics Tools',
    skills: [
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
      { name: 'Seaborn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/seaborn/seaborn-original.svg' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
  {
    id: 'concepts',
    title: 'Core Concepts',
    skills: [
      { name: 'DSA', icon: null, iconComponent: Code2 },
      { name: 'OOP', icon: null, iconComponent: Box },
      { name: 'Operating Systems', icon: null, iconComponent: Cpu },
      { name: 'Computer Networks', icon: null, iconComponent: Globe },
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="group glass-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  >
                    {/* Icon */}
                    {skill.icon ? (
                      <div className="w-12 h-12 relative">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain filter dark:brightness-100 group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ) : skill.iconComponent ? (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                        <skill.iconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                        <span className="text-lg font-bold text-primary">{skill.name.charAt(0)}</span>
                      </div>
                    )}

                    {/* Name */}
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
