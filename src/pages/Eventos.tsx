import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Users, Calendar, Heart } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Eventos = () => {
  const eventos = [
    {
      title: "Casamentos",
      icon: Heart,
      description: "Realize o casamento dos seus sonhos em um cenário natural encantador",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    },
    {
      title: "Eventos Corporativos",
      icon: Users,
      description: "Auditório com capacidade para até 100 pessoas, ideal para reuniões e workshops",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    },
    {
      title: "Retiros e Encontros",
      icon: Calendar,
      description: "Espaço perfeito para retiros espirituais, terapêuticos e confraternizações",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Eventos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                A Pousada Thomas é o local perfeito para realizar eventos inesquecíveis em meio à natureza
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nos jardins, na área da piscina, em nossos salões ou aonde preferirem, seu evento se transformará em um momento único e inesquecível. Consulte-nos e faça o seu orçamento.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16 max-w-6xl mx-auto">
              {eventos.map((evento, idx) => {
                const Icon = evento.icon;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.15}>
                    <div className="bg-card rounded-lg overflow-hidden shadow-soft hover-lift border border-border h-full">
                      <img
                        src={evento.image}
                        alt={evento.title}
                        className="w-full h-40 sm:h-48 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {evento.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {evento.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal>
              <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/20">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Planeje seu evento conosco
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Entre em contato para solicitar um orçamento personalizado e conhecer toda nossa infraestrutura
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated"
                >
                  <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Eventos;
