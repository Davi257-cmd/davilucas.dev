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
      title: "Frontend",
      skills: [
        { name: "React", level: 95, experience: "3+ Anos de Experiência", proficiency: "Especialista" },
        { name: "JavaScript", level: 95, experience: "3+ Anos de Experiência", proficiency: "Especialista" },
        { name: "TypeScript", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "Angular", level: 70, experience: "1+ Anos de Experiência", proficiency: "Intermediário" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "NestJS", level: 80, experience: "1+ Anos de Experiência", proficiency: "Avançado" },
        { name: "PHP", level: 75, experience: "2+ Anos de Experiência", proficiency: "Intermediário" },
        { name: "Python", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "Java", level: 60, experience: "1+ Anos de Experiência", proficiency: "Básico" },
        { name: "Spring Boot", level: 60, experience: "1+ Anos de Experiência", proficiency: "Básico" },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "AWS", level: 70, experience: "1+ Anos de Experiência", proficiency: "Intermediário" },
      ],
    },
    {
      title: "Ferramentas & Plataformas",
      skills: [
        { name: "WordPress", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "Shopify", level: 85, experience: "1+ Anos de Experiência", proficiency: "Avançado" },
        { name: "Cypress", level: 95, experience: "1+ Anos de Experiência", proficiency: "Especialista" },
        { name: "Postman", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "Docker", level: 85, experience: "2+ Anos de Experiência", proficiency: "Avançado" },
        { name: "N8N", level: 70, experience: "1+ Anos de Experiência", proficiency: "Intermediário" },
      ],
    },
    {
      title: "IA & Automação",
      skills: [
        { name: "Engenharia de Prompt", level: 85, experience: "1+ Anos de Experiência", proficiency: "Avançado" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "React Native", level: 75, experience: "2+ Anos de Experiência", proficiency: "Intermediário" },
        { name: "Flutter", level: 60, experience: "1+ Anos de Experiência", proficiency: "Básico" },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "Vercel",
    "AWS",
    "Firebase",
    "Supabase",
    "Stripe",
    "Shopify",
    "WordPress",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-16"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
              Tecnologias & <span className="text-gradient-primary">Habilidades</span>
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Ferramentas e tecnologias que domino e utilizo.
            </p>
          </motion.div>

          {/* Technical Proficiencies */}
          <div className="space-y-6 md:space-y-12 mb-12 md:mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 md:p-8 glass border-border">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{category.title}</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-1.5 md:space-y-2">
                        <div className="flex justify-between items-center mb-1 md:mb-2 flex-wrap gap-1">
                          <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                            <span className="font-medium text-sm md:text-base">{skill.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {skill.proficiency}
                            </Badge>
                          </div>
                          <span className="text-muted-foreground text-xs md:text-sm">{skill.level}%</span>
                        </div>
                        <Progress
                          value={isVisible ? skill.level : 0}
                          className="h-1.5 md:h-2"
                        />
                        <p className="text-xs text-muted-foreground">{skill.experience}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Ferramentas & <span className="text-gradient-primary">Plataformas</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
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
                    className="px-3 py-1.5 md:px-6 md:py-3 text-xs md:text-base border-primary/30 hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categories Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Categorias de <span className="text-gradient-secondary">Expertise</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { title: "Frontend", techs: ["React", "JavaScript", "TypeScript", "Angular"] },
                { title: "Backend", techs: ["Node.js", "NestJS", "PHP", "Python", "Java", "Spring Boot"] },
                { title: "Cloud", techs: ["AWS"] },
                { title: "Devops", techs: ["Docker"] },
                { title: "Database", techs: ["MongoDB"] },
                { title: "Tools", techs: ["WordPress", "Shopify", "Cypress", "Postman"] },
                { title: "Ai", techs: ["Engenharia de Prompt"] },
                { title: "Automation", techs: ["N8N"] },
                { title: "Mobile", techs: ["Flutter", "React Native"] },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="p-4 md:p-6 glass border-border hover:border-primary transition-all"
                >
                  <h3 className="font-bold mb-2 md:mb-3 text-sm md:text-base">{category.title}</h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {category.techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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

export default Skills;
