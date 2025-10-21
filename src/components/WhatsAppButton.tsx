import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527997248313"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 rounded-full p-3 flex items-center justify-center text-primary-foreground shadow-elevated hover:shadow-lg transition-all duration-300"
      aria-label="Atendimento WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
