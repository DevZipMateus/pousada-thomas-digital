import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuiteCarousel from "@/components/SuiteCarousel";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Suites = () => {
  const suites = [
    {
      id: 1,
      name: "Suíte Master",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
      ],
      description: "Suíte ampla e confortável com vista privilegiada para as montanhas",
      amenities: ["Cama King Size", "Ar Condicionado", "TV Smart", "Frigobar", "Varanda com vista"],
    },
    {
      id: 2,
      name: "Suíte Família",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
        "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=800",
      ],
      description: "Perfeita para famílias, com espaço amplo e acomodações confortáveis",
      amenities: ["2 Quartos", "Ar Condicionado", "TV Smart", "Frigobar", "Sala de estar"],
    },
    {
      id: 3,
      name: "Suíte Casal",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      ],
      description: "Romântica e aconchegante, ideal para casais que buscam tranquilidade",
      amenities: ["Cama Queen Size", "Ar Condicionado", "TV Smart", "Frigobar", "Banheira"],
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
                Nossas Suítes
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça nossas acomodações confortáveis e acolhedoras, preparadas especialmente para você
              </p>
            </ScrollReveal>

            <div className="space-y-10 sm:space-y-12 md:space-y-16 max-w-6xl mx-auto">
              {suites.map((suite) => (
                <ScrollReveal key={suite.id}>
                  <SuiteCarousel suite={suite} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="mt-16 text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated"
              >
                <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Reserve sua suíte agora
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Suites;
