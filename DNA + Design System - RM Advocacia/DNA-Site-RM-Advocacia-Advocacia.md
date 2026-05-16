# SITE DNA — RM ADVOCACIA

**Nicho:** Advocacia Generalista de Alto Volume — Direito Penal (plantão 24h), INSS/Previdenciário, Civil, Família, Consumidor e Mandados de Segurança, com base em Campo Grande/Zona Oeste RJ e cobertura online nacional.

**Posicionamento:** Escritório com autoridade consolidada por 20+ anos de atuação, comunicando seriedade e abrangência para uma audiência de classe média urbana periférica que enfrenta situações de urgência real (preso em flagrante, benefício negado, divórcio litigioso). O diferencial cromático é a paleta Vermelho-Ouro em vez do azul-marinho jurídico convencional — transmite força combativa (vermelho) com prestígio e tradição (dourado), uma linguagem visual de "defesa ativa" que contrasta com escritórios que comunicam apenas "confiança passiva".

**Data de criação:** 2025

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função Específica no Layout |
|---|---|---|
| `--color-primary` | `#DC2626` | COR PRIMÁRIA — hero overlay gradient start, botões `.btn-primary` + `.btn-cta`, timeline dots, gradient dos ícones SVG, social hover BG |
| `--color-primary-dark` | `#991B1B` | Select options BG no dark form, reserva para hover de alta intensidade |
| `--color-primary-light` | `#FCA5A5` | Reserva decorativa — não aplicada extensivamente no layout atual |
| `--color-secondary` | `#C19A6B` | ACENTO DOURADO — nav underline hover, gradient dos ícones (100%), badge dot, `.btn-secondary` border, `.title-decoration`, `.footer-title::after`, `.timeline-content border-left`, `.footer-coverage border-left`, `--shadow-glow` |
| `--color-accent` | `#B8860B` | Reserva para uso eventual em estados de destaque dourado intenso |
| `--color-white` | `#FFFFFF` | BG header, BG `.sobre`, BG `.faq`, BG `.area-card`, texto hero, `.btn-submit` BG |
| `--color-black` | `#1A1A1A` | BG footer — quase-preto quente, não é preto puro |
| `--color-gray-50` | `#F9FAFB` | BG `.areas`, BG FAQ hover/resposta, alternância de `.timeline-content` ímpar |
| `--color-gray-100` | `#F3F4F6` | Reserva para estados de fundo suave |
| `--color-gray-200` | `#E5E7EB` | Bordas de `.area-card`, `border-bottom .faq-item`, `border-top .footer-bottom` |
| `--color-gray-300` | `#D1D5DB` | Footer links cor padrão, `.footer-contact a` |
| `--color-gray-500` | `#6B7280` | `.faq-icon` cor padrão (antes de ativo), body texto médio |
| `--color-gray-700` | `#374151` | Cor padrão do `body`, nav links, `.menu-toggle span`, `.sobre-list li` |
| `--color-gray-900` | `#111827` | H2 `.section-title`, H3 `.area-title`, H3 `.timeline-content h3`, `.faq-question` |
| `#25D366` | `#25D366` | BG `.whatsapp-float` — verde WhatsApp oficial, único verde na interface |

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| Body base | `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` | 400 | `clamp(1rem, 1.5vw, 1.125rem)` | `line-height: 1.6`, cor `--color-gray-700` |
| Hero Title (H1) | `'Playfair Display', Georgia, serif` | 800 | `clamp(2.5rem, 8vw, 5.5rem)` | `line-height: 1.1`, cor `--color-white`, texto misto com `.highlight` |
| `.highlight` no H1 | `Playfair Display` (herda) | 800 | Herda | `background: linear-gradient(135deg, #DC2626, #C19A6B)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent` |
| Hero Subtitle | `Inter` | 400 | `clamp(1.125rem, 2vw, 1.25rem)` | `color: rgba(255,255,255,0.9)`, `max-width: 650px` |
| `.section-title` (H2) | `'Playfair Display', Georgia, serif` | 700 | `clamp(1.75rem, 4vw, 2.75rem)` | Cor `--color-gray-900`, `margin-bottom: var(--space-md)` |
| `.section-tag` (eyebrow) | `Inter` | 700 | `0.875rem` | `letter-spacing: 2px`, `text-transform: uppercase`, cor `--color-secondary` |
| `.cta-title` | `'Playfair Display', Georgia, serif` | 800 | `clamp(2rem, 5vw, 3.5rem)` | Cor `--color-white`, `text-align: center` |
| `.area-title` (H3) | `Inter` | 700 | `1.25rem` | Cor `--color-gray-900` |
| `.timeline-content h3` | `Inter` | 700 | `1.5rem` | Cor `--color-gray-900` |
| `.timeline-number` | `Inter` | 700 | `1.5rem` | Cor `--color-white` (dentro do dot gradiente) |
| `.timeline-highlight` | `Inter` | 600 | `clamp(1.125rem, 2vw, 1.25rem)` | Cor `--color-gray-600` |
| `.faq-question` | `Inter` | 600 | `1.125rem` | Cor `--color-gray-900` |
| `.hero-badge` span | `Inter` | 400 | `0.875rem` | Cor `--color-white` |
| `.proof-badge` | `Inter` | 600 | `0.875rem` | Cor `--color-white` |
| `.footer-title` | `Inter` | 600 | `1.125rem` | Cor `--color-white`, `padding-bottom: 0.75rem` com `::after` dourado |
| Footer links/body | `Inter` | 400 | `0.875rem` | Cor `--color-gray-300` |
| `.form-disclaimer` | `Inter` | 400 | `0.875rem` | `color: rgba(255,255,255,0.8)` |
| `.mobile-nav-link` | `Inter` | 600 | `clamp(1.5rem, 3vw, 2rem)` | Cor `--color-white` → `--color-secondary` no hover |

### Estilo Geral

Arquitetura visual **Crimson & Gold Editorial** — desvia do eixo azul/cinza do mercado jurídico por meio de uma dualidade cromática Vermelho `#DC2626` (urgência, combatividade) e Dourado `#C19A6B` (prestígio, tradição), implementada via `linear-gradient(135deg, #DC2626, #C19A6B)` em todas as superfícies de destaque — do hero overlay aos ícones SVG (via `linearGradient` inline) e ao botão CTA da navbar; a tipografia híbrida `Playfair Display` (serifada Display para H1/H2/H3 de seção) + `Inter` (grotesca moderna para corpo, labels e botões) cria tensão visual deliberada entre autoridade histórica e eficiência contemporânea; o sistema de animações `reveal + IntersectionObserver` com `opacity: 0 → 1` e `translateY(30px → 0)` em `800ms ease` garante fluidez de entrada progressiva sem dependência de biblioteca externa; a navbar aplica smart scroll bidirecional (`translateY(-100%)` ao rolar para baixo, `translateY(0)` ao reverter) — comportamento atípico no mercado jurídico local que sinaliza sofisticação técnica ao usuário.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — Navbar (Header Fixo com Smart Scroll)

**Estrutura:** `position: fixed; top: 0; left: 0; right: 0; z-index: 1000`; `.header-content` flexbox `justify-content: space-between; align-items: center`; `max-width: 1200px`; `height: 80px` desktop / `70px` mobile; `.nav` com `gap: 4rem`.

**Fundo:** Estado padrão: `background: --color-white` opaco (sem blur). Estado `.scrolled` (>50px scroll): `background: rgba(255,255,255,0.95)` + `backdrop-filter: blur(10px)` + `box-shadow: var(--shadow-md)`.

**Elementos Restritos:** Logo `height: 50px` à esquerda; `.nav` com 4 links + `.btn-cta` à direita (ocultado em `<768px`); hamburguer `.menu-toggle` (3 barras `2px × 100%` com `gap: 6px`) visível apenas em `<768px`.

**Animação — Smart Scroll Bidirecional:** JS monitora `lastScroll` vs `currentScroll`. Se scrollando para baixo E `currentScroll > 100px`: adiciona `.header-hidden` (`transform: translateY(-100%)`). Se scrollando para cima OU no topo: remove `.header-hidden`. Transição: `transform var(--transition-base)` = `300ms cubic-bezier(0.4, 0, 0.2, 1)`.

**Micro-interações:** `.nav-link`: `color: --color-gray-700 → --color-primary` em `150ms`. Sublinhado animado via `::after` `width: 0 → 100%` em `300ms` com `background: --color-secondary` e `height: 2px; bottom: -4px`. `.btn-cta` (navbar): `background: linear-gradient(135deg, #DC2626, #C19A6B)` → hover: `transform: translateY(-2px)` + `box-shadow: var(--shadow-lg)`. Menu mobile toggle: barra 1 `rotate(45deg) translateY(8px)`, barra 2 `opacity: 0`, barra 3 `rotate(-45deg) translateY(-8px)`.

**Diferenciador Visual:** O smart scroll bidirecional (navbar que se esconde ao descer e reaparece ao subir) é incomum em LPs jurídicas — maximiza área de leitura em scroll descendente mantendo acesso ao menu em scroll ascendente, comportamento mais comum em apps e e-commerces premium.

---

### SEÇÃO 2 — Hero (Fullscreen Dark com Overlay Gradiente)

**Estrutura:** `position: relative; min-height: 600px; display: flex; align-items: center; justify-content: center`; padding `var(--space-2xl) var(--space-lg)`; `margin-top: 80px`; `.hero-content` centralizado com `max-width: 900px; text-align: center`.

**Fundo:** Tripla camada: (1) `.hero-background`: imagem de fundo Unsplash (`photo-1589829545856`) com `background-size: cover; filter: grayscale(30%); z-index: 1`. (2) `.hero-overlay`: `linear-gradient(135deg, rgba(26,26,26,0.85) 0%, rgba(220,38,38,0.5) 100%); z-index: 2`. (3) Dois `.hero-decorative-circle` — blobs circulares com `border-radius: 50%; background: linear-gradient(135deg, #DC2626, #C19A6B); opacity: 0.15; filter: blur(80px); z-index: 3` — círculo 1: `400×400px top:10% right:10%`, círculo 2: `300×300px bottom:10% left:10% animation-delay: 2s`.

**Elementos Restritos:** `.hero-badge`: pill glass `background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(193,154,107,0.3); border-radius: 9999px` com `.badge-dot` pulsante. H1 com `.highlight` em gradient clip. Subtítulo `max-width: 650px margin: 0 auto`. `.hero-ctas`: flex row centralizado com gap `1.5rem` (coluna em `<768px`). `.hero-proof`: 2 `.proof-badge` glass com ícones SVG e textos de autoridade. `.scroll-indicator` posicionado `bottom: 40px; left: 50%` com `.mouse-icon` animado.

**Animação:** `.hero-badge`, `.hero-title`, `.hero-subtitle` e `.hero-proof` recebem `.reveal` (IntersectionObserver). `.hero-decorative-circle`: `animation: float 8s ease-in-out infinite` (keyframe: `translateY(0) → translateY(-20px) → translateY(0)`). `.hero-badge`: `animation: pulse 3s ease-in-out infinite` (box-shadow pulsante via `rgba(var(--secondary-rgb), 0.3)` → `0.6`). `.badge-dot`: `animation: pulse 2s ease-in-out infinite`. `.benefit-item`: entrada escalonada via JS `setTimeout(200ms * index)`.

**Micro-interações:** `.btn-primary`: hover `transform: translateY(-4px)` + `box-shadow: --shadow-2xl` em `300ms`. `.btn-secondary`: hover `background: rgba(193,154,107,0.1)` + `transform: scale(1.02)`. `.scroll-indicator`: fade out via JS quando `scroll > 100px`.

**Diferenciador Visual:** O gradient de overlay `rgba(26,26,26,0.85) → rgba(220,38,38,0.5)` cria uma transição do preto absoluto para vermelho translúcido — o usuário "sente" o vermelho sem vê-lo como cor sólida, gerando impacto emocional subliminar de urgência que não obstrui a leitura do texto branco.

---

### SEÇÃO 3 — Áreas de Atuação (Grade de Cards)

**Estrutura:** `background: --color-gray-50; padding: var(--section-padding) 0` = `clamp(4rem, 10vh, 8rem)`; `.areas-grid`: `grid-template-columns: repeat(3, 1fr)` desktop → `repeat(2, 1fr)` tablet (≤1024px) → `1fr` mobile (≤640px); `gap: var(--space-xl)` = `3rem`.

**Fundo:** `--color-gray-50 #F9FAFB` — cinza claríssimo, cria separação visual do hero escuro.

**Elementos Restritos:** `.section-header` centralizado com `.section-tag` + H2 + `.title-decoration` (barra `80px × 3px` cor `--color-secondary`, `margin: 0 auto`). 6 `.area-card` idênticos na estrutura: ícone SVG `64×64px` com `linearGradient` inline (`#DC2626 → #C19A6B`) + H3 + parágrafo. Todos `text-align: center; padding: var(--space-2xl)`; `border: 1px solid --color-gray-200; border-radius: var(--radius-xl)`.

**Animação:** Cards recebem `.reveal` (IntersectionObserver — `threshold: 0.1; rootMargin: 0px 0px -50px 0px`). Entrada: `opacity: 0; translateY(30px)` → `opacity: 1; translateY(0)` em `800ms ease`.

**Micro-interações:** `.area-card:hover`: `transform: translateY(-8px)` + `border-color: --color-secondary` + `box-shadow: var(--shadow-xl)` em `300ms cubic-bezier(0.4, 0, 0.2, 1)`.

**Diferenciador Visual:** Ícones SVG com `linearGradient` inline referenciado por `stroke="url(#gradientN)"` — cada card carrega seu próprio `<defs>` com gradiente `#DC2626 → #C19A6B`, tornando cada ícone uma miniatura da identidade cromática da marca em vez de ícones monocromáticos genéricos.

---

### SEÇÃO 4 — Sobre / Autoridade

**Estrutura:** `background: --color-white; padding: var(--section-padding) 0`; `.sobre-grid`: `grid-template-columns: 40% 60%; gap: var(--space-3xl); align-items: center`. Mobile (≤1024px): `grid-template-columns: 1fr; gap: var(--space-2xl)`.

**Fundo:** Branco puro — contraste com o cinza da seção anterior.

**Elementos Restritos:** Col esquerda (40%): `.about-image` com `border-radius: var(--radius-2xl)` = `1.5rem` + `box-shadow: var(--shadow-2xl)` + `border: 4px solid var(--color-primary)` — borda vermelha sólida na imagem. Col direita (60%): `.section-tag` alinhado à esquerda + H2 alinhado à esquerda + 3 parágrafos `line-height: 1.8`.

**Animação:** `.about-image` e `.sobre-text` recebem `.reveal`.

**Micro-interações:** Nenhuma interação direta. A borda vermelha `4px solid #DC2626` na foto é o único elemento de destaque ativo da seção.

**Diferenciador Visual:** Grid assimétrico `40% / 60%` com imagem menor que o texto — inversão da convenção "foto grande de autoridade = foto maior que o texto". A borda colorida `4px solid --color-primary` na imagem substitui a moldura decorativa genérica por um elemento que ancora a foto na paleta da marca.

---

### SEÇÃO 5 — Diferenciais (Timeline Vertical)

**Estrutura:** `background: --color-gray-50; padding: var(--section-padding) 0`; `.timeline`: `position: relative; max-width: 800px; margin: 0 auto`. Linha vertical via `::before`: `position: absolute; left: 30px; top: 0; bottom: 0; width: 4px; background: --color-secondary`. Cada `.timeline-item`: `position: relative; padding-left: 100px; margin-bottom: var(--space-3xl)`.

**Fundo:** `--color-gray-50` — mesmo tom da seção de áreas, cria agrupamento visual.

**Elementos Restritos:** `.timeline-dot`: `position: absolute; left: 0; top: 0; width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #DC2626, #C19A6B); box-shadow: var(--shadow-lg)` com número centralizado branco `font-size: 1.5rem; font-weight: 700`. `.timeline-content`: `padding: var(--space-xl); border-radius: var(--radius-xl); border-left: 4px solid --color-secondary`. Alternância de fundo: item ímpar `--color-gray-50`, item par `--color-white`. Ícone SVG `40×40px` com `stroke: --color-secondary` acima do H3.

**Animação:** Cada `.timeline-item` recebe `.reveal`.

**Micro-interações:** Nenhuma nos itens — seção estática. A linha vertical e os dots são puramente visuais.

**Diferenciador Visual:** A timeline vertical com linha contínua `4px` dourada ancorada em `left: 30px` cria uma narrativa cronológica visual que substitui o padrão de "grid de ícones de 4 diferenciais" — o formato de linha do tempo implica progressão e história acumulada, reforçando a autoridade dos 20+ anos de atuação.

---

### SEÇÃO 6 — FAQ (Accordion Minimalista)

**Estrutura:** `background: --color-white; padding: var(--section-padding) 0`; `.faq-list`: `max-width: 800px; margin: 0 auto`; itens empilhados verticalmente sem wrapper de grid.

**Fundo:** Branco puro.

**Elementos Restritos:** 6 `.faq-item` com `border-bottom: 1px solid --color-gray-200` (sem border nas laterais e topo — visual de lista limpa). `.faq-question`: `padding: var(--space-lg); display: flex; justify-content: space-between` com span de texto e `.faq-icon` (seta SVG `24×24px`). `.faq-answer p`: `padding: var(--space-lg); background: --color-gray-50; line-height: 1.8`.

**Animação:** `.faq-answer`: `max-height: 0 → scrollHeight px` via JS (não CSS fixo — usa `answer.scrollHeight` real). Seta `.faq-icon`: `transform: rotate(180deg)` quando `.faq-item.active`, em `var(--transition-base)` = `300ms`. Exclusividade: JS fecha todos os outros items ao abrir um novo.

**Micro-interações:** `.faq-question:hover`: `background: --color-gray-50`. `.faq-item.active .faq-question`: `border-left: 4px solid --color-secondary` — indicador lateral dourado aparece no item ativo. `.faq-item.active .faq-icon`: `stroke: --color-secondary` (muda cor da seta de cinza para dourado).

**Diferenciador Visual:** O accordion sem border box (apenas `border-bottom`) cria uma leitura de "lista de artigos" em vez de "componente de UI" — combinado com a `border-left: 4px solid --color-secondary` que aparece apenas no item ativo, cria um indicador de seleção editorial que é mais refinado que o padrão de background colorido ou borda completa.

---

### SEÇÃO 7 — CTA Final + Formulário (Dark Gradient Animado)

**Estrutura:** `position: relative; padding: var(--section-padding) 0; background: linear-gradient(135deg, #DC2626 0%, #C19A6B 100%); background-size: 200% 200%; animation: gradient-shift 8s ease infinite; overflow: hidden`. Layout interno: `.cta-form` com `max-width: 700px; margin: 0 auto`. Formulário: grid interno `.form-row` com `grid-template-columns: repeat(2, 1fr); gap: var(--space-md)` (1 coluna em ≤768px).

**Fundo:** Gradiente animado `gradient-shift` (keyframe: `background-position: 0% 50% → 100% 50% → 0% 50%` em `8s ease infinite`) cria movimento sutil no fundo. 3 `.cta-decorative-circle` com `background: rgba(255,255,255,0.1); animation: float 8s ease-in-out infinite` em posições absolutas: círculo 1 `300×300px top:-100px left:-100px`, círculo 2 `400×400px top:50% right:-150px delay:2s`, círculo 3 `250×250px bottom:-80px left:30% delay:4s`.

**Elementos Restritos:** H2 centralizado branco + subtítulo `rgba(255,255,255,0.95)`. Form com inputs glass: `border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); color: white`. `.btn-submit`: `background: --color-white; color: --color-primary; border-radius: var(--radius-xl); padding: 1.25rem 2rem; font-weight: 700`. `.cta-contact-options`: 3 `.contact-option` glass (WhatsApp, telefone, e-mail) em flex row. `.cta-proof`: linha de selos com ícones SVG inline.

**Animação:** `.cta-title` e `.cta-subtitle` recebem `.reveal`. Gradiente de fundo em loop contínuo `gradient-shift 8s`. Decorative circles: `float 8s ease-in-out infinite` com delays escalonados.

**Micro-interações:** Inputs focus: `border-color: --color-white; background: rgba(255,255,255,0.25); box-shadow: 0 0 0 4px rgba(255,255,255,0.1)`. `.btn-submit:hover`: `transform: translateY(-3px)` + `box-shadow: --shadow-2xl`. `.btn-submit:active`: `transform: translateY(0)`. `.contact-option:hover`: `background: rgba(255,255,255,0.25)` + `border-color: rgba(255,255,255,0.5)` + `transform: translateY(-2px)`. Submit envia via `FormSubmit.co` (fetch POST JSON) e redireciona para WhatsApp após `2s` com mensagem pré-formatada.

**Diferenciador Visual:** O gradiente de fundo animado (`gradient-shift 8s`) é uma aplicação incomum em LPs jurídicas — o movimento contínuo cria urgência ambiental sem usar elementos visuais agressivos, funcionando como um "campo energético" que mantém o usuário em estado de atenção elevada enquanto preenche o formulário.

---

### SEÇÃO 8 — Footer (Dark Multi-coluna)

**Estrutura:** `background: --color-black (#1A1A1A); padding: 32px 0 24px; border-top: 1px solid rgba(255,255,255,0.1)`; `.footer-grid`: `grid-template-columns: 1.2fr 0.8fr 1.2fr 1.2fr; gap: var(--space-xl)` → `repeat(2,1fr)` tablet (≤1024px) → `1fr` mobile (≤640px).

**Fundo:** `#1A1A1A` — quase-preto quente (não é `#000000`), continuidade visual com o footer escuro padrão de escritórios de prestígio.

**Elementos Restritos:** Col 1 (1.2fr): logo `max-width: 120px` + texto descritivo + social icons. Col 2 (0.8fr): links de navegação. Col 3 (1.2fr): links de especialidades. Col 4 (1.2fr): contato com ícones `fill: --color-secondary` + `.footer-coverage` (caixa `background: rgba(193,154,107,0.1); border-left: 3px solid --color-secondary`). `.footer-title::after`: barra `40px × 2px; background: --color-secondary` posicionada `bottom: 0; left: 0`. `.footer-bottom`: `border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px`.

**Animação:** Nenhuma.

**Micro-interações:** `.footer-social a`: `width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1)` → hover: `background: --color-primary; color: --color-white; transform: translateY(-3px)` em `300ms`. `.footer-links a` e `.footer-contact a`: hover `color: --color-secondary` + `transform: translateX(4px)` em `150ms` — slide horizontal sutil para direita.

**Diferenciador Visual:** Os links do footer com `transform: translateX(4px)` no hover criam um micro-deslizamento horizontal que reforça a ideia de "avançar para o destino" — mais sofisticado que o simples `color change` e incomum no mercado jurídico local.

---

### ELEMENTO FLUTUANTE — WhatsApp Button

**Estrutura:** `position: fixed; bottom: 24px; right: 24px; z-index: 1000; width: 64px; height: 64px; border-radius: 50%; background: #25D366`.

**Animação:** `animation: pulse-whatsapp 2s infinite` — keyframe: `box-shadow: 0 4px 12px rgba(37,211,102,0.4)` → `0 4px 20px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.2)` — cria anel de luz expansivo pulsante (diferente do bounce do Lopes e Szaz; aqui é glow radial).

**Micro-interações:** Hover: `transform: scale(1.1)` + `box-shadow: 0 6px 20px rgba(37,211,102,0.6)` em `300ms`. Mobile (≤768px): reduz para `56×56px` com ícone `32×32px`.

---

### ELEMENTO — Menu Mobile Full-Screen

**Estrutura:** `position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.95); z-index: 999; display: flex; align-items: center; justify-content: center`. Padrão de entrada: `opacity: 0; visibility: hidden` → `.active`: `opacity: 1; visibility: visible` em `300ms`.

**Diferenciador Visual:** Menu fullscreen preto opaco (95%) que cobre toda a viewport — diferente do menu lateral deslizante ou dropdown padrão. Os links `.mobile-nav-link` em `clamp(1.5rem, 3vw, 2rem)` centralizado criam uma experiência de "pausa" que força foco na navegação.

---

## COMPONENTES REUTILIZÁVEIS

### Botões

```css
/* CTA NAVBAR */
.btn-cta {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #DC2626, #C19A6B);
  color: #ffffff;
  border-radius: 0.75rem; /* --radius-lg */
  font-weight: 600;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 2rem;
}
.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
}

/* PRIMÁRIO (HERO) */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #DC2626, #C19A6B);
  color: #ffffff;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 1rem; /* --radius-xl */
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
}
.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

/* SECUNDÁRIO (HERO OUTLINE) */
.btn-secondary {
  padding: 1.25rem 2.5rem;
  background: transparent;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.125rem;
  border: 2px solid #C19A6B;
  border-radius: 1rem;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-secondary:hover {
  background: rgba(193, 154, 107, 0.1);
  transform: scale(1.02);
}

/* SUBMIT (FORMULÁRIO DARK) */
.btn-submit {
  width: 100%;
  padding: 1.25rem 2rem;
  background: #ffffff;
  color: #DC2626;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}
.btn-submit:active {
  transform: translateY(0);
}
```

---

### Inputs e Formulário (Dark Glass)

```css
/* Contexto: seção com fundo gradiente vermelho-dourado */
.cta-form input,
.cta-form select,
.cta-form textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem; /* --radius-lg */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: #ffffff;
  font-size: 1rem;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.cta-form input::placeholder,
.cta-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.cta-form input:focus,
.cta-form select:focus,
.cta-form textarea:focus {
  outline: none;
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}
/* Select dark */
.cta-form select option {
  background: #991B1B; /* --color-primary-dark */
  color: #ffffff;
}
```

---

### Cards de Áreas (Area Card)

```css
.area-card {
  background: #ffffff;
  padding: 2rem; /* --space-2xl */
  border: 1px solid #E5E7EB; /* --color-gray-200 */
  border-radius: 1rem; /* --radius-xl */
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
}
.area-card:hover {
  transform: translateY(-8px);
  border-color: #C19A6B; /* --color-secondary */
  box-shadow: 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
}
/* Ícone com gradient inline no SVG */
/* Cada card usa linearGradient id único: gradient1...gradient6 */
/* stroke="url(#gradientN)" aplica o gradient no traço SVG */
.area-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 2rem; /* --space-lg */
}
```

---

### Timeline Component

```css
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #C19A6B; /* --color-secondary */
}
.timeline-dot {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #DC2626, #C19A6B);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
}
.timeline-content {
  padding: 3rem; /* --space-xl */
  border-radius: 1rem; /* --radius-xl */
  border-left: 4px solid #C19A6B;
}
/* Alternância de fundo por nth-child */
.timeline-item:nth-child(even) .timeline-content { background: #ffffff; }
.timeline-item:nth-child(odd) .timeline-content  { background: #F9FAFB; }
```

---

### Contact Options (CTA Glass Pills)

```css
.contact-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem; /* --radius-lg */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.contact-option:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}
```

---

### Scroll Reveal System

```css
/* CSS */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```
```js
// JS — IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target); // dispara 1x, não repete
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Navbar estática que permanece visível o tempo todo durante o scroll** — substituída por um sistema de smart scroll bidirecional: a navbar se oculta (`translateY(-100%)`) quando o usuário rola para baixo (após 100px), liberando área de leitura, e reaparece imediatamente ao rolar para cima — comportamento típico de apps premium e e-commerces sofisticados que é incomum no mercado jurídico local, sinalizando cuidado técnico.

❌ **2. Paleta Azul-Marinho + Cinza como sinônimo de "seriedade jurídica"** — substituída pela dualidade Vermelho `#DC2626` (urgência, combatividade) + Dourado `#C19A6B` (prestígio, tradição), aplicada como `linear-gradient(135deg)` em todos os pontos de ênfase. O escritório se destaca em 100% das SERPs locais que exibem concorrentes em azul/cinza.

❌ **3. Hero com fundo branco/cinza e foto da fachada do escritório ou stock genérico de toga** — substituído por hero fullscreen com foto de ambiente jurídico + tripla camada de fundo: imagem em `grayscale(30%)` → overlay `rgba(#1A1A1A, 0.85) → rgba(#DC2626, 0.5)` → blobs circulares animados com `filter: blur(80px)`. O resultado é imersivo e cinematográfico.

❌ **4. Seção "Diferenciais" com grid de 4 ícones idênticos e texto em coluna** — substituída por uma timeline vertical com linha contínua `4px` dourada, dots circulares numerados com gradient `#DC2626 → #C19A6B` e cards com `border-left: 4px solid --color-secondary`. O formato de linha do tempo comunica narrativa temporal acumulada em vez de lista estática de atributos.

❌ **5. Formulário de contato que envia apenas por e-mail com prazo de retorno de 24-48h** — substituído por sistema dual: (1) envio via `FormSubmit.co` com confirmação visual no botão (`"✓ Enviado com sucesso!"` + `background: #10b981`) e (2) após 2 segundos, abertura automática do WhatsApp com mensagem pré-formatada incluindo a área de interesse selecionada — converte o lead em conversa ativa imediatamente.

❌ **6. Menu mobile como drawer lateral ou dropdown simples** — substituído por overlay fullscreen `rgba(0,0,0,0.95)` que cobre 100% da viewport com links centralizados em fonte grande `clamp(1.5rem, 3vw, 2rem)` — cria uma experiência de pausa e foco total na navegação, eliminando qualquer distração visual da página por baixo.

❌ **7. Ícones de serviço monocromáticos em cinza ou azul genérico** — cada ícone SVG nas 6 áreas de atuação utiliza `stroke="url(#gradientN)"` com `<linearGradient>` embutido inline, aplicando o gradiente vermelho-dourado diretamente no traço do ícone. Isso torna cada ícone uma representação visual da identidade de marca em escala micro, criando coerência em todos os níveis do layout.

❌ **8. Seção de números de autoridade genéricos sem contexto verificável ("500 clientes", "98% satisfação")** — substituída por marcadores de autoridade com ancoragem real: data de fundação `19 de março de 2001` (verificável via OAB/registro), telefone de plantão 24h (verificável por qualquer usuário que ligue) e Schema.org `LegalService` com `foundingDate: "2001-03-19"` — credibilidade por especificidade rastreável, não por números redondos.
