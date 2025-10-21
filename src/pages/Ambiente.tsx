import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const Ambiente = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const ambientes = [
    {
      category: "Piscina",
      images: [
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800",
        "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800",
      ],
    },
    {
      category: "Lago",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      ],
    },
    {
      category: "Lounge",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      ],
    },
    {
      category: "Restaurante",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      ],
    },
    {
      category: "Natureza",
      images: [
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      ],
    },
    {
      category: "Arquitetura",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Ambiente
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A Pousada possui diversos ambientes para se desfrutar. Conheça cada cantinho especial que preparamos para você!
              </p>
            </div>

            <div className="space-y-12 max-w-7xl mx-auto">
              {ambientes.map((ambiente, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
                    {ambiente.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ambiente.images.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="rounded-lg overflow-hidden shadow-soft hover-lift cursor-pointer transition-all duration-300"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${ambiente.category} ${imgIdx + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Visualização ampliada"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Ambiente;
