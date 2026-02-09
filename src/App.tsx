import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Suites from "./pages/Suites";
import Ambiente from "./pages/Ambiente";
import Eventos from "./pages/Eventos";
import Reservas from "./pages/Reservas";
import Galeria from "./pages/Galeria";
import GaleriaSecao from "./pages/GaleriaSecao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suites" element={<Suites />} />
          <Route path="/ambiente" element={<Ambiente />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/galeria/:sectionId" element={<GaleriaSecao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
