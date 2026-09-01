import React from 'react';
import { PackageSearch } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import RentalGuide from './RentalGuide';

export default function ProductSection() {
  return (
    <section id="produtos" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#E65100]">
            Nossos Produtos & Serviços
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#263238] sm:text-4xl">
            Tudo para o seu bem-estar e reabilitação
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-[#455A64]">
            Selecione um item e converse com nossa equipe pelo WhatsApp para tirar dúvidas,
            verificar disponibilidade e finalizar seu pedido.
          </p>
        </div>

        {/* Product Cards Grid */}
        {PRODUCTS.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-[#F8F9FA] px-6 py-20 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-[#E65100]">
              <PackageSearch className="h-8 w-8" strokeWidth={1.8} />
            </span>
            <h3 className="mt-6 font-heading text-xl font-bold text-[#263238]">
              Nenhum item disponível no momento
            </h3>
            <p className="mt-3 max-w-sm font-body text-[15px] leading-relaxed text-[#455A64]">
              Em breve traremos novos produtos. Enquanto isso, fale com nossa equipe para solicitar o que precisa.
            </p>
          </div>
        )}

        {/* Rental Steps Section */}
        <div id="alugueis" className="scroll-mt-24">
          <RentalGuide />
        </div>
      </div>
    </section>
  );
}
