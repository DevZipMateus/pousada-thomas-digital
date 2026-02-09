import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-soft border-b border-border`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Pousada Thomas" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/suites"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Suítes
            </Link>
            <Link
              to="/ambiente"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Ambiente
            </Link>
            <Link
              to="/galeria"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Galeria
            </Link>
            <Link
              to="/eventos"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Eventos
            </Link>
            <Link
              to="/reservas"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Reservas & Contato
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
                Reservar agora
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Home
            </Link>
            <Link
              to="/suites"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Suítes
            </Link>
            <Link
              to="/ambiente"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Ambiente
            </Link>
            <Link
              to="/galeria"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Galeria
            </Link>
            <Link
              to="/eventos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Eventos
            </Link>
            <Link
              to="/reservas"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Reservas & Contato
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
            >
              <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
                Reservar agora
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
