import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Frontend",
    "Backend",
    "AI/Agents",
    "Booking Systems",
    "E-commerce",
    "Mobile",
  ];

  const projects = [
    {
      title: "Raízes Cearenses",
      category: "Frontend",
      company: "Colmeia Tech",
      description:
        "Cultural heritage platform showcasing Ceará's rich traditions, built with React and modern animations",
      tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      gradient: "from-electric-blue to-neon-purple",
      year: "2024",
    },
    {
      title: "Tercia Platform",
      category: "Full-Stack",
      company: "Colmeia Tech",
      description:
        "Enterprise resource management platform with real-time collaboration features",
      tags: ["React Native", "Python", "PostgreSQL", "WebSocket"],
      gradient: "from-vibrant-cyan to-electric-blue",
      year: "2024",
    },
    {
      title: "AI Booking Assistant",
      category: "AI/Agents",
      description:
        "Intelligent scheduling system using LangChain for natural language booking",
      tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
      gradient: "from-neon-purple to-electric-pink",
      year: "2024",
    },
    {
      title: "Clinic Scheduling System",
      category: "Booking Systems",
      description:
        "Complete appointment management for healthcare with SMS notifications",
      tags: ["React", "Node.js", "MongoDB", "Twilio"],
      gradient: "from-neon-green to-vibrant-cyan",
      year: "2023",
    },
    {
      title: "Barbershop Scheduler",
      category: "Booking Systems",
      description:
        "Mobile-first booking platform for barbershops with real-time availability",
      tags: ["React Native", "Firebase", "Stripe"],
      gradient: "from-electric-pink to-neon-purple",
      year: "2023",
    },
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "High-converting Shopify store with custom theme and 6-figure revenue",
      tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
      gradient: "from-electric-blue to-vibrant-cyan",
      year: "2023",
    },
    {
      title: "Landing Page Generator",
      category: "Frontend",
      description: "AI-powered landing page creator with drag-and-drop interface",
      tags: ["React", "Tailwind", "Shadcn UI", "Magic UI"],
      gradient: "from-neon-purple to-electric-blue",
      year: "2024",
    },
    {
      title: "QA Automation Suite",
      category: "Testing",
      description: "Comprehensive testing framework with Cypress for e-commerce sites",
      tags: ["Cypress", "TypeScript", "CI/CD"],
      gradient: "from-vibrant-cyan to-neon-green",
      year: "2023",
    },
    {
      title: "WordPress Multisite",
      category: "Backend",
      description: "Custom WordPress multisite with advanced ACF and custom post types",
      tags: ["WordPress", "PHP", "MySQL", "ACF"],
      gradient: "from-electric-blue to-neon-purple",
      year: "2022",
    },
    {
      title: "React Native Fitness App",
      category: "Mobile",
      description: "Cross-platform fitness tracking app with workout plans",
      tags: ["React Native", "Expo", "Firebase", "Stripe"],
      gradient: "from-electric-pink to-vibrant-cyan",
      year: "2024",
    },
    {
      title: "AI Customer Support Bot",
      category: "AI/Agents",
      description: "Multi-platform chatbot with context-aware responses using LangGraph",
      tags: ["Python", "LangGraph", "OpenAI", "Discord API"],
      gradient: "from-neon-purple to-electric-blue",
      year: "2024",
    },
    {
      title: "Admin Dashboard",
      category: "Frontend",
      description: "Real-time analytics dashboard with beautiful data visualizations",
      tags: ["React", "Recharts", "Tailwind", "WebSocket"],
      gradient: "from-vibrant-cyan to-electric-blue",
      year: "2023",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Project <span className="text-gradient-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solutions that transform businesses. Over 100 projects delivered with
              excellence.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter ? "bg-gradient-primary border-0" : ""
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <Card className="overflow-hidden glass border-border hover:border-primary transition-all group h-full flex flex-col">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}
                  >
                    <div className="flex justify-between items-start">
                      {project.company && (
                        <Badge className="bg-background/20 backdrop-blur-sm">
                          {project.company}
                        </Badge>
                      )}
                      <Badge
                        variant="outline"
                        className="bg-background/20 backdrop-blur-sm border-white/20"
                      >
                        {project.year}
                      </Badge>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/20 backdrop-blur-sm hover:bg-background/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/20 backdrop-blur-sm hover:bg-background/30"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="outline" className="w-fit mb-3 text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Case Studies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured <span className="text-gradient-secondary">Case Studies</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Raízes Cearenses",
                  challenge: "Create an engaging platform to showcase cultural heritage",
                  solution:
                    "Built immersive React experience with smooth animations and CMS integration",
                  results: [
                    "50k+ monthly visitors",
                    "95% user satisfaction",
                    "Featured in local media",
                  ],
                  tech: ["React", "TypeScript", "Tailwind", "Strapi"],
                },
                {
                  title: "AI Booking System",
                  challenge: "Reduce no-shows and automate appointment scheduling",
                  solution:
                    "Implemented AI-powered assistant with natural language processing",
                  results: [
                    "40% reduction in no-shows",
                    "85% automation rate",
                    "2 hours saved daily",
                  ],
                  tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
                },
              ].map((study, index) => (
                <Card
                  key={index}
                  className="p-8 glass border-primary/30 hover:border-primary transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">
                            Challenge
                          </p>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-primary mb-1">
                            Solution
                          </p>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-primary mb-3">
                          Results
                        </p>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-neon-green" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary mb-3">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
