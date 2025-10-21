import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <LocationSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
