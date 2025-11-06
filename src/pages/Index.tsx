import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
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
        <VideoSection />
        <LocationSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
