import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';
import { COMPANY_INFO } from '../data/company';

const PRIVACY_SECTIONS = [
  {
    title: "1. Informações que coletamos",
    text: "Coletamos apenas as informações necessárias para atender sua solicitação de compra ou locação, como nome, telefone e endereço de entrega, fornecidos por você ao entrar em contato via WhatsApp ou ao realizar um pedido."
  },
  {
    title: "2. Como utilizamos seus dados",
    text: "Utilizamos seus dados exclusivamente para responder dúvidas, processar pedidos, agendar locações e entregas, e prestar o suporte necessário ao atendimento. Não utilizamos suas informações para fins distintos sem o seu consentimento."
  },
  {
    title: "3. Compartilhamento de dados",
    text: "Não vendemos nem compartilhamos seus dados com terceiros. Podemos compartilhar informações apenas quando necessário para a execução do serviço (por exemplo, com a transportadora responsável pela entrega) ou quando exigido por lei."
  },
  {
    title: "4. Armazenamento e segurança",
    text: "Adotamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, alteração ou divulgação. Os dados são mantidos apenas pelo tempo necessário ao cumprimento da finalidade descrita."
  },
  {
    title: "5. Seus direitos (LGPD)",
    text: `Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento, bastando entrar em contato pelo WhatsApp ${COMPANY_INFO.phoneDisplay}.`
  },
  {
    title: "6. Contato",
    text: `Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato pelo WhatsApp ${COMPANY_INFO.phoneDisplay} ou pelo endereço ${COMPANY_INFO.address}.`
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-body text-[#263238]">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-[#455A64] transition-colors hover:text-[#E65100]"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.2} />
          <span>Voltar ao início</span>
        </a>

        <span className="mt-6 block font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#E65100]">
          Documento Legal
        </span>

        <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#263238] sm:text-4xl">
          Política de Privacidade
        </h1>

        <p className="mt-5 font-body text-base leading-relaxed text-[#455A64]">
          A {COMPANY_INFO.name} respeita a sua privacidade e compromete-se a proteger seus dados pessoais.
          Esta política descreve como coletamos, usamos e protegemos suas informações.
        </p>

        <div className="mt-12 space-y-10">
          {PRIVACY_SECTIONS.map((sec) => (
            <section key={sec.title}>
              <h2 className="font-heading text-lg font-bold text-[#263238]">
                {sec.title}
              </h2>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-[#455A64]">
                {sec.text}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-slate-200 pt-6 font-body text-sm text-[#455A64]">
          Última atualização: agosto de 2026.
        </p>
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
