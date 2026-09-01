import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-body text-[#263238]">
      <Header />
      <main>
        <Hero />
        <ProductSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
