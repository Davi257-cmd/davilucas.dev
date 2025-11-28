import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Importar imagens
import fluxQaImg from "../public/saas/flux-qa.png";
import raizesImg from "../public/saas/Site - Raizes Cearenses.png";
import plusSimImg from "../public/saas/Site - Plus Sim.png";
import studiowImg from "../public/siteComAgendamento/studiow-site.png";
import beautySalonImg from "../public/saas/BeautySallon - site.png";
import leadfinderImg from "../public/saas/leadfinder-Site.jpg";
import jrGestaoImg from "../public/landingpages/site - JR Gestão.png";
import emrImg from "../public/siteComAgendamento/Site - EMR.png";
import luizNetoImg from "../public/siteComAgendamento/luizneto-corretor.png";
import dimmyImg from "../public/landingpages/studiodimmy-lp.png";
import softHausImg from "../public/landingpages/SoftHaus-lp.png";
import wpTrafegoImg from "../public/landingpages/walterpaz-lp.png";
import draSirlyanneImg from "../public/landingpages/dra-sirlyanne.png";
import liderCommerceImg from "../public/landingpages/lidercommerce-lp.png";
import jorginhoImg from "../public/landingpages/jorginho-lp.png";
import nuttroImg from "../public/aplicativos/nuttro.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = [
    "Todos",
    "SaaS",
    "Landing Pages",
    "Sites com Agendamento",
    "E-commerce",
    "Mobile",
  ];

  const projects = [
    {
      title: "FluxQA",
      category: "SaaS",
      company: "Projeto Próprio",
      status: "Em Desenvolvimento",
      description:
        "SaaS com IA para navegação e geração de código Cypress para testes de QA",
      tags: ["React", "TypeScript", "Node.js", "IA"],
      gradient: "from-electric-blue to-neon-purple",
      year: "2024",
      image: fluxQaImg,
      link: "https://fluxqa.vercel.app/",
    },
    {
      title: "Raízes Cearenses",
      category: "SaaS",
      company: "Colmeia Tecnologia",
      status: "Concluído",
      description:
        "Plataforma de e-commerce para produtos orgânicos locais do Ceará. Conecta produtores locais com consumidores.",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-vibrant-cyan to-electric-blue",
      year: "2024",
      image: raizesImg,
      link: "https://raizescearenses.com.br/vitrine",
    },
    {
      title: "PlusSim",
      category: "E-commerce",
      company: "Simples Inovação",
      status: "Concluído",
      description:
        "Site para empresa de telecomunicações com e-commerce personalizado para chips de viagem internacional",
      tags: ["Shopify", "Liquid", "JavaScript"],
      gradient: "from-neon-purple to-electric-pink",
      year: "2024",
      image: plusSimImg,
      link: "https://plussim.com/",
    },
    {
      title: "Studio W",
      category: "Sites com Agendamento",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page para salão de beleza com foco em agendamentos e serviços de beleza",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-electric-pink to-neon-purple",
      year: "2024",
      image: studiowImg,
      link: "https://studiow.com.br/home",
    },
    {
      title: "Beauty Salon IA Solutions Pro",
      category: "SaaS",
      company: "Projeto Próprio",
      status: "Concluído",
      description:
        "Sistema mobile-first para salões com foco em agendamento e fidelização de clientes",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      gradient: "from-neon-green to-vibrant-cyan",
      year: "2024",
      image: beautySalonImg,
      link: "https://beauty-aura-connect.lovable.app/auth",
    },
    {
      title: "LeadFinder",
      category: "SaaS",
      company: "Projeto Próprio",
      status: "Concluído",
      description:
        "SaaS para encontrar e qualificar leads automaticamente através do Google Maps",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-electric-blue to-vibrant-cyan",
      year: "2024",
      image: leadfinderImg,
      link: "https://leadsaasbr.vercel.app/",
    },
    {
      title: "JR Gestão",
      category: "Landing Pages",
      company: "Simples Inovação",
      status: "Concluído",
      description:
        "Site institucional para empresa de gestão empresarial com foco em consultoria e serviços contábeis",
      tags: ["WordPress", "Elementor", "PHP"],
      gradient: "from-vibrant-cyan to-neon-green",
      year: "2024",
      image: jrGestaoImg,
      link: "https://jrgestao.com/",
    },
    {
      title: "EMR Advisory",
      category: "Sites com Agendamento",
      company: "Simples Inovação",
      status: "Concluído",
      description:
        "Site para empresa de consultoria em estruturação de empresas nos Emirados Árabes Unidos",
      tags: ["WordPress", "Elementor", "PHP"],
      gradient: "from-electric-blue to-neon-purple",
      year: "2024",
      image: emrImg,
      link: "https://emradvisoryco.com/",
    },
    {
      title: "Luiz Neto Corretor",
      category: "Sites com Agendamento",
      company: "Freelance",
      status: "Concluído",
      description:
        "Plataforma premium para corretor de imóveis com sistema de agendamento e catálogo de propriedades",
      tags: ["React", "TypeScript", "Node.js"],
      gradient: "from-neon-purple to-electric-blue",
      year: "2024",
      image: luizNetoImg,
      link: "https://luiznetocorretor.vercel.app/",
    },
    {
      title: "Dimmy Studio",
      category: "Landing Pages",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page moderna para estúdio de design e desenvolvimento",
      tags: ["React", "TypeScript", "Tailwind"],
      gradient: "from-electric-pink to-vibrant-cyan",
      year: "2024",
      image: dimmyImg,
      link: "https://mstudiodimmy.vercel.app/",
    },
    {
      title: "Gelateria Soft Haus",
      category: "Landing Pages",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page para gelateria com design moderno e responsivo",
      tags: ["React", "TypeScript", "Tailwind"],
      gradient: "from-vibrant-cyan to-electric-blue",
      year: "2024",
      image: softHausImg,
      link: "https://softhausbr.vercel.app/",
    },
    {
      title: "WP do Tráfego",
      category: "Landing Pages",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page para especialista em tráfego pago e marketing digital",
      tags: ["WordPress", "Elementor", "PHP"],
      gradient: "from-neon-green to-vibrant-cyan",
      year: "2024",
      image: wpTrafegoImg,
      link: "https://www.wpdotrafego.com.br/",
    },
    {
      title: "Dra. Sirlyanne",
      category: "Landing Pages",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page profissional para clínica médica com foco em agendamentos",
      tags: ["React", "TypeScript", "Tailwind"],
      gradient: "from-electric-blue to-neon-purple",
      year: "2024",
      image: draSirlyanneImg,
      link: "https://drasirlyannesantos.vercel.app/",
    },
    {
      title: "Lider Commerce",
      category: "Landing Pages",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page para plataforma de e-commerce e soluções digitais",
      tags: ["React", "TypeScript", "Tailwind"],
      gradient: "from-neon-purple to-electric-pink",
      year: "2024",
      image: liderCommerceImg,
      link: "https://lidercommerce.vercel.app/",
    },
    {
      title: "Jorginho - Faturando em Dólar",
      category: "Landing Pages",
      company: "Freelance",
      status: "Concluído",
      description:
        "Landing page para curso e mentorias sobre faturar em dólar",
      tags: ["WordPress", "Elementor", "PHP"],
      gradient: "from-electric-pink to-neon-purple",
      year: "2024",
      image: jorginhoImg,
      link: "https://www.faturandoemdolar.com.br/",
    },
    {
      title: "Nuttro",
      category: "Mobile",
      company: "Projeto Próprio",
      status: "Concluído",
      description:
        "Aplicativo React Native para gestão nutricional e acompanhamento de dieta",
      tags: ["React Native", "TypeScript", "Node.js"],
      gradient: "from-vibrant-cyan to-electric-blue",
      year: "2024",
      image: nuttroImg,
      link: "https://frontend-nuttro-web.vercel.app/login",
    },
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1.5 sm:mb-2 md:mb-4 leading-tight">
              Meus <span className="text-gradient-primary">Projetos</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
              Uma seleção dos meus trabalhos mais recentes e significativos, demonstrando diferentes tecnologias e abordagens de desenvolvimento.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] sm:text-xs md:text-sm h-7 sm:h-8 md:h-9 px-2 sm:px-3 md:px-4 ${
                  activeFilter === filter ? "bg-gradient-primary border-0" : ""
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                layout
              >
                <Card className="overflow-hidden glass border-border hover:border-primary transition-all group h-full flex flex-col">
                  <div className="relative h-32 sm:h-36 md:h-40 lg:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-1.5 sm:top-2 md:top-4 left-1.5 sm:left-2 md:left-4 right-1.5 sm:right-2 md:right-4 flex justify-between items-start gap-1.5 sm:gap-2">
                      {project.company && (
                        <Badge className="bg-background/80 backdrop-blur-sm text-white text-[9px] sm:text-[10px] md:text-xs">
                          {project.company}
                        </Badge>
                      )}
                      <Badge
                        variant="outline"
                        className={`bg-background/80 backdrop-blur-sm border-white/20 text-[9px] sm:text-[10px] md:text-xs ${
                          project.status === "Em Desenvolvimento"
                            ? "border-yellow-500 text-yellow-500"
                            : "border-green-500 text-green-500"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-4 right-1.5 sm:right-2 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm hover:bg-background/90 text-[9px] sm:text-[10px] md:text-xs h-6 sm:h-7 md:h-8 px-2 sm:px-3"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mr-0.5 sm:mr-1 md:mr-2" />
                          <span className="hidden sm:inline">Visitar</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex-1 flex flex-col">
                    <Badge variant="outline" className="w-fit mb-1.5 sm:mb-2 md:mb-3 text-[9px] sm:text-[10px] md:text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-1.5 md:mb-2 leading-tight">{project.title}</h3>
                    <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 flex-1 leading-snug">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[9px] sm:text-[10px] md:text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
