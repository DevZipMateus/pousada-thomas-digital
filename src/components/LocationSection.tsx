import { MapPin } from "lucide-react";
import SectionDivider2 from "./SectionDivider2";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  return (
    <section id="localizacao" className="bg-secondary/30">
      <SectionDivider2 position="top" />
      <div className="container mx-auto px-4 pb-20">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            LOCALIZAÇÃO
          </h2>
          <div className="divider-line mb-4" />
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <p className="text-sm sm:text-base md:text-lg">
              Rod. João Ribeiro Schorling, ES-376, Km 70 - Aparecida, Alfredo Chaves - ES, 29240-000
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="max-w-5xl mx-auto" delay={0.1}>
          <div className="rounded-lg overflow-hidden shadow-elevated border border-border hover-glow">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Pousada+Thomas,+Rod.+João+Ribeiro+Schorling,+ES-376,+Km+70+-+Aparecida,+Alfredo+Chaves+-+ES,+29240-000"
              width="100%"
              height="350"
              className="w-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pousada Thomas"
            />
          </div>
        </ScrollReveal>
      </div>
      <SectionDivider2 position="bottom" />
    </section>
  );
};

export default LocationSection;
