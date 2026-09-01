import React from 'react';
import { ClipboardList, MessageCircle, CalendarCheck, Store, RotateCcw, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/company';

const RENTAL_STEPS = [
  {
    icon: ClipboardList,
    title: "Escolha o equipamento",
    text: "Selecione o item que você precisa entre nossas opções de locação."
  },
  {
    icon: MessageCircle,
    title: "Fale com a equipe",
    text: "Toque no botão do WhatsApp e confirme disponibilidade e valores."
  },
  {
    icon: CalendarCheck,
    title: "Reserve o período",
    text: "Definimos juntos a data de retirada ou entrega combinada."
  },
  {
    icon: Store,
    title: "Retire na loja",
    text: "Retire o equipamento em nossa loja física em Santo Amaro, pronto para uso."
  },
  {
    icon: RotateCcw,
    title: "Devolução prática",
    text: "Ao fim do período, devolva o equipamento na loja, sem complicação."
  }
];

export default function RentalGuide() {
  return (
    <div className="mt-20 rounded-3xl bg-[#F8F9FA] px-6 py-12 ring-1 ring-slate-200/70 sm:px-10 lg:px-14">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#E65100]">
          Como alugar
        </span>
        <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#263238] sm:text-3xl">
          Guia rápido de aluguel passo a passo
        </h3>
        <p className="mt-4 font-body text-base leading-relaxed text-[#455A64]">
          Alugar com a Ortopedia Vieira é simples e rápido. Siga os passos abaixo.
        </p>
      </div>

      {/* 5 Steps Grid */}
      <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {RENTAL_STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              className="relative flex flex-col items-start rounded-2xl bg-white p-6 ring-1 ring-slate-200/70"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#E65100]">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <span className="absolute right-5 top-5 font-heading text-2xl font-extrabold text-slate-200">
                {index + 1}
              </span>
              <h4 className="mt-5 font-heading text-base font-bold text-[#263238]">
                {step.title}
              </h4>
              <p className="mt-2 font-body text-sm leading-relaxed text-[#455A64]">
                {step.text}
              </p>
            </motion.li>
          );
        })}
      </ol>

      {/* CTA & Delivery Note */}
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <a
          href={getWhatsAppUrl("a locação de equipamentos")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
          <span>Alugar pelo WhatsApp</span>
        </a>
        <p className="font-body text-sm text-[#455A64]">
          Atendimento de segunda a sábado – {COMPANY_INFO.phoneDisplay}
        </p>
        <p className="mt-1 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 font-body text-sm text-[#E65100]">
          <Truck className="h-4 w-4" strokeWidth={2} />
          <span>Prefere receber em casa? Fazemos entrega com taxa adicional.</span>
        </p>
      </div>
    </div>
  );
}
