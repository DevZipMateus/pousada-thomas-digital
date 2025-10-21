import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";

interface Suite {
  id: number;
  name: string;
  images: string[];
  description: string;
  amenities: string[];
}

interface SuiteCarouselProps {
  suite: Suite;
}

const SuiteCarousel = ({ suite }: SuiteCarouselProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-soft border border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <Carousel className="w-full">
          <CarouselContent>
            {suite.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`${suite.name} - Imagem ${index + 1}`}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {suite.name}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {suite.description}
          </p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Comodidades:</h4>
            <ul className="space-y-2">
              {suite.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center text-muted-foreground">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto"
          >
            <a href="https://wa.me/5527997248313" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              Reservar esta suíte
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuiteCarousel;
