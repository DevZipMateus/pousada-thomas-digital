import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner1Small from "@/assets/banner1-small.jpg";
import banner2Small from "@/assets/banner2-small.jpg";
import banner3Small from "@/assets/banner3-small.jpg";

const Hero = () => {
  const heroImages = [
    { small: banner1Small, large: banner1 },
    { small: banner2Small, large: banner2 },
    { small: banner3Small, large: banner3 },
  ];

  const scrollToAbout = () => {
    const element = document.getElementById("sobre");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      <Carousel
        className="absolute inset-0"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div 
                className="h-screen bg-cover bg-no-repeat bg-center md:bg-center"
                style={{ 
                  backgroundImage: `url(${window.innerWidth >= 1024 ? image.large : image.small})`,
                  backgroundPosition: window.innerWidth < 768 ? 'center 30%' : 'center center'
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20 flex items-end min-h-screen pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Na Pousada Thomas o amor é o 'ingrediente' principal
            </h2>

            <h3 className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Localizada no município de Alfredo Chaves, a 76km de Vitória, em um cenário
              privilegiado cercado pela natureza e as montanhas do Espírito Santo
            </h3>

            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated text-lg px-8"
            >
              SAIBA MAIS
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
