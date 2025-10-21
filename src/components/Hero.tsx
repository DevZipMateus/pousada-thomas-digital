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

const Hero = () => {
  const heroImages = [banner1, banner2, banner3];

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
                className="h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <div className="mb-8">
              <div className="inline-block">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-wide">
                  POUSADA THOMAS
                </h1>
                <div className="h-1 bg-accent mx-auto w-3/4"></div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto">
              Na Pousada Thomas o amor é o 'ingrediente' principal
            </p>

            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Localizada no município de Alfredo Chaves, a 76km de Vitória, em um cenário
              privilegiado cercado pela natureza e as montanhas do Espírito Santo
            </p>

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
