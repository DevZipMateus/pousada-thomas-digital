import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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

  return (
    <section id="inicio" className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
      <Carousel
        className="absolute inset-0"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <picture>
                <source media="(min-width: 768px)" srcSet={image.large} />
                <img
                  src={image.small}
                  alt={`Pousada Thomas - Vista ${index + 1}`}
                  className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
