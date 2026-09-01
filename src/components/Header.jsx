import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/company';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-10">
        {/* Brand / Logo */}
        <a href="/#topo" className="flex items-center gap-3 group">
          <span className="h-14 w-14 overflow-hidden rounded-full ring-1 ring-slate-300 transition-transform duration-200 group-hover:scale-105">
            <img
              src={COMPANY_INFO.logo}
              alt="Logo Ortopedia Vieira"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-heading text-lg font-extrabold tracking-tight text-[#263238]">
              {COMPANY_INFO.name}
            </span>
            <span className="mt-1 font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#455A64]">
              {COMPANY_INFO.tagline}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-sm font-semibold text-[#455A64] transition-colors duration-200 hover:text-[#E65100]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={COMPANY_INFO.mercadoLivreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#FFE600] px-6 py-3 font-heading text-[13px] font-bold uppercase tracking-wide text-[#263238] shadow-sm transition-all duration-200 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFE600]"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={2.2} />
            <span>Visitar Mercado Livre</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#263238] transition-colors hover:bg-slate-100 md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-heading text-base font-semibold text-[#455A64] transition-colors hover:text-[#E65100]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
