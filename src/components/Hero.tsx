import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Pousada L A Thomas
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 animate-fade-in font-normal">
            Oferecer aos nossos hóspedes uma experiência acolhedora e inesquecível, unindo conforto, hospitalidade e contato com a natureza
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 animate-fade-in italic">
            Seu lar nas montanhas!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated"
            >
              <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Fale conosco
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-foreground backdrop-blur-sm"
            >
              <a href="#sobre">
                <MapPin className="mr-2 h-5 w-5" />
                Conheça nossa pousada
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Conforto</h3>
              <p className="text-white/90">Acomodações acolhedoras</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Natureza</h3>
              <p className="text-white/90">Vista para as montanhas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Tranquilidade</h3>
              <p className="text-white/90">Ambiente familiar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
