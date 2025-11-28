import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold">
                Davi <span className="text-gradient-primary">Lucas</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-md leading-relaxed">
              Desenvolvedor Full-Stack | Especialista em IA | Escalando Suas Ideias
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
              5+ anos entregando soluções web, mobile e IA de alta performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Links Rápidos</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/portfolio" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Carreira
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-sm sm:text-base">Conecte-se</h3>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://github.com/Davi257-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/davi-lucas-049b48269/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:davillucas@gmail.com"
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} Davi Lucas. Construído com React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
