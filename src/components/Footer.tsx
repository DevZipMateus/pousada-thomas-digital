import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <ScrollReveal className="flex flex-col items-center text-center space-y-8">
          <img src="/logo.png" alt="Pousada Thomas" className="h-20 w-auto" />

          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/suites" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors font-medium">
              Suítes
            </Link>
            <Link to="/ambiente" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors font-medium">
              Ambiente
            </Link>
            <Link to="/eventos" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors font-medium">
              Eventos
            </Link>
            <Link to="/reservas" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors font-medium">
              Reservas & Contato
            </Link>
          </nav>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated hover:shadow-[0_12px_40px_hsl(162_73%_46%/0.3)] transition-all duration-300">
            <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
              Atendimento WhatsApp
            </a>
          </Button>

          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(27) 99850-7788 | (27) 99724-8313</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@pousadathomas.com.br" className="hover:text-primary transition-colors">
                contato@pousadathomas.com.br
              </a>
            </div>
            <div className="flex items-start justify-center gap-2">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <span className="max-w-md">
                Rod. João Ribeiro Schorling, ES-376, Km 7, Aparecida, Alfredo Chaves - ES, 29240-000
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com/pousadathomas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://facebook.com/pousadathomas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground pt-6 border-t border-border w-full">
            <p>2025 ©Pousada Thomas - Todos os direitos reservados</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
