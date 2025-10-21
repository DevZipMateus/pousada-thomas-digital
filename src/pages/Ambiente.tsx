import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Ambiente = () => {
  const ambientes = [
    {
      title: "Restaurante",
      description: "No restaurante é servido o café da manhã, preparado com muito carinho e ingredientes frescos, proporcionando um momento especial para começar o dia.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      reverse: false,
    },
    {
      title: "Arquitetura",
      description: "A Pousada Thomas foi toda construída pensando na arquitetura Italiana e Alemã, com detalhes que remetem à cultura europeia e ao aconchego das montanhas.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      reverse: true,
    },
    {
      title: "Natureza",
      description: "O verde é a cor principal de nosso cenário. Cercados pela Mata Atlântica, oferecemos contato direto com a natureza em um ambiente preservado e tranquilo.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
      reverse: false,
    },
    {
      title: "Lago",
      description: "Com pedalinho para um passeio tranquilo e pier para contemplação, nosso lago é perfeito para momentos de paz e relaxamento em família.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      reverse: true,
    },
    {
      title: "Lounge",
      description: "Um charme à parte que compõe nosso ambiente externo. Espaço ideal para confraternizações, leitura ou simplesmente apreciar a vista das montanhas.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      reverse: false,
    },
    {
      title: "Auditório",
      description: "E quando for preciso realizar reuniões empresariais, retiros ou eventos, nosso auditório comporta confortavelmente até 100 pessoas, com toda infraestrutura necessária.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      reverse: true,
    },
    {
      title: "Piscina",
      description: "Nossa piscina, com água sempre cristalina e ambiente agradável, é perfeita para relaxar e se refrescar nos dias ensolarados das montanhas capixabas.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Ambiente
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Pousada possui diversos ambientes para se desfrutar. Conheça cada cantinho especial que preparamos para você!
              </p>
            </div>

            <div className="mb-12 max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na Pousada Thomas o amor é o 'ingrediente' principal. Localizada no município de Alfredo Chaves, 
                a 76km de Vitória, oferecemos um refúgio perfeito para quem busca descanso e contato com a natureza.
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {ambientes.map((ambiente, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    ambiente.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={ambiente.image}
                      alt={ambiente.title}
                      className="rounded-lg shadow-soft hover-lift w-full h-80 object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {ambiente.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {ambiente.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated"
              >
                <Link to="/suites">
                  VEJA TAMBÉM NOSSAS SUÍTES!
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ambiente;
