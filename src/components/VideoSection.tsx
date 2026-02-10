import { useRef, useEffect, useState, useCallback } from "react";
import SectionDivider from "./SectionDivider";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "/video/pousadathomas.mp4",
  "/video/WhatsApp Video 2025-12-18 at 19.12.31.mp4",
  "/video/WhatsApp Video 2025-12-18 at 19.12.33 (2).mp4",
  "/video/WhatsApp Video 2025-12-18 at 19.12.34 (1).mp4",
  "/video/WhatsApp Video 2025-12-18 at 19.12.34.mp4",
];

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Play video when visible or when index changes
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  const handleVideoEnd = useCallback(() => {
    goToNext();
  }, [goToNext]);

  return (
    <section className="bg-background">
      <SectionDivider position="top" />
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <ScrollReveal className="max-w-5xl mx-auto" delay={0}>
          <div ref={containerRef} className="relative group flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-elevated border border-border max-h-[70vh] w-auto">
              <video
                ref={videoRef}
                className="w-full h-full max-h-[70vh] object-contain"
                muted
                playsInline
                preload="metadata"
                onEnded={handleVideoEnd}
                key={currentIndex}
              >
                {isVisible && (
                  <source src={videos[currentIndex]} type="video/mp4" />
                )}
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Vídeo anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Próximo vídeo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Vídeo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
      <SectionDivider position="bottom" />
    </section>
  );
};

export default VideoSection;
