import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallerySections.map((section) => (
                <Link
                  key={section.id}
                  to={`/galeria/${section.id}`}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={section.images[0]}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                    <p className="text-white/80 text-sm mt-1">
                      {section.images.length} fotos
                    </p>
                  </div>
                </Link>
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
