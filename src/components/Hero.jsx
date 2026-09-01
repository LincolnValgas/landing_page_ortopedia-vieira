import React from 'react';
import { ShieldCheck, Truck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Produtos certificados" },
  { icon: Truck, label: "Entrega em toda a cidade" },
  { icon: MapPin, label: "Santo Amaro – São Paulo" },
];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[#F8F9FA]">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Sub-badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-[#E65100]">
            Cirúrgica e Ortopedia
          </span>

          {/* Main Title */}
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-[#263238] sm:text-5xl lg:text-6xl">
            O cuidado para quem você ama você encontra aqui!
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-[#455A64]">
            Produtos ortopédicos, locação e Home Care com atendimento humano e especializado.
            Escolha o item diretamente com os nossos atendentes.
          </p>

          {/* Trust Features */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-[#455A64]">
                <Icon className="h-5 w-5 text-[#E65100]" strokeWidth={2} />
                <span className="font-body text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
