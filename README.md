# Ortopedia Vieira - Website Oficial

Site institucional e catálogo de produtos e locações da **Ortopedia Vieira** (Cuidado & Mobilidade / Cirúrgica e Ortopedia).

## 🚀 Como abrir e rodar no VS Code

1. Abra a pasta `ortopedia-vieira` no **VS Code**:
   - Abra o VS Code.
   - Vá em **Arquivo > Abrir Pasta...** (ou `File > Open Folder...`).
   - Selecione a pasta `ortopedia-vieira` que está na sua Área de Trabalho (Desktop).

2. Abra o terminal integrado no VS Code (`Ctrl + \`` ou **Terminal > Novo Terminal**).

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Clique no link que aparecer no terminal (normalmente `http://localhost:5173`) para visualizar no navegador com recarregamento em tempo real (Hot Reload)!

---

## 📦 Estrutura do Projeto

```
ortopedia-vieira/
├── public/
│   └── images/              # Imagens reais dos 19 produtos + logotipo
├── src/
│   ├── components/          # Componentes modulares
│   │   ├── Header.jsx       # Barra de navegação, logo e link Mercado Livre
│   │   ├── Hero.jsx         # Seção principal com selos de confiança
│   │   ├── ProductCard.jsx  # Card com foto, descrição e botão WhatsApp
│   │   ├── ProductSection.jsx # Grid de produtos e seção de locação
│   │   ├── RentalGuide.jsx  # Guia passo a passo de aluguel (5 etapas)
│   │   ├── Footer.jsx       # Rodapé com endereço, redes e CNPJ
│   │   └── WhatsAppFloating.jsx # Botão flutuante do WhatsApp
│   ├── data/
│   │   ├── company.js       # Telefones, endereço, redes e gerador de link WhatsApp
│   │   └── products.js      # Catálogo com todos os produtos cadastrados
│   ├── pages/
│   │   ├── Home.jsx         # Página inicial
│   │   ├── PrivacyPolicy.jsx # Termos de Política de Privacidade (LGPD)
│   │   └── NotFound.jsx     # Página 404
│   ├── App.jsx              # Rotas da aplicação
│   ├── main.jsx             # Ponto de entrada do React
│   └── index.css            # Estilos globais e Tailwind CSS
├── index.html               # HTML principal com fontes e meta tags
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração de cores e tipografia
└── vite.config.js           # Configuração do Vite
```

---

## 🛠️ Tecnologias Utilizadas
- **React 18**
- **Vite**
- **Tailwind CSS**
- **Lucide React** (Ícones modernos)
- **Framer Motion** (Animações suaves)
- **React Router DOM** (Navegação de páginas)
