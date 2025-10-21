import { Target, Eye, Heart } from "lucide-react";
import SectionDivider2 from "./SectionDivider2";

const About = () => {
  return (
    <section id="sobre" className="bg-secondary/30">
      <SectionDivider2 position="top" />
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre a Pousada
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Pousada L A Thomas surgiu a partir de um sonho da família em ter um espaço para descanso nos finais de semana e feriados. 
            Hoje, atuamos no setor de turismo e hospitalidade, oferecendo hospedagem de qualidade voltada a hóspedes que buscam conforto, 
            tranquilidade e contato com a natureza.
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-soft border border-border mb-16 max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            Nosso público-alvo é composto por turistas nacionais, casais e famílias que desejam viver experiências autênticas, 
            com atendimento personalizado e ambiente acolhedor. Também recebemos igrejas para retiros, empresas, eventos, 
            casamentos e encontros terapêuticos. Inserida em um mercado competitivo, a Pousada L A Thomas diferencia-se 
            pela atenção aos detalhes, excelência no atendimento e valorização da cultura local, fortalecendo o turismo 
            sustentável e de qualidade na região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-soft hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Missão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Oferecer aos nossos hóspedes uma experiência acolhedora e inesquecível, unindo conforto, hospitalidade e 
              contato com a natureza, para que cada estadia seja um momento de descanso, alegria e boas lembranças.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-soft hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Visão</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Ser reconhecida como uma das melhores pousadas da região, referência em qualidade, hospitalidade e 
              atendimento personalizado, inspirando nossos hóspedes a retornarem e recomendarem nossa pousada.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-soft hover-lift border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground">Valores</h3>
            <ul className="text-muted-foreground space-y-2 text-left">
              <li className="leading-relaxed"><strong>Hospitalidade:</strong> Receber cada hóspede com carinho, atenção e respeito</li>
              <li className="leading-relaxed"><strong>Excelência:</strong> Buscar constantemente a melhoria dos serviços e do conforto oferecido</li>
              <li className="leading-relaxed"><strong>Sustentabilidade:</strong> Cuidar do meio ambiente e valorizar a comunidade local</li>
              <li className="leading-relaxed"><strong>Integridade:</strong> Agir com honestidade, ética e transparência em todas as relações</li>
              <li className="leading-relaxed"><strong>Bem-estar:</strong> Promover um ambiente tranquilo, seguro e acolhedor</li>
            </ul>
          </div>
        </div>
      </div>
      <SectionDivider2 position="bottom" />
    </section>
  );
};

export default About;
