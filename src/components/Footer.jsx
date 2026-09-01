import React from 'react';
import { MapPin, Instagram, Phone, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  return (
    <footer id="contatos" className="w-full bg-[#C62828] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Address */}
          <div className="flex max-w-2xl flex-col items-center gap-3">
            <MapPin className="h-6 w-6 text-white/90" strokeWidth={2} />
            <p className="font-body text-base leading-relaxed text-white">
              {COMPANY_INFO.address}
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white/85">
              Nossas redes:
            </span>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Ortopedia Vieira"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/25"
            >
              <Instagram className="h-6 w-6" strokeWidth={2} />
            </a>
          </div>

          {/* Contact Phone */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-heading text-lg font-semibold text-white">
              Atendimento e WhatsApp: {COMPANY_INFO.phoneDisplay}
            </span>
            <a
              href={`tel:+${COMPANY_INFO.whatsappNumber}`}
              className="inline-flex items-center gap-2 font-body text-base text-white/90 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" strokeWidth={2} />
              <span>Ligar agora</span>
            </a>
          </div>

          {/* Legal / CNPJ & Privacy */}
          <div className="flex flex-col items-center gap-3 border-t border-white/20 pt-8 text-center sm:flex-row sm:gap-6">
            <span className="font-body text-xs text-white/85">
              CNPJ: {COMPANY_INFO.cnpj}
            </span>
            <a
              href="/politica-de-privacidade"
              className="inline-flex items-center gap-1.5 font-body text-xs text-white underline underline-offset-4 transition-colors hover:text-white/80"
            >
              <FileText className="h-3.5 w-3.5" strokeWidth={2} />
              <span>Política de Privacidade</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs text-white/70">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
