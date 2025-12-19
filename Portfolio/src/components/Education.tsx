import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech - Computer Science Engineering (IoT)',
    institution: 'Malla Reddy Engineering College',
    location: 'Hyderabad, Telangana',
    period: '2022 – 2026',
    grade: 'CGPA: 8.68',
    status: 'current',
    highlights: ['Internet of Things Specialization', 'Full Stack Development', 'Data Structures & Algorithms'],
  },
  {
    degree: 'Intermediate Education',
    institution: 'Sri Vijaya Sai Junior College',
    location: 'Bodhan, Telangana',
    period: '2020 – 2022',
    grade: 'Grade: 93.1%',
    status: 'completed',
    highlights: ['Mathematics, Physics, Chemistry', 'State Board Excellence'],
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'Telangana State Model School',
    location: 'Nagireddypet, Telangana',
    period: '2019 – 2020',
    grade: 'GPA: 8.3',
    status: 'completed',
    highlights: ['Foundation in Sciences', 'Strong Academic Performance'],
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {/* Timeline Items */}
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2 }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      edu.status === 'current'
                        ? 'bg-primary text-primary-foreground animate-glow-pulse'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <GraduationCap className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] pl-24 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 ${
                      edu.status === 'current' ? 'border-primary/30 glow-effect' : ''
                    }`}
                  >
                    {/* Status Badge */}
                    {edu.status === 'current' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        Currently Pursuing
                      </span>
                    )}

                    {/* Degree */}
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-primary font-medium mb-3">{edu.institution}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Grade Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
