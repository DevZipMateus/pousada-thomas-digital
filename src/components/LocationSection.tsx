import { MapPin } from "lucide-react";
import SectionDivider2 from "./SectionDivider2";

const LocationSection = () => {
  return (
    <section id="localizacao" className="bg-secondary/30">
      <SectionDivider2 position="top" />
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            LOCALIZAÇÃO
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <p className="text-lg">
              Rod. João Ribeiro Schorling, ES-376, Km 70 - Aparecida, Alfredo Chaves - ES, 29240-000
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-elevated border border-border">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Pousada+Thomas,+Rod.+João+Ribeiro+Schorling,+ES-376,+Km+70+-+Aparecida,+Alfredo+Chaves+-+ES,+29240-000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pousada Thomas"
            />
          </div>
        </div>
      </div>
      <SectionDivider2 position="bottom" />
    </section>
  );
};

export default LocationSection;
