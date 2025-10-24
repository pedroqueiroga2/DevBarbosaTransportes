# DevBarbosaTransportes

# Barbosa Transportes — Landing Page

Projeto de landing page simples para a empresa Barbosa Transportes, construída com HTML, SCSS/CSS e JavaScript. O site é responsivo, usa animações AOS e integrações com WhatsApp e redes sociais.

Principais recursos
- Estrutura: header com logo, links e ícones; hero (call-to-action); seções About e Services; footer com redes sociais e botão flutuante do WhatsApp.
- Responsividade: menu móvel com toggle (☰ / ✖) e layout adaptado por media queries.
- Estilização: SCSS modular (partials) compilado para style.css.
- Animações: AOS (Animate On Scroll).
- Integração: links diretos para WhatsApp, Instagram e Facebook; botões de contato para orçamento.

Arquivos importantes
- [index.html](c:\DevBarbosaTransportes\index.html) — marcação principal.
- [style.scss](c:\DevBarbosaTransportes\style.scss) — ponto de entrada SCSS.
- [style.css](c:\DevBarbosaTransportes\style.css) — CSS compilado usado pela página.
- [js/script.js](c:\DevBarbosaTransportes\js\script.js) — lógica do menu móvel e comportamento de links.
- Partials SCSS:
  - [partials/_header.scss](c:\DevBarbosaTransportes\partials\_header.scss)
  - [partials/_layout.scss](c:\DevBarbosaTransportes\partials\_layout.scss)
  - [partials/_footer.scss](c:\DevBarbosaTransportes\partials\_footer.scss)
  - [partials/_colors.scss](c:\DevBarbosaTransportes\partials\_colors.scss)
- Assets: pasta `assets/` com logos, imagens e ícone do WhatsApp (referenciado em `index.html`).

Como rodar / desenvolver localmente
1. Abrir `index.html` no navegador para testar estático.
2. Se editar SCSS, compilar para CSS (exemplo com Dart Sass):
   - Windows (com sass instalado globalmente): 
     - sass style.scss style.css --no-source-map
   - Ou via npx:
     - npx sass style.scss style.css --no-source-map
3. Alterações em `js/script.js` são aplicadas ao recarregar a página.

Pontos a observar / sugestões rápidas
- O SCSS é modularizado em partials; mantenha o import em `style.scss`.
- `style.css` contém o CSS final; se fizer build automático, remova sourcemaps ou atualize o link no `index.html`.
- Valide acessibilidade dos links (ex.: botões com <a> dentro de <button> podem ser revisados).
- Para ambiente de produção, comprimir CSS/JS e otimizar imagens em `assets/`.

Referências no projeto
- AOS: incluído via CDN em [index.html](c:\DevBarbosaTransportes\index.html)
- Font Awesome e Google Fonts: incluídos via CDN em [index.html](c:\DevBarbosaTransportes\index.html)

# English version

# Barbosa Transportes — Landing Page

Simple landing page project for Barbosa Transportes, built with HTML, SCSS/CSS and JavaScript. The site is responsive, uses AOS animations and includes WhatsApp and social media links.

Main features
- Structure: header with logo, links and icons; hero (call-to-action); About and Services sections; footer with social links and a floating WhatsApp button.
- Responsiveness: mobile menu toggle (☰ / ✖) and layout adapted with media queries.
- Styling: modular SCSS (partials) compiled to style.css.
- Animations: AOS (Animate On Scroll).
- Integrations: direct links to WhatsApp, Instagram and Facebook; contact buttons for quotes.

Important files
- [index.html](c:\DevBarbosaTransportes\index.html) — main markup.
- [style.scss](c:\DevBarbosaTransportes\style.scss) — SCSS entry point.
- [style.css](c:\DevBarbosaTransportes\style.css) — compiled CSS used by the page.
- [js/script.js](c:\DevBarbosaTransportes\js\script.js) — mobile menu logic and link behavior.
- SCSS partials:
  - [partials/_header.scss](c:\DevBarbosaTransportes\partials\_header.scss)
  - [partials/_layout.scss](c:\DevBarbosaTransportes\partials\_layout.scss)
  - [partials/_footer.scss](c:\DevBarbosaTransportes\partials\_footer.scss)
  - [partials/_colors.scss](c:\DevBarbosaTransportes\partials\_colors.scss)
- Assets: `assets/` folder with logos, images and the WhatsApp icon (referenced in `index.html`).

How to run / develop locally
1. Open `index.html` in the browser for a static preview.
2. If you edit SCSS, compile to CSS (example with Dart Sass):
   - Windows (with sass installed globally):
     - sass style.scss style.css --no-source-map
   - Or via npx:
     - npx sass style.scss style.css --no-source-map
3. Changes in `js/script.js` apply after reloading the page.

Notes / quick suggestions
- SCSS is modularized into partials; keep imports in `style.scss`.
- `style.css` contains the final CSS; for automated builds, remove source maps or update the link in `index.html`.
- Check link accessibility (e.g., avoid placing <a> inside <button>).
- For production, minify CSS/JS and optimize images in `assets/`.

References in the project
- AOS: included via CDN in [index.html](c:\DevBarbosaTransportes\index.html)
- Font Awesome and Google Fonts: included via CDN in [index.html](c:\DevBarbosaTransportes\index.html)

