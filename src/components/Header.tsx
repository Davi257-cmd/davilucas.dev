import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Início" },
    { path: "/portfolio", label: "Portfólio" },
    { path: "/skills", label: "Skills" },
    { path: "/services", label: "Serviços" },
    { path: "/career", label: "Carreira" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-bold">
              Davi <span className="text-gradient-primary">Lucas</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs md:text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button variant="outline" size="sm" className="text-xs md:text-sm h-8 md:h-9 px-3 md:px-4" asChild>
              <Link to="/contact">Vamos Conversar</Link>
            </Button>
            <Button size="sm" className="bg-gradient-primary border-0 text-xs md:text-sm h-8 md:h-9 px-3 md:px-4" asChild>
              <Link to="/portfolio">Ver Trabalhos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <nav className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm sm:text-base font-medium transition-colors py-1 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm h-9 sm:h-10" asChild>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Vamos Conversar
                  </Link>
                </Button>
                <Button size="sm" className="bg-gradient-primary border-0 text-xs sm:text-sm h-9 sm:h-10" asChild>
                  <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                    Ver Trabalhos
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
