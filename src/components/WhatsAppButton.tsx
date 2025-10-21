import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527997248313"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-6 z-40 bg-primary hover:bg-primary/90 rounded-full px-6 py-3 flex items-center gap-2 text-primary-foreground shadow-elevated hover:shadow-lg transition-all duration-300 font-medium"
      aria-label="Atendimento WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">ATENDIMENTO WHATSAPP</span>
    </a>
  );
};

export default WhatsAppButton;
