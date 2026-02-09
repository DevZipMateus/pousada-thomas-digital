import { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface GalleryCarouselProps {
  id: string;
  title: string;
  images: string[];
  direction: "forward" | "backward";
}

const GalleryCarousel = ({ id, title, images, direction }: GalleryCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Auto-scroll with direction
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (direction === "forward") {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [emblaApi, direction]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  const lightboxNext = () => setLightboxIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <Link
          to={`/galeria/${id}`}
          className="text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
        >
          {title}
        </Link>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full border border-border bg-background hover:bg-muted transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
            >
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={lightboxPrev}
        onNext={lightboxNext}
      />
    </div>
  );
};

export default GalleryCarousel;
