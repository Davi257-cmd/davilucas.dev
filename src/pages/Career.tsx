import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Users,
  TrendingUp,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

const Career = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Calendar },
    { label: "Projects Delivered", value: "100+", icon: Briefcase },
    { label: "Technologies", value: "15+", icon: Award },
    { label: "Client Retention", value: "95%", icon: TrendingUp },
  ];

  const experience = [
    {
      period: "2024 - Present",
      role: "Senior Full-Stack Developer",
      company: "Colmeia Tech",
      description:
        "Leading development of cultural platforms and enterprise solutions. Key projects: Raízes Cearenses, Tercia Platform.",
      achievements: [
        "Architected scalable React applications serving 50k+ users",
        "Implemented AI-powered features using LangChain",
        "Reduced load times by 60% through optimization",
      ],
      tags: ["React", "Python", "AI/ML", "Leadership"],
    },
    {
      period: "2022 - 2024",
      role: "Full-Stack Developer",
      company: "Freelance",
      description:
        "Delivered custom booking systems, e-commerce platforms, and mobile apps for diverse clients.",
      achievements: [
        "Built 50+ booking systems for healthcare and beauty industries",
        "Generated $500k+ in e-commerce revenue for clients",
        "Maintained 98% on-time delivery rate",
      ],
      tags: ["React Native", "Shopify", "Node.js"],
    },
    {
      period: "2020 - 2022",
      role: "Frontend Developer",
      company: "Tech Agency",
      description:
        "Developed responsive web applications and landing pages for B2B clients.",
      achievements: [
        "Created 30+ landing pages with 40% avg conversion rate",
        "Implemented automated testing reducing bugs by 70%",
        "Mentored 3 junior developers",
      ],
      tags: ["React", "TypeScript", "Cypress"],
    },
  ];

  const availability = {
    status: "Open to Opportunities",
    types: ["Full-time", "Contract", "Part-time"],
    location: "Remote / Hybrid",
    salaryRange: "Competitive",
  };

  return (
    <div className="min-h-screen bg-background">

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Professional <span className="text-gradient-primary">Profile</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connecting with companies & recruiters. Senior full-stack developer ready
              for the next challenge.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 glass border-primary/30">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Davi Lucas</h2>
                    <p className="text-xl text-gradient-primary">
                      Full-Stack Developer & AI Specialist
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Senior developer with 5+ years building scalable web and mobile
                    applications. Specialized in React, Python, and AI/ML solutions.
                    Proven track record with 100+ successful projects delivered.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                      <MapPin className="w-3 h-3 mr-1" />
                      Remote / Brazil
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {availability.status}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Contact</p>
                    <div className="space-y-2">
                      <a
                        href="mailto:contact@davilucas.dev"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        contact@davilucas.dev
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn Profile
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Availability</p>
                    <div className="flex flex-wrap gap-2">
                      {availability.types.map((type) => (
                        <Badge key={type} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 text-center glass border-border hover:border-primary transition-all">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Career <span className="text-gradient-secondary">Timeline</span>
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="p-8 glass border-border hover:border-primary transition-all"
                >
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <Badge className="mb-2">{job.period}</Badge>
                      <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-primary mb-2">
                          Key Achievements
                        </p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* For Recruiters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="p-12 bg-gradient-to-br from-electric-blue/10 via-neon-purple/10 to-vibrant-cyan/10 border-primary/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Users className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-4xl font-bold mb-4">
                    For <span className="text-gradient-primary">Recruiters</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Looking for a senior developer with proven expertise? Let's discuss
                    how I can add value to your team.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2" />
                      <div>
                        <p className="font-semibold">5+ years experience</p>
                        <p className="text-sm text-muted-foreground">
                          Full-stack development, AI/ML
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2" />
                      <div>
                        <p className="font-semibold">15+ technologies mastered</p>
                        <p className="text-sm text-muted-foreground">
                          React, Python, Node.js, AI tools
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2" />
                      <div>
                        <p className="font-semibold">100+ projects delivered</p>
                        <p className="text-sm text-muted-foreground">
                          98% on-time delivery rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-primary border-0" asChild>
                    <Link to="/contact">Schedule 1:1 Call</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/skills">View Full Tech Stack</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* For Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 bg-gradient-to-br from-vibrant-cyan/10 via-electric-blue/10 to-neon-purple/10 border-vibrant-cyan/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-secondary border-0"
                    asChild
                  >
                    <Link to="/contact">Request Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/portfolio">View Case Studies</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
                <div>
                  <Briefcase className="w-16 h-16 text-vibrant-cyan mb-6" />
                  <h2 className="text-4xl font-bold mb-4">
                    For <span className="text-gradient-secondary">Companies</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Need a senior developer for your project or team? I offer flexible
                    engagement models to fit your needs.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold">Offerings:</span> Full-stack
                      development, tech consultation, code review, team mentoring
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Expertise:</span> React, Python,
                      AI/ML, booking systems, e-commerce
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Engagement:</span> Contract,
                      full-time, part-time, consulting
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;
