import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays } from "lucide-react";

const ReservationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    children: "",
    observations: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Verificação de Disponibilidade*%0A%0A` +
      `Nome: ${formData.name}%0A` +
      `Telefone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Check-in: ${formData.checkIn}%0A` +
      `Check-out: ${formData.checkOut}%0A` +
      `Adultos: ${formData.adults}%0A` +
      `Crianças: ${formData.children}%0A` +
      `Observações: ${formData.observations || "Nenhuma"}`;

    window.open(`https://wa.me/5527997248313?text=${message}`, "_blank");
    
    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para o WhatsApp",
    });
  };

  return (
    <div className="bg-card rounded-lg p-8 shadow-soft border border-border">
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Verificar Disponibilidade
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nome *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <Label htmlFor="phone">DDD + Telefone/Celular *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(27) 99999-9999"
          />
        </div>

        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="checkIn">Data de Entrada *</Label>
            <Input
              id="checkIn"
              type="date"
              required
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="checkOut">Data de Saída *</Label>
            <Input
              id="checkOut"
              type="date"
              required
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="adults">Nº de Adultos *</Label>
            <Input
              id="adults"
              type="number"
              min="1"
              required
              value={formData.adults}
              onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
              placeholder="0"
            />
          </div>
          <div>
            <Label htmlFor="children">Nº de Crianças</Label>
            <Input
              id="children"
              type="number"
              min="0"
              value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: e.target.value })}
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="observations">Observações</Label>
          <Textarea
            id="observations"
            value={formData.observations}
            onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
            placeholder="Alguma observação ou pedido especial?"
            rows={3}
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

export default ReservationForm;
