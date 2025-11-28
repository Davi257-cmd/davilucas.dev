import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, color: "bg-electric-blue" },
        { name: "React Native", level: 90, color: "bg-vibrant-cyan" },
        { name: "TypeScript", level: 92, color: "bg-neon-purple" },
        { name: "Tailwind CSS", level: 98, color: "bg-electric-blue" },
        { name: "Next.js", level: 88, color: "bg-vibrant-cyan" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 96, color: "bg-neon-green" },
        { name: "Node.js", level: 88, color: "bg-electric-blue" },
        { name: "FastAPI", level: 90, color: "bg-neon-purple" },
        { name: "PostgreSQL", level: 85, color: "bg-vibrant-cyan" },
        { name: "MongoDB", level: 82, color: "bg-neon-green" },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "LangChain", level: 94, color: "bg-electric-pink" },
        { name: "LangGraph", level: 92, color: "bg-neon-purple" },
        { name: "OpenAI API", level: 93, color: "bg-vibrant-cyan" },
        { name: "RAG Systems", level: 91, color: "bg-electric-blue" },
        { name: "AI Agents", level: 90, color: "bg-electric-pink" },
      ],
    },
    {
      title: "DevOps & QA",
      skills: [
        { name: "Cypress", level: 92, color: "bg-neon-green" },
        { name: "Jest/Testing", level: 88, color: "bg-electric-blue" },
        { name: "Docker", level: 85, color: "bg-vibrant-cyan" },
        { name: "CI/CD", level: 82, color: "bg-neon-purple" },
        { name: "Git/GitHub", level: 95, color: "bg-electric-blue" },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "DataDog",
    "Vercel",
    "AWS",
    "Firebase",
    "Supabase",
    "Stripe",
    "Shopify",
  ];

  const certifications = [
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2024",
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      year: "2023",
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
    },
  ];

  const timeDistribution = [
    { category: "React/React Native", percentage: 35, color: "electric-blue" },
    { category: "Python/AI", percentage: 30, color: "neon-purple" },
    { category: "Backend/APIs", percentage: 20, color: "vibrant-cyan" },
    { category: "QA/DevOps", percentage: 10, color: "neon-green" },
    { category: "CMS/E-commerce", percentage: 5, color: "electric-pink" },
  ];

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
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tech stack that scales. 5+ years of mastery across frontend, backend, and
              AI.
            </p>
          </motion.div>

          {/* Technical Proficiencies */}
          <div className="space-y-12 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass border-border">
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress
                          value={isVisible ? skill.level : 0}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Time Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Time <span className="text-gradient-secondary">Distribution</span>
            </h2>
            <Card className="p-8 glass border-primary/30">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {timeDistribution.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className={`text-${item.color}`}>
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative aspect-square">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-gradient-primary">
                        500+
                      </div>
                      <div className="text-muted-foreground mt-2">Hours/Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Tools & <span className="text-gradient-primary">Platforms</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="outline"
                    className="px-6 py-3 text-base border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Certifications & <span className="text-gradient-secondary">Education</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 glass border-border hover:border-primary transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary mb-4 flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Years of <span className="text-gradient-primary">Experience</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { area: "Full-Stack Development", years: "5+" },
                { area: "Frontend Development", years: "5+" },
                { area: "AI/ML Engineering", years: "2+" },
                { area: "Backend Development", years: "4+" },
                { area: "QA Automation", years: "3+" },
                { area: "E-commerce Solutions", years: "4+" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 text-center glass border-border hover:border-primary transition-all"
                >
                  <div className="text-4xl font-bold text-gradient-primary mb-2">
                    {item.years}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.area}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
