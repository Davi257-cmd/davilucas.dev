import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Linkedin, Github, MessageSquare, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("project");
  const whatsappNumber = "5585996827671";

  const sendToWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será redirecionado para iniciar a conversa.",
    });
  };

  const handleProjectSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const projectType = formData.get("project-type") as string;
    const budget = formData.get("budget") as string;
    const description = formData.get("description") as string;

    const message = `Olá! Gostaria de solicitar um orçamento para projeto:

👤 Nome: ${name}
📧 Email: ${email}
🏢 Empresa: ${company || "Não informado"}
📋 Tipo de Projeto: ${projectType || "Não informado"}
💰 Orçamento: ${budget || "Não informado"}

📝 Descrição:
${description}`;

    sendToWhatsApp(message);
    e.currentTarget.reset();
  };

  const handleRecruiterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("recruiter-name") as string;
    const email = formData.get("recruiter-email") as string;
    const company = formData.get("company-name") as string;
    const position = formData.get("position") as string;
    const techStack = formData.get("tech-stack") as string;
    const salary = formData.get("salary") as string;
    const jobDescription = formData.get("job-description") as string;

    const message = `Olá! Sou recrutador e gostaria de apresentar uma oportunidade:

👤 Nome: ${name}
📧 Email: ${email}
🏢 Empresa: ${company}
💼 Cargo: ${position}
🛠️ Stack Tecnológico: ${techStack}
💰 Faixa Salarial: ${salary || "Não informado"}

📝 Descrição da Vaga:
${jobDescription}`;

    sendToWhatsApp(message);
    e.currentTarget.reset();
  };

  const handleGeneralSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("general-name") as string;
    const email = formData.get("general-email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const whatsappMessage = `Olá! Gostaria de entrar em contato:

👤 Nome: ${name}
📧 Email: ${email}
📌 Assunto: ${subject || "Geral"}

💬 Mensagem:
${message}`;

    sendToWhatsApp(whatsappMessage);
    e.currentTarget.reset();
  };

  const faqs = [
    {
      question: "Quanto custa um projeto?",
      answer:
        "Os custos dos projetos variam com base no escopo e complexidade. Sistemas de agendamento a partir de R$ 3.000, soluções de IA a partir de R$ 5.000, e landing pages a partir de R$ 800. Entre em contato para um orçamento personalizado.",
    },
    {
      question: "Você trabalha remotamente?",
      answer:
        "Sim! Trabalho principalmente de forma remota, mas posso acomodar arranjos híbridos para clientes locais. Tenho experiência em colaborar com equipes distribuídas globalmente.",
    },
    {
      question: "Qual é o tempo mínimo de entrega?",
      answer:
        "Landing pages simples podem ser entregues em 1-2 semanas. Projetos mais complexos como sistemas de agendamento geralmente levam 4-8 semanas. Entrega urgente está disponível para projetos urgentes.",
    },
    {
      question: "Você oferece suporte após o lançamento?",
      answer:
        "Sim! Todos os projetos incluem período de suporte inicial. Pacotes de manutenção contínua estão disponíveis a partir de R$ 1.500/mês com correções de bugs, atualizações e adições de recursos.",
    },
    {
      question: "Qual é seu processo de trabalho?",
      answer:
        "Sigo um processo de 7 etapas: Descoberta → Proposta → Planejamento → Desenvolvimento → Testes → Deploy → Suporte. Você receberá atualizações regulares e prévias durante todo o processo.",
    },
  ];

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
              Vamos <span className="text-gradient-primary">Conectar</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
              Seja você um cliente com um projeto ou um recrutador com uma oportunidade, adoraria ouvir de você.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Contact Forms */}
            <div className="lg:col-span-2">
              <Card className="p-4 md:p-8 glass border-border">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8 text-xs md:text-sm">
                    <TabsTrigger value="project">Projeto</TabsTrigger>
                    <TabsTrigger value="recruiter">Recrutador</TabsTrigger>
                    <TabsTrigger value="general">Geral</TabsTrigger>
                  </TabsList>

                  {/* Project Form */}
                  <TabsContent value="project">
                    <form onSubmit={handleProjectSubmit} className="space-y-4 md:space-y-6">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm">Nome Completo</Label>
                          <Input id="name" name="name" placeholder="João Silva" required className="text-sm md:text-base" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="joao@exemplo.com"
                            required
                            className="text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm">Nome da Empresa/Projeto</Label>
                        <Input id="company" name="company" placeholder="Empresa XYZ" className="text-sm md:text-base" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-type" className="text-sm">Tipo de Projeto</Label>
                          <Select name="project-type">
                            <SelectTrigger className="text-sm md:text-base">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="landing-page">Landing Page</SelectItem>
                              <SelectItem value="site">Site</SelectItem>
                              <SelectItem value="web">Aplicação Web</SelectItem>
                              <SelectItem value="mobile">App Mobile</SelectItem>
                              <SelectItem value="ai">Solução IA/ML</SelectItem>
                              <SelectItem value="booking">Sistema de Agendamento</SelectItem>
                              <SelectItem value="ecommerce">E-commerce</SelectItem>
                              <SelectItem value="other">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget" className="text-sm">Faixa de Orçamento</Label>
                          <Select name="budget">
                            <SelectTrigger className="text-sm md:text-base">
                              <SelectValue placeholder="Selecione a faixa" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="800-1.5k">R$ 800 - R$ 1.5k</SelectItem>
                              <SelectItem value="1.5k-5k">R$ 1.5k - R$ 5k</SelectItem>
                              <SelectItem value="5k-10k">R$ 5k - R$ 10k</SelectItem>
                              <SelectItem value="10k-25k">R$ 10k - R$ 25k</SelectItem>
                              <SelectItem value="25k-50k">R$ 25k - R$ 50k</SelectItem>
                              <SelectItem value="50k+">R$ 50k+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm">Descrição do Projeto</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Conte-me sobre seu projeto..."
                          rows={5}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-primary border-0 text-sm md:text-base"
                      >
                        Enviar para WhatsApp
                      </Button>
                    </form>
                  </TabsContent>

                  {/* Recruiter Form */}
                  <TabsContent value="recruiter">
                    <form onSubmit={handleRecruiterSubmit} className="space-y-4 md:space-y-6">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="recruiter-name" className="text-sm">Seu Nome</Label>
                          <Input id="recruiter-name" name="recruiter-name" placeholder="Maria Santos" required className="text-sm md:text-base" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="recruiter-email" className="text-sm">Email</Label>
                          <Input
                            id="recruiter-email"
                            name="recruiter-email"
                            type="email"
                            placeholder="maria@empresa.com"
                            required
                            className="text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name" className="text-sm">Empresa</Label>
                          <Input id="company-name" name="company-name" placeholder="Tech Corp" required className="text-sm md:text-base" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="position" className="text-sm">Cargo</Label>
                          <Input
                            id="position"
                            name="position"
                            placeholder="Desenvolvedor Full-Stack Sênior"
                            required
                            className="text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tech-stack" className="text-sm">Stack Tecnológico Necessário</Label>
                          <Input
                            id="tech-stack"
                            name="tech-stack"
                            placeholder="React, Python, IA/ML"
                            required
                            className="text-sm md:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salary" className="text-sm">Faixa Salarial</Label>
                          <Input id="salary" name="salary" placeholder="R$ 80k - R$ 120k" className="text-sm md:text-base" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="job-description" className="text-sm">Descrição da Vaga</Label>
                        <Textarea
                          id="job-description"
                          name="job-description"
                          placeholder="Conte-me sobre a vaga..."
                          rows={5}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-secondary border-0 text-sm md:text-base"
                      >
                        Enviar para WhatsApp
                      </Button>
                    </form>
                  </TabsContent>

                  {/* General Form */}
                  <TabsContent value="general">
                    <form onSubmit={handleGeneralSubmit} className="space-y-4 md:space-y-6">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="general-name" className="text-sm">Nome</Label>
                          <Input id="general-name" name="general-name" placeholder="Seu nome" required className="text-sm md:text-base" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="general-email" className="text-sm">Email</Label>
                          <Input
                            id="general-email"
                            name="general-email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            className="text-sm md:text-base"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm">Assunto</Label>
                        <Select name="subject">
                          <SelectTrigger className="text-sm md:text-base">
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">
                              Consultoria Técnica
                            </SelectItem>
                            <SelectItem value="collaboration">
                              Oportunidade de Colaboração
                            </SelectItem>
                            <SelectItem value="speaking">
                              Palestra/Ensino
                            </SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm">Mensagem</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Sua mensagem..."
                          rows={6}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full text-sm md:text-base" variant="outline">
                        Enviar para WhatsApp
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-4 md:space-y-6">
              <Card className="p-4 md:p-6 glass border-primary/30">
                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Informações de Contato</h3>
                <div className="space-y-3 md:space-y-4">
                  <a
                    href="mailto:davillucas@gmail.com"
                    className="flex items-center gap-2 md:gap-3 text-xs md:text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground text-xs md:text-sm">davillucas@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/davi-lucas-049b48269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 text-xs md:text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-muted-foreground text-xs md:text-sm">Conecte-se comigo</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Davi257-cmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 text-xs md:text-sm hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Github className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-muted-foreground text-xs md:text-sm">Veja meu código</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card className="p-4 md:p-6 glass border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <h3 className="font-bold text-sm md:text-base">Tempo de Resposta</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Geralmente em até 24 horas durante dias úteis
                </p>
              </Card>

              <Card className="p-4 md:p-6 glass border-border">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <h3 className="font-bold text-sm md:text-base">Disponibilidade</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-2">Aberto a novos projetos</p>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon-green mt-1.5" />
                  <span className="text-xs md:text-sm text-muted-foreground">
                    Atualmente aceitando trabalhos freelance
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8 leading-tight">
              Perguntas <span className="text-gradient-primary">Frequentes</span>
            </h2>
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 glass border-border max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-xs sm:text-sm md:text-base leading-relaxed">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
