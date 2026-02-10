import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner1Small from "@/assets/banner1-small.jpg";
import banner2Small from "@/assets/banner2-small.jpg";
import banner3Small from "@/assets/banner3-small.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroImages = [
    { small: banner1Small, large: banner1 },
    { small: banner2Small, large: banner2 },
    { small: banner3Small, large: banner3 },
  ];

  return (
    <section id="inicio" className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-5rem)] overflow-hidden">
      <div
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        className="absolute inset-0 will-change-transform"
      >
        <Carousel
          className="absolute inset-0 overflow-hidden"
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent className="-ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 min-w-0 basis-full">
                <picture>
                  <source media="(min-width: 768px)" srcSet={image.large} />
                  <img
                    src={image.small}
                    alt={`Pousada Thomas - Vista ${index + 1}`}
                    className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[calc(100vh-5rem)] object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </picture>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
