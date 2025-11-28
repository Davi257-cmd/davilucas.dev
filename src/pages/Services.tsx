import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, Calendar, Bot, Star, Zap, Shield } from "lucide-react";

const Services = () => {
  const whatsappNumber = "5585996827671";

  const sendToWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const mainServices = [
    {
      icon: Rocket,
      title: "Desenvolvimento Full-Stack",
      description: "Soluções web e mobile completas do conceito à implantação",
      includes: [
        "Frontend React/React Native",
        "Backend Python/Node.js",
        "Design e Otimização de Banco de Dados",
        "Desenvolvimento e Integração de APIs",
        "Configuração de Deploy e DevOps",
        "Suite de Testes Automatizados",
      ],
      price: "Orçamento Personalizado",
      timeline: "2-12 semanas",
      gradient: "from-electric-blue to-neon-purple",
    },
    {
      icon: Calendar,
      title: "Sistemas de Agendamento",
      description: "Soluções especializadas de agendamento para clínicas, salões e serviços",
      includes: [
        "Motor de Agendamento Inteligente",
        "Notificações SMS/Email",
        "Integração de Pagamento",
        "Painel Administrativo",
        "App Mobile para Clientes",
        "Analytics e Relatórios",
        "Suporte 24/7 (período inicial)",
      ],
      price: "A partir de R$ 3.000",
      timeline: "4-8 semanas",
      gradient: "from-neon-green to-vibrant-cyan",
      featured: true,
    },
    {
      icon: Bot,
      title: "Agentes IA & Chatbots",
      description: "Automação inteligente com LangChain/LangGraph",
      includes: [
        "Desenvolvimento de Agentes IA Personalizados",
        "Processamento de Linguagem Natural",
        "Integração de Dados e RAG",
        "Suporte Multi-Plataforma",
        "Analytics de Conversação",
        "Configuração de Aprendizado Contínuo",
      ],
      price: "A partir de R$ 5.000",
      timeline: "2-6 semanas",
      gradient: "from-electric-pink to-neon-purple",
    },
  ];

  const addOnServices = [
    {
      name: "Landing Pages",
      description: "Landing pages React de alta conversão",
      price: "R$ 800",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o serviço de Landing Pages (R$ 800).",
    },
    {
      name: "Configuração de E-commerce",
      description: "Configuração de loja Shopify/WordPress",
      price: "R$ 2.500",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o serviço de Configuração de E-commerce (R$ 2.500).",
    },
    {
      name: "Automação de QA",
      description: "Implementação de suite de testes Cypress",
      price: "R$ 100/hora",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o serviço de Automação de QA (R$ 100/hora).",
    },
    {
      name: "Consultoria Técnica",
      description: "Revisão de arquitetura e otimização",
      price: "R$ 300/hora",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o serviço de Consultoria Técnica (R$ 300/hora).",
    },
    {
      name: "Code Review",
      description: "Auditoria de segurança e performance",
      price: "R$ 250/hora",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o serviço de Code Review (R$ 250/hora).",
    },
    {
      name: "Manutenção e Suporte",
      description: "Atualizações contínuas e correções de bugs",
      price: "R$ 1.500/mês",
      whatsappMessage: "Olá! Gostaria de saber mais sobre o serviço de Manutenção e Suporte (R$ 1.500/mês).",
    },
  ];

  const workflowSteps = [
    { number: "01", title: "Descoberta", duration: "1-3 dias" },
    { number: "02", title: "Proposta e Orçamento", duration: "1-2 dias" },
    { number: "03", title: "Planejamento e Design", duration: "3-7 dias" },
    { number: "04", title: "Desenvolvimento", duration: "Variável" },
    { number: "05", title: "Testes e QA", duration: "3-5 dias" },
    { number: "06", title: "Deploy", duration: "1-2 dias" },
    { number: "07", title: "Suporte", duration: "Contínuo" },
  ];

  const testimonials = [
    {
      quote: "Davi entregou nosso sistema de agendamento antes do prazo. Trabalho excelente!",
      author: "Dr. Silva",
      company: "Clínica Health",
      rating: 5,
    },
    {
      quote: "O chatbot de IA aumentou nosso engajamento de clientes em 300%.",
      author: "Maria Costa",
      company: "Loja E-commerce",
      rating: 5,
    },
    {
      quote: "Profissional, responsivo e altamente qualificado. Altamente recomendado!",
      author: "João Santos",
      company: "Tech Startup",
      rating: 5,
    },
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
              Serviços & <span className="text-gradient-primary">Preços</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Soluções personalizadas para suas necessidades. Preços transparentes, resultados excepcionais.
            </p>
          </motion.div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`p-4 md:p-8 glass border-border hover:border-primary transition-all h-full flex flex-col ${
                    service.featured ? "border-primary shadow-lg md:scale-105" : ""
                  }`}
                >
                  {service.featured && (
                    <Badge className="mb-3 md:mb-4 bg-gradient-primary border-0 w-fit text-xs md:text-sm">
                      <Star className="w-3 h-3 mr-1" />
                      Mais Popular
                    </Badge>
                  )}
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 md:mb-6`}
                  >
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>

                  <div className="mb-4 md:mb-6 flex-1">
                    <p className="text-xs md:text-sm font-semibold mb-2 md:mb-3 text-primary">Inclui:</p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-neon-green shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm text-muted-foreground">Preço</span>
                      <span className="text-lg md:text-xl font-bold">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs md:text-sm text-muted-foreground">Prazo</span>
                      <span className="text-sm md:text-base font-medium">{service.timeline}</span>
                    </div>
                    <Button
                      className={
                        service.featured
                          ? "w-full bg-gradient-primary border-0 text-sm md:text-base"
                          : "w-full text-sm md:text-base"
                      }
                      variant={service.featured ? "default" : "outline"}
                      asChild
                    >
                      <Link to="/contact">Começar</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Serviços <span className="text-gradient-secondary">Adicionais</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {addOnServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-4 md:p-6 glass border-border hover:border-primary transition-all cursor-pointer"
                  onClick={() => sendToWhatsApp(service.whatsappMessage)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-sm md:text-base">{service.name}</h3>
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-neon-purple shrink-0" />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                    {service.description}
                  </p>
                  <p className="text-primary font-semibold text-sm md:text-base">{service.price}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Processo de <span className="text-gradient-primary">Trabalho</span>
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4">
              {workflowSteps.map((step, index) => (
                <Card
                  key={index}
                  className="p-3 md:p-6 glass border-border hover:border-primary transition-all text-center"
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-2 md:mb-3 text-sm md:text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-bold mb-1 text-xs md:text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.duration}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
              Depoimentos de <span className="text-gradient-secondary">Clientes</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-4 md:p-6 glass border-border hover:border-primary transition-all"
                >
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 fill-neon-green text-neon-green"
                      />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <Card className="p-6 md:p-12 text-center bg-gradient-to-br from-electric-blue/10 via-neon-purple/10 to-vibrant-cyan/10 border-primary/30">
            <Shield className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-primary" />
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Pronto para Iniciar Seu Projeto?</h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Obtenha uma consulta gratuita e orçamento personalizado. Sem compromisso.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary border-0 text-sm md:text-base" asChild>
                <Link to="/contact">Solicitar Orçamento</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-sm md:text-base" asChild>
                <Link to="/portfolio">Ver Trabalhos Anteriores</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
