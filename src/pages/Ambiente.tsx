import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import arqu1p from "@/assets/ambiente/arqu1p.png";
import arqu2p from "@/assets/ambiente/arqu2p.png";
import arqu3p from "@/assets/ambiente/arqu3p.png";
import lago1p from "@/assets/ambiente/lago1p.png";
import lago2p from "@/assets/ambiente/lago2p.png";
import lago3p from "@/assets/ambiente/lago3p.png";
import loun1p from "@/assets/ambiente/loun1p.png";
import loun2p from "@/assets/ambiente/loun2p.png";
import loun3p from "@/assets/ambiente/loun3p.png";
import audi1p from "@/assets/ambiente/audi1p.png";
import audi2p from "@/assets/ambiente/audi2p.png";
import rest1p from "@/assets/ambiente/rest1p.png";
import rest2p from "@/assets/ambiente/rest2p.png";
import rest3p from "@/assets/ambiente/rest3p.png";
import pisc1p from "@/assets/ambiente/pisc1p.png";
import pisc2p from "@/assets/ambiente/pisc2p.png";
import pisc3p from "@/assets/ambiente/pisc3p.png";
import natu1p from "@/assets/ambiente/natu1p.png";
import natu2p from "@/assets/ambiente/natu2p.png";
import natu3p from "@/assets/ambiente/natu3p.png";

const Ambiente = () => {
  const ambientes = [
    {
      title: "Restaurante",
      description: "No restaurante é servido o café da manhã, que é totalmente preparado na Pousada pelas mãos das nossas cozinheiras. O almoço é servido em nosso fogão a lenha, com um cardápio variado e saboroso, típico de roça. O jantar é à la carte.",
      images: [rest3p, rest2p, rest1p],
      reverse: false,
    },
    {
      title: "Arquitetura",
      description: "A Pousada Thomas foi toda construída pensando na arquitetura Italiana e Alemã, remetendo a memória dos antepassados da família e nossa origem. Os traços e detalhes são trabalhados de forma rústica, dando todo charme e aconchego para que todos se sintam a vontade e em casa.",
      images: [arqu1p, arqu2p, arqu3p],
      reverse: true,
    },
    {
      title: "Natureza",
      description: "O verde é a cor principal de nosso cenário, e fazemos questão de preservar a natureza ao redor e embelezar todo nosso ambiente com várias espécies de flores, árvores e arbustos. Um convite irrecusável para respirar o ar fresco das montanhas com cheirinho de natureza!",
      images: [natu1p, natu2p, natu3p],
      reverse: false,
    },
    {
      title: "Lago",
      description: "Com pedalinho para um passeio tranquilo e pier para observação da natureza, nosso lago possui também peixes e patos que passeiam por toda sua extensão. Uma dica do passeio é passar por debaixo da ponte!",
      images: [lago3p, lago2p, lago1p],
      reverse: true,
    },
    {
      title: "Lounge",
      description: "Um charme a parte que compõe nosso ambiente externo, ideal para relaxar lendo um livro ou tomar um café em família ou entre amigos, com toda natureza fazendo parte dessa experiência.",
      images: [loun1p, loun2p, loun3p],
      reverse: false,
    },
    {
      title: "Auditório",
      description: "E quando for preciso realizar reuniões empresariais, encontros de retiro, palestras ou outros tipos de encontros que dependem de local fechado com acomodação para todos, vocês podem contar com nossa estrutura de auditório que tem capacidade para até 100 pessoas.",
      images: [audi1p, audi2p],
      reverse: true,
    },
    {
      title: "Piscina",
      description: "Nossa piscina, com água sempre cristalina, pois é uma água 100% mineral, não há produtos químicos. Convidativa para um banho num dia de sol.",
      images: [pisc1p, pisc2p, pisc3p],
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
                oferecemos um refúgio perfeito para quem busca descanso e contato com a natureza.
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
                    <div className="grid grid-cols-2 gap-4">
                      {ambiente.images.map((img, imgIdx) => (
                        <img
                          key={imgIdx}
                          src={img}
                          alt={`${ambiente.title} ${imgIdx + 1}`}
                          className={`rounded-lg shadow-soft hover-lift w-full object-cover ${
                            imgIdx === 0 && ambiente.images.length === 3 ? 'col-span-2 h-64' : 'h-48'
                          }`}
                        />
                      ))}
                    </div>
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
