import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Pousada L A Thomas" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
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
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
            >
              Contato
            </button>
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
