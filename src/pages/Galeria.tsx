import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";
import { gallerySections } from "@/data/galleryData";

const Galeria = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Galeria de Fotos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça cada detalhe da Pousada Thomas através das nossas fotos.
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              {gallerySections.map((section, idx) => (
                <GalleryCarousel
                  key={section.id}
                  id={section.id}
                  title={section.title}
                  images={section.images}
                  direction={idx % 2 === 0 ? "forward" : "backward"}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Galeria;
