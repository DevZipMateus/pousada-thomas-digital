import { useRef, useEffect, useState } from "react";
import SectionDivider from "./SectionDivider";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          videoRef.current?.play();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="bg-background">
      <SectionDivider position="top" />
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          <div className="rounded-lg overflow-hidden shadow-elevated border border-border">
            <video
              ref={videoRef}
              className="w-full h-auto"
              loop
              muted
              playsInline
              preload="none"
              poster=""
            >
              {isVisible && (
                <source src="/video/pousadathomas.mp4" type="video/mp4" />
              )}
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
      <SectionDivider position="bottom" />
    </section>
  );
};

export default VideoSection;
