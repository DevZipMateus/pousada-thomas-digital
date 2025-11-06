import SectionDivider from "./SectionDivider";

const VideoSection = () => {
  return (
    <section className="bg-background">
      <SectionDivider position="top" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-elevated border border-border">
            <video
              className="w-full h-auto"
              controls
              loop
              muted
              preload="metadata"
              poster="/video/pousadathomas.mp4#t=0.1"
            >
              <source src="/video/pousadathomas.mp4" type="video/mp4" />
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
