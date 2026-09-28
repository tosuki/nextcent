# Nextcent 🚀

<div align="center">

> Landing page moderna e responsiva desenvolvida com as práticas mais recentes do **Angular**, inspirada no design da comunidade Figma da **Nexcent**.

[![Angular](https://img.shields.io/badge/Angular-22+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-FCC72B?style=for-the-badge&logo=vitest&logoColor=black)](https://vitest.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

<video src="./public/assets/preview.mov" width="100%" controls autoplay loop muted playsinline style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></video>

<br/>

[🇧🇷 Português](#-sobre-o-projeto) &bull; [🇺🇸 English](#-about-the-project)

</div>

---

## 🇧🇷 Português

### 📖 Sobre o Projeto

O **Nextcent** é uma landing page voltada para plataformas de gerenciamento de comunidades, clubes e associações. O projeto foi construído para explorar recursos modernos do Angular, focando em componentização limpa, reatividade com Signals e estilização baseada em Design Tokens.

### ✨ Funcionalidades

- **Headerbar**: Barra de navegação com logotipo da marca, links rápidos e botão de Call-to-Action (CTA).
- **Hero Section**: Apresentação principal de alto impacto visual com texto de destaque e botão de registro.
- **Seção de Clientes**: Vitrine de logotipos de empresas e clientes parceiros.
- **Seção de Comunidade**: Cards modulares (`app-community-frame`) para apresentação de casos de uso (Clubes, Associações Nacionais, etc.).
- **Signal Inputs**: Utilização da nova API `input.required()` do Angular para passagem reativa e tipada de propriedades entre componentes.
- **Otimização de Imagens**: Uso de `NgOptimizedImage` (`ngSrc` / `fill`) para melhor desempenho de carregamento.
- **Design System com CSS Variables**: Tokens centralizados de cores primárias, secundárias, tons (*tints/shades*) e tipografia Inter em `src/styles.css`.

### 🛠️ Tecnologias Utilizadas

- **[Angular](https://angular.dev/)**: Componentes Standalone, Signals e Signal Inputs.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática e segurança no desenvolvimento.
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)**: Variáveis CSS (Design Tokens), Flexbox e layout responsivo.
- **[Vitest](https://vitest.dev/) & [jsdom](https://github.com/jsdom/jsdom)**: Execução rápida e moderna de testes unitários.
- **[Prettier](https://prettier.io/)**: Padronização e formatação consistente de código.

### 📁 Estrutura de Pastas

```text
nextcent/
├── public/                     # Arquivos públicos e estáticos
│   ├── assets/                 # Imagens da marca, hero, clientes e comunidade
│   └── favicon.ico
├── src/
│   ├── app.component.ts        # Componente raiz da aplicação
│   ├── main.ts                 # Bootstrap da aplicação Angular
│   ├── styles.css              # Estilos globais e tokens de cores CSS
│   ├── components/
│   │   ├── layout.component.ts # Estrutura geral de layout
│   │   ├── headerbar/          # Componente do cabeçalho de navegação
│   │   └── sections/
│   │       ├── hero/           # Hero Section com CTA
│   │       ├── clients/        # Seção de clientes parceiros
│   │       └── community/      # Seção e cards modulares de comunidade
│   └── services/
│       └── auth.service.ts     # Exemplo de serviço com Angular Signals
├── angular.json                # Configuração do Angular CLI
└── package.json                # Dependências e scripts do projeto
```

### 🚀 Como Executar Localmente

#### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- [npm](https://www.npmjs.com/)

#### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:tosuki/nextcent.git
   cd nextcent
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   # ou: ng serve
   ```

4. **Acesse no navegador:**
   Abra [http://localhost:4200/](http://localhost:4200/) para visualizar a aplicação.

### 🧪 Outros Scripts Disponíveis

- **Build de produção:**
  ```bash
  npm run build
  ```
- **Executar testes unitários:**
  ```bash
  npm test
  ```
- **Modo de desenvolvimento com watch:**
  ```bash
  npm run watch
  ```

---

## 🇺🇸 English

### 📖 About the Project

**Nextcent** is a landing page designed for community, club, and association management platforms. Built with modern Angular conventions, it highlights clean component architecture, reactivity with Signals, and a design token-driven style system inspired by the Nexcent Figma community template.

### ✨ Key Features

- **Navigation Headerbar**: Clean navbar with branding, navigational links, and a call-to-action button.
- **Hero Section**: High-converting section with value proposition and registration CTA.
- **Clients Section**: Partner logos showcase.
- **Community Management Showcase**: Reusable cards (`app-community-frame`) displaying platform capabilities.
- **Signal Inputs**: Powered by Angular's modern `input.required()` API for type-safe reactive inputs.
- **Image Optimization**: Utilizes `NgOptimizedImage` (`ngSrc` / `fill`) for enhanced core web vitals and fast loading.
- **Design Tokens**: Standardized color palette (primary green shades, tints, and neutrals) configured in `src/styles.css`.

### 🛠️ Tech Stack

- **[Angular](https://angular.dev/)** (Standalone Components, Signals & Signal Inputs)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)** (Custom Properties & Flexbox)
- **[Vitest](https://vitest.dev/) & [jsdom](https://github.com/jsdom/jsdom)** (Unit testing)
- **[Prettier](https://prettier.io/)** (Code formatting)

### 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone git@github.com:tosuki/nextcent.git
   cd nextcent
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   Navigate to [http://localhost:4200/](http://localhost:4200/).

---

## 👤 Autor

Desenvolvido por **[tosuki](https://github.com/tosuki)**.