import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '../data/company';

export default function ProductCard({ product, index = 0 }) {
  const isPhysicalExclusive = product.badge === "Exclusivo Loja Física";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 hover:ring-slate-300"
    >
      {/* Product Image Box */}
      <div className="relative aspect-square overflow-hidden bg-[#F2F2F2]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] animate-fadeInImg"
          loading="lazy"
        />
        <span
          className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur-md ${
            isPhysicalExclusive ? "bg-[#E65100]/90" : "bg-[#C62828]/90"
          }`}
        >
          {product.badge}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-extrabold tracking-tight text-[#263238]">
          {product.name}
        </h3>
        <p className="mt-4 font-body text-[15px] leading-relaxed text-[#455A64] flex-1">
          {product.description}
        </p>

        {/* CTA Button */}
        <a
          href={getWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#C62828] px-5 py-3.5 font-heading text-[13px] font-bold uppercase tracking-[1px] text-white transition-all duration-200 hover:bg-[#a91f1f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C62828]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
          <span>Consultar Item</span>
        </a>
      </div>
    </motion.article>
  );
}
