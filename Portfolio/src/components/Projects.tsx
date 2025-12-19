import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectVoting from '@/assets/project-voting-platform.png';
import projectMovie from '@/assets/project-movie-explorer.png';
import { VotingPlatformVisual } from './VotingPlatformVisual';
import { MovieExplorerVisual } from './MovieExplorerVisual';

const projects = [
  {
    id: 1,
    title: 'Online Voting Platform',
    description: 'A secure and transparent digital voting system with real-time counting and shareable election links.',
    techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
    gradient: 'from-cyan-500 to-blue-600',
    hasDemo: true,
    githubUrl: 'https://github.com/Varunudutha/Online-Voting-Platform/tree/master',
    demoUrl: 'https://online-voting-platform-0ekm.onrender.com/',
    image: projectVoting,
  },
  {
    id: 2,
    title: 'Movie Explorer App',
    description: 'A responsive movie discovery app with search, filtering, watchlist features, and Firebase authentication.',
    techStack: ['React.js', 'Bootstrap', 'TMDB API', 'Firebase', 'Vercel'],
    gradient: 'from-purple-500 to-pink-600',
    hasDemo: true,
    githubUrl: 'https://github.com/Varunudutha/Movie-Explorer-App',
    demoUrl: 'https://movie-explorer-app-git-master-varun-uduthas-projects.vercel.app/',
    image: projectMovie,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative glass-card rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/40 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.title === 'Online Voting Platform' ? (
                    <VotingPlatformVisual />
                  ) : project.title === 'Movie Explorer App' ? (
                    <MovieExplorerVisual />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.hasDemo && (
                      <Button
                        size="sm"
                        className={`gap-2 rounded-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0`}
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
