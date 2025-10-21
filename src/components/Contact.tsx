import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para receber você e sua família
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    ES 376 - S/Nº - Aparecida
                    <br />
                    Alfredo Chaves - ES
                    <br />
                    CEP 29240-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                  <a
                    href="https://wa.me/5527997248313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    (27) 99724-8313
                  </a>
                  <br />
                  <a
                    href="https://wa.me/5527998507788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    (27) 99850-7788
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:pousadathomas21@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    pousadathomas21@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a quinta: 8h às 19h
                    <br />
                    Sexta a domingo: 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 shadow-soft border border-border h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Faça sua reserva
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Entre em contato pelo WhatsApp e garanta sua estadia em nosso refúgio nas montanhas
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated w-full mb-8"
              >
                <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Reservar pelo WhatsApp
                </a>
              </Button>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4 text-center">Redes sociais</h3>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.instagram.com/pousadathomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/pousadathomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
