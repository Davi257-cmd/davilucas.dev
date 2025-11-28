import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Davi <span className="text-gradient-primary">Lucas</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Desenvolvedor Full-Stack | Especialista em IA | Escalando Suas Ideias
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              5+ anos entregando soluções web, mobile e IA de alta performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Carreira
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Conecte-se</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Github className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:contact@davilucas.dev"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Mail className="w-5 h-5 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Davi Lucas. Construído com React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
