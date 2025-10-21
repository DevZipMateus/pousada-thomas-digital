import { Users, Sparkles, Shield, Leaf, Star, Home } from "lucide-react";
import roomImage from "@/assets/room-comfort.jpg";
import outdoorImage from "@/assets/outdoor-area.jpg";

const Features = () => {
  const features = [
    {
      icon: Home,
      title: "Acomodações confortáveis",
      description: "Quartos acolhedores e bem equipados para sua estadia perfeita",
    },
    {
      icon: Users,
      title: "Atendimento familiar",
      description: "Hospitalidade genuína que faz você se sentir em casa",
    },
    {
      icon: Leaf,
      title: "Contato com a natureza",
      description: "Vista privilegiada das montanhas do Espírito Santo",
    },
    {
      icon: Sparkles,
      title: "Espaço para eventos",
      description: "Ideal para retiros, casamentos, encontros corporativos e terapêuticos",
    },
    {
      icon: Shield,
      title: "Ambiente seguro",
      description: "Tranquilidade e privacidade para toda a família",
    },
    {
      icon: Star,
      title: "Experiência única",
      description: "Momentos inesquecíveis em um cenário natural encantador",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atuamos no setor de turismo e hospitalidade, oferecendo hospedagem de qualidade voltada a hóspedes que buscam conforto, tranquilidade e contato com a natureza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-soft hover-lift border border-border transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-elevated hover-lift">
            <img
              src={roomImage}
              alt="Acomodação confortável com vista para as montanhas"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-elevated hover-lift">
            <img
              src={outdoorImage}
              alt="Área externa com jardim e vista para a natureza"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
