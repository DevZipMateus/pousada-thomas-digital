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
      name: "Suíte Standart",
      images: [
        "/suite-standart/Standart c.jpeg",
        "/suite-standart/Standart j.jpeg",
        "/suite-standart/Standart k.jpeg",
        "/suite-standart/Standart l.jpeg",
        "/suite-standart/Suíte Standart 11 E.jpg.jpeg",
        "/suite-standart/Suíte Standart 22 B.jpg.jpeg",
      ],
      description: "Conforto e praticidade em um ambiente acolhedor, perfeito para uma estadia relaxante em meio à natureza.",
      amenities: ["Ar Condicionado", "TV Smart", "Frigobar", "Wi-Fi"],
    },
    {
      id: 2,
      name: "Suíte Superior",
      images: [
        "/suite-superior/Superior a.jpeg",
        "/suite-superior/Suíte Superior 1 J.jpg.jpeg",
        "/suite-superior/Suíte Superior 2 C.jpg.jpeg",
        "/suite-superior/Suíte Superior 4 B.jpg.jpeg",
        "/suite-superior/Suíte Superior 5 D.jpg.jpeg",
        "/suite-superior/Suíte Superior 6 C.jpg.jpeg",
      ],
      description: "Mais espaço e sofisticação para quem busca uma experiência diferenciada com todo o conforto.",
      amenities: ["Cama Queen Size", "Ar Condicionado", "TV Smart", "Frigobar", "Varanda"],
    },
    {
      id: 3,
      name: "Suíte Superior Plus",
      images: [
        "/suite-superior-plus/IMG_4351.jpg.jpeg",
        "/suite-superior-plus/IMG_4358.jpg.jpeg",
        "/suite-superior-plus/IMG_4364.jpg.jpeg",
        "/suite-superior-plus/IMG_4377.jpg.jpeg",
        "/suite-superior-plus/IMG_4393.jpg.jpeg",
        "/suite-superior-plus/Luxe 09.jpeg",
      ],
      description: "O melhor da categoria Superior com acabamentos premium e vista privilegiada para as montanhas.",
      amenities: ["Cama King Size", "Ar Condicionado", "TV Smart", "Frigobar", "Varanda com vista", "Banheira"],
    },
    {
      id: 4,
      name: "Suíte Luxe",
      images: [
        "/suite-luxe/IMG_4341.jpg.jpeg",
        "/suite-luxe/IMG_4343.jpg.jpeg",
      ],
      description: "Nossa suíte mais exclusiva, com design sofisticado e todo o luxo que você merece para uma estadia inesquecível.",
      amenities: ["Cama King Size", "Ar Condicionado", "TV Smart", "Frigobar", "Varanda panorâmica", "Banheira de hidromassagem"],
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
