import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/ReservationForm";
import ContactForm from "@/components/ContactForm";

const Reservas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Reservas & Contato
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Preencha o formulário abaixo para verificar disponibilidade ou enviar sua mensagem
              </p>
              <a
                href="https://wa.me/5527997248313"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline font-medium"
              >
                Clique para mais informações sobre a sua hospedagem
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ReservationForm />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reservas;
