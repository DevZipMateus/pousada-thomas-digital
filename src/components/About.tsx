import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre a pousada
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Pousada L A Thomas surgiu a partir de um sonho da família em ter um espaço para descanso nos finais de semana e feriados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-soft hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Missão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Oferecer aos nossos hóspedes uma experiência acolhedora e inesquecível, unindo conforto, hospitalidade e contato com a natureza, para que cada estadia seja um momento de descanso, alegria e boas lembranças.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-soft hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Visão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Ser reconhecida como uma das melhores pousadas da região, referência em qualidade, hospitalidade e atendimento personalizado, inspirando nossos hóspedes a retornarem e recomendarem nossa pousada.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-soft hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Valores</h3>
            <ul className="text-muted-foreground space-y-2 text-center">
              <li>• Hospitalidade</li>
              <li>• Excelência</li>
              <li>• Sustentabilidade</li>
              <li>• Integridade</li>
              <li>• Bem-estar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
