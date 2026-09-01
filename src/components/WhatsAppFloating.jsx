import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/company';

export default function WhatsAppFloating() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setIsScrolled(true);
        setIsVisible(true);
      } else {
        setIsScrolled(false);
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={getWhatsAppUrl("os produtos da Ortopedia Vieira")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tirar dúvidas pelo WhatsApp"
      className={`fixed bottom-8 right-8 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-4 font-heading text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:bg-[#1ebe5d] ${
        isScrolled ? "px-5" : "px-4"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
        <MessageCircle className="relative h-5 w-5" strokeWidth={2.4} />
      </span>
      {isScrolled && <span className="whitespace-nowrap">Dúvidas? Fale conosco</span>}
    </a>
  );
}
