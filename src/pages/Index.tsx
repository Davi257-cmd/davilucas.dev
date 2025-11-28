import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Sparkles,
  Rocket,
  Users,
  Clock,
  Briefcase,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const quickWins = [
    { icon: Briefcase, label: "100+ Projetos Entregues", color: "text-electric-blue" },
    { icon: Clock, label: "500+ Horas em IA/ML", color: "text-neon-purple" },
    { icon: Users, label: "5+ Anos Full-Stack Dev", color: "text-vibrant-cyan" },
  ];

  const specialties = [
    {
      title: "React & React Native",
      description: "Experiências frontend modernas",
      icon: "⚛️",
    },
    {
      title: "Python & Agentes IA",
      description: "Automação inteligente",
      icon: "🤖",
    },
    {
      title: "Sistemas de Agendamento",
      description: "Especialista em agendamento",
      icon: "📅",
    },
    {
      title: "Shopify & WordPress",
      description: "Soluções e-commerce",
      icon: "🛍️",
    },
    {
      title: "Landing Pages",
      description: "Designs de alta conversão",
      icon: "🎨",
    },
    {
      title: "QA & Testes",
      description: "Garantia de qualidade automatizada",
      icon: "✅",
    },
  ];

  const featuredProjects = [
    {
      title: "Raízes Cearenses",
      company: "Colmeia Tech",
      description: "Plataforma cultural mostrando a herança do Ceará",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-electric-blue to-neon-purple",
    },
    {
      title: "Plataforma Tercia",
      company: "Colmeia Tech",
      description: "Solução de gestão empresarial",
      tags: ["React Native", "Python", "PostgreSQL"],
      gradient: "from-vibrant-cyan to-electric-blue",
    },
    {
      title: "Agendamento de Clínica",
      company: "Saúde",
      description: "Sistema inteligente de agendamento",
      tags: ["React", "IA", "Tempo Real"],
      gradient: "from-electric-pink to-neon-purple",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-90" />
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-electric-blue/20 via-neon-purple/20 to-vibrant-cyan/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Disponível para Projetos
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Desenvolvedor Full-Stack{" "}
                <span className="text-gradient-primary">& Arquiteto de IA</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Escalando suas ideias com 5+ anos de expertise em React, Python e IA.
                De startups a empresas. Construindo soluções que importam.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary border-0" asChild>
                  <Link to="/portfolio">
                    Ver Meu Trabalho
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Vamos Conversar</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border glass p-8">
                <pre className="text-sm font-mono">
                  <code className="text-vibrant-cyan">const</code>{" "}
                  <code className="text-foreground">desenvolvedor</code> ={" "}
                  <code className="text-neon-purple">{"{"}</code>
                  {"\n"}
                  {"  "}
                  <code className="text-electric-pink">nome</code>:{" "}
                  <code className="text-neon-green">'Davi Lucas'</code>,{"\n"}
                  {"  "}
                  <code className="text-electric-pink">expertise</code>: [{"\n"}
                  {"    "}
                  <code className="text-neon-green">'Full-Stack'</code>,{"\n"}
                  {"    "}
                  <code className="text-neon-green">'IA/ML'</code>,{"\n"}
                  {"    "}
                  <code className="text-neon-green">'React Native'</code>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}
                  <code className="text-electric-pink">especialidade</code>:{" "}
                  <code className="text-neon-green">'Sistemas de Agendamento'</code>,
                  {"\n"}
                  {"  "}
                  <code className="text-electric-pink">projetos</code>:{" "}
                  <code className="text-vibrant-cyan">100</code>+{"\n"}
                  <code className="text-neon-purple">{"}"}</code>;
                </pre>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-primary" />
          </motion.div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {quickWins.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center glass border-border hover:border-primary transition-colors">
                <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                <h3 className="text-2xl font-bold">{item.label}</h3>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How I Can Help */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Como Posso <span className="text-gradient-primary">Ajudar Você?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 glass border-primary/30">
              <Users className="w-12 h-12 text-electric-blue mb-4" />
              <h3 className="text-2xl font-bold mb-2">Para Empresas & Recrutadores</h3>
              <p className="text-muted-foreground mb-6">
                Procurando talento sênior com histórico comprovado? Vamos nos conectar.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/career">Ver Perfil Profissional</Link>
              </Button>
            </Card>

            <Card className="p-8 glass border-neon-purple/30">
              <Rocket className="w-12 h-12 text-neon-purple mb-4" />
              <h3 className="text-2xl font-bold mb-2">Para Clientes & Projetos</h3>
              <p className="text-muted-foreground mb-6">
                Precisa de uma solução de alta qualidade? Vamos discutir seu projeto.
              </p>
              <Button className="w-full bg-gradient-primary border-0" asChild>
                <Link to="/services">Explorar Serviços</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Expertise em <span className="text-gradient-secondary">Tech Stack</span>
            </h2>
          </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass border-border hover:border-primary transition-all hover:scale-105">
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-xl font-bold mb-2">{specialty.title}</h3>
                <p className="text-muted-foreground text-sm">{specialty.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projetos em <span className="text-gradient-primary">Destaque</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções que transformam negócios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden glass border-border hover:border-primary transition-all group">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-end`}>
                    <div>
                      <Badge className="bg-background/20 backdrop-blur-sm mb-2">
                        {project.company}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card className="p-12 text-center bg-gradient-to-br from-electric-blue/10 via-neon-purple/10 to-vibrant-cyan/10 border-primary/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Code2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-4">Pronto para Construir Algo Incrível?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seja você uma empresa procurando talento ou um cliente precisando de uma solução,
              vamos nos conectar e fazer acontecer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary border-0" asChild>
                <Link to="/contact">Iniciar um Projeto</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/career">Contratar</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Ver Preços</Link>
              </Button>
            </div>
          </motion.div>
        </Card>
      </section>
    </div>
  );
};

export default Index;
