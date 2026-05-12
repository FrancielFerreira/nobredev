# Nobredev Portfolio

Este é o meu portfólio pessoal, modernizado com **Tailwind CSS** e focado em apresentar minhas habilidades e projetos como Desenvolvedor Full Stack.

## 🚀 Tecnologias Utilizadas

- **HTML5** & **Tailwind CSS v3**
- **JavaScript (Vanilla)** para lógica de tema (Dark/Light mode)
- **Node.js & NPM** para gerenciamento de dependências e build do CSS
- **Inter Font** para tipografia moderna

## 🛠️ Como dar manutenção

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação
Após clonar o repositório ou abrir a pasta, instale as dependências:
```bash
npm install
```

### Desenvolvimento (Live Preview)
Para editar o projeto e ver as mudanças de estilo refletidas automaticamente no arquivo `assets/css/output.css`:
```bash
npm run dev
```
*Este comando ativa o modo "watch" do Tailwind, que monitora alterações nos seus arquivos HTML.*

### Build para Produção
Para gerar uma versão otimizada e minificada do CSS antes de subir para a Vercel/Produção:
```bash
npm run build
```

## 🌙 Sistema de Temas (Dark/Light)

O projeto utiliza a estratégia de classes do Tailwind (`darkMode: 'class'`). 
- O tema **Light** é o padrão.
- A lógica de persistência está no `head` (para evitar flashes de conteúdo branco) e no final do `body` do arquivo `index.html`.
- A preferência do usuário é salva no `localStorage` sob a chave `color-theme`.

## 📂 Estrutura de Pastas

- `index.html`: Arquivo principal contendo toda a estrutura e conteúdo.
- `src/input.css`: Arquivo de entrada do Tailwind onde estão as diretivas `@tailwind`.
- `assets/css/output.css`: CSS gerado pelo Tailwind (não editar manualmente).
- `assets/img/`: Pasta contendo todas as imagens e assets visuais.
- `tailwind.config.js`: Configurações de cores, fontes e caminhos de conteúdo do Tailwind.

## 📝 Notas de Projetos Específicos

- **World Automation Store**: Este card possui um placeholder cinza. Para atualizar, basta adicionar o print em `assets/img/` e atualizar a tag `<img>` no `index.html`.

---
*Mantido com ❤️ por Franciel Nobre (Nobredev)*
