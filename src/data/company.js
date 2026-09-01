export const COMPANY_INFO = {
  name: "Ortopedia Vieira",
  tagline: "Cuidado & Mobilidade",
  category: "Cirúrgica e Ortopedia",
  phone: "1126451053",
  phoneDisplay: "(11) 2645-1053",
  whatsappNumber: "551126451053",
  address: "Rua General Roberto Alves Carvalho Filho, 310 – Santo Amaro, São Paulo – SP",
  instagramUrl: "https://www.instagram.com/ortopediavieira2/",
  mercadoLivreUrl: "https://www.mercadolivre.com.br/pagina/ortopediavieiramed56",
  cnpj: "48.399.751/0001-59",
  logo: "/images/4f7ddb5d3_WhatsAppImage2026-08-24at180502.jpeg",
};

export const NAV_LINKS = [
  { label: "Aluguéis", href: "/#alugueis" },
  { label: "Sobre Nós", href: "/#topo" },
  { label: "Contatos", href: "/#contatos" },
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];

export function getWhatsAppUrl(productOrSubject) {
  const text = `Olá, gostaria de saber mais sobre ${productOrSubject}.`;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
