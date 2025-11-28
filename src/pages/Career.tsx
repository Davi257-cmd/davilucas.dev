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
import profileImage from "../public/eu/davi-profile.jpg";

const Career = () => {
  const stats = [
    { label: "Anos de Experiência", value: "5+", icon: Calendar },
    { label: "Projetos Entregues", value: "100+", icon: Briefcase },
    { label: "Tecnologias", value: "15+", icon: Award },
    { label: "Retenção de Clientes", value: "95%", icon: TrendingUp },
  ];

  const experience = [
    {
      period: "2024 - Presente",
      role: "Desenvolvedor Full-Stack Sênior",
      company: "Colmeia Tech",
      description:
        "Liderando desenvolvimento de plataformas culturais e soluções empresariais. Projetos principais: Raízes Cearenses, Tercia Platform.",
      achievements: [
        "Arquitetei aplicações React escaláveis atendendo 50k+ usuários",
        "Implementei recursos com IA usando LangChain",
        "Reduzi tempos de carregamento em 60% através de otimização",
      ],
      tags: ["React", "Python", "IA/ML", "Liderança"],
    },
    {
      period: "2022 - 2024",
      role: "Desenvolvedor Full-Stack",
      company: "Freelance",
      description:
        "Entreguei sistemas de agendamento personalizados, plataformas de e-commerce e aplicativos mobile para diversos clientes.",
      achievements: [
        "Construí 50+ sistemas de agendamento para saúde e beleza",
        "Gerei R$ 2,5M+ em receita de e-commerce para clientes",
        "Mantive 98% de taxa de entrega no prazo",
      ],
      tags: ["React Native", "Shopify", "Node.js"],
    },
    {
      period: "2020 - 2022",
      role: "Desenvolvedor Frontend",
      company: "Agência Tech",
      description:
        "Desenvolvi aplicações web responsivas e landing pages para clientes B2B.",
      achievements: [
        "Criei 30+ landing pages com 40% de taxa média de conversão",
        "Implementei testes automatizados reduzindo bugs em 70%",
        "Mentorei 3 desenvolvedores júnior",
      ],
      tags: ["React", "TypeScript", "Cypress"],
    },
  ];

  const availability = {
    status: "Aberto a Oportunidades",
    types: ["Tempo Integral", "Contrato", "Meio Período"],
    location: "Remoto / Híbrido",
    salaryRange: "Competitivo",
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1.5 sm:mb-2 md:mb-4 leading-tight">
              Perfil <span className="text-gradient-primary">Profissional</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
              Conectando com empresas e recrutadores. Desenvolvedor full-stack sênior pronto para o próximo desafio.
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 glass border-primary/30">
              <div className="grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
                <div className="md:col-span-2 space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary shrink-0">
                      <img
                        src={profileImage}
                        alt="Davi Lucas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 md:mb-2 leading-tight">Davi Lucas</h2>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gradient-primary leading-tight">
                        Desenvolvedor Full-Stack & Especialista em IA
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    Desenvolvedor sênior com 5+ anos construindo aplicações web e mobile escaláveis. Especializado em React, Python e soluções IA/ML. Histórico comprovado com 100+ projetos bem-sucedidos entregues.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                      <MapPin className="w-3 h-3 mr-1" />
                      Remoto / Brasil
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {availability.status}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Contato</p>
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
                        Perfil LinkedIn
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Perfil GitHub
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Disponibilidade</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-4 md:p-6 text-center glass border-border hover:border-primary transition-all">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 leading-tight">
              Linha do Tempo <span className="text-gradient-secondary">Profissional</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="p-4 md:p-8 glass border-border hover:border-primary transition-all"
                >
                  <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                    <div>
                      <Badge className="mb-2 text-xs">{job.period}</Badge>
                      <h3 className="text-lg md:text-xl font-bold mb-1">{job.role}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{job.description}</p>
                      <div className="mb-3 md:mb-4">
                        <p className="text-xs md:text-sm font-semibold text-primary mb-2">
                          Principais Conquistas
                        </p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-xs md:text-sm text-muted-foreground">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
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
            <Card className="p-6 md:p-12 bg-gradient-to-br from-electric-blue/10 via-neon-purple/10 to-vibrant-cyan/10 border-primary/30">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <Users className="w-12 h-12 md:w-16 md:h-16 text-primary mb-4 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                    Para <span className="text-gradient-primary">Recrutadores</span>
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6">
                    Procurando um desenvolvedor sênior com expertise comprovada? Vamos discutir como posso agregar valor à sua equipe.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2" />
                      <div>
                        <p className="font-semibold">5+ anos de experiência</p>
                        <p className="text-sm text-muted-foreground">
                          Desenvolvimento full-stack, IA/ML
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2" />
                      <div>
                        <p className="font-semibold">15+ tecnologias dominadas</p>
                        <p className="text-sm text-muted-foreground">
                          React, Python, Node.js, ferramentas de IA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-neon-green mt-2" />
                      <div>
                        <p className="font-semibold">100+ projetos entregues</p>
                        <p className="text-sm text-muted-foreground">
                          98% de taxa de entrega no prazo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-primary border-0" asChild>
                    <Link to="/contact">Agendar Chamada 1:1</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Conectar no LinkedIn
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/skills">Ver Stack Tecnológico Completo</Link>
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
            <Card className="p-6 md:p-12 bg-gradient-to-br from-vibrant-cyan/10 via-electric-blue/10 to-neon-purple/10 border-vibrant-cyan/30">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="space-y-3 md:space-y-4 order-2 md:order-1">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-secondary border-0 text-sm md:text-base"
                    asChild
                  >
                    <Link to="/contact">Solicitar Consultoria</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-sm md:text-base" asChild>
                    <Link to="/portfolio">Ver Estudos de Caso</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-sm md:text-base" asChild>
                    <Link to="/services">Explorar Serviços</Link>
                  </Button>
                </div>
                <div className="order-1 md:order-2">
                  <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-vibrant-cyan mb-4 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                    Para <span className="text-gradient-secondary">Empresas</span>
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6">
                    Precisa de um desenvolvedor sênior para seu projeto ou equipe? Ofereço modelos de engajamento flexíveis para atender suas necessidades.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs md:text-sm">
                      <span className="font-semibold">Ofertas:</span> Desenvolvimento full-stack, consultoria técnica, code review, mentoria de equipe
                    </p>
                    <p className="text-xs md:text-sm">
                      <span className="font-semibold">Expertise:</span> React, Python, IA/ML, sistemas de agendamento, e-commerce
                    </p>
                    <p className="text-xs md:text-sm">
                      <span className="font-semibold">Engajamento:</span> Contrato, tempo integral, meio período, consultoria
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
