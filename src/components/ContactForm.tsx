import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Mensagem de Contato*%0A%0A` +
      `Nome: ${formData.name}%0A` +
      `Telefone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A%0A` +
      `Mensagem:%0A${formData.message}`;

    window.open(`https://wa.me/5527997248313?text=${message}`, "_blank");
    
    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para o WhatsApp",
    });
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-soft border border-border">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Enviar Mensagem
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="contact-name">Nome *</Label>
          <Input
            id="contact-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <Label htmlFor="contact-phone">DDD + Telefone/Celular *</Label>
          <Input
            id="contact-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(27) 99999-9999"
          />
        </div>

        <div>
          <Label htmlFor="contact-email">E-mail *</Label>
          <Input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <Label htmlFor="message">Sua Mensagem *</Label>
          <Textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Digite sua mensagem aqui..."
            rows={6}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          ENVIAR
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
