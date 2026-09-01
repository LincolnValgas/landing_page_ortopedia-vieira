import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-body text-[#263238]">
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-28 text-center sm:px-8">
        <span className="font-heading text-6xl font-extrabold text-[#C62828]">404</span>
        <h1 className="mt-4 font-heading text-3xl font-extrabold text-[#263238]">
          Página não encontrada
        </h1>
        <p className="mt-4 font-body text-base text-[#455A64]">
          A página que você procura não existe ou foi movida.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C62828] px-6 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-[#a91f1f]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar ao início</span>
        </a>
      </main>
      <Footer />
    </div>
  );
}
