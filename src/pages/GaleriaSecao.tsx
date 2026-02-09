import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { gallerySections } from "@/data/galleryData";
import { ChevronLeft } from "lucide-react";

const GaleriaSecao = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = gallerySections.find((s) => s.id === sectionId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!section) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Seção não encontrada</h1>
            <Link to="/galeria" className="text-primary hover:underline">
              Voltar à galeria
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Link
                to="/galeria"
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ChevronLeft size={20} />
                <span>Voltar à galeria</span>
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {section.title}
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`${section.title} ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ImageLightbox
        images={section.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + section.images.length) % section.images.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % section.images.length)}
      />

      <Footer />
    </div>
  );
};

export default GaleriaSecao;
