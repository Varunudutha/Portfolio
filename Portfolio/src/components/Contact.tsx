import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'uduthavarun968@gmail.com',
    href: 'mailto:uduthavarun968@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 93477 64310',
    href: 'tel:+919347764310',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, Telangana, India',
    href: '#',
    color: 'from-blue-500 to-cyan-500',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Varunudutha',
    username: '@Varunudutha',
    color: 'hover:text-foreground',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/varun-udutha-67b137265/',
    username: 'varun-udutha',
    color: 'hover:text-blue-500',
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-background to-background" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">Follow Me</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-between p-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className={`w-5 h-5 text-muted-foreground ${social.color} transition-colors`} />
                      <div>
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass-card rounded-xl p-6 border-l-4 border-l-primary"
            >
              <h4 className="font-heading font-bold text-lg mb-2">Open to Opportunities</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Currently looking for full-time roles and internship opportunities in software development.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 rounded-full"
              >
                <a href="mailto:uduthavarun968@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Hire Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-muted/50 border-border focus:border-primary rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-muted/50 border-border focus:border-primary rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-muted/50 border-border focus:border-primary rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="bg-muted/50 border-border focus:border-primary rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-medium rounded-xl glow-effect"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
