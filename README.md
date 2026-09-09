# gmc.dev.br

Site público de Gabriel Correa GMC: o portfólio e a página do
[GMC Optimizer](https://apps.microsoft.com/detail/9nkqdn81q3d5), utilitário
gratuito para Windows publicado na Microsoft Store.

Astro 5, saída estática, sem dependência de runtime e sem requisição a
domínio de terceiro. Fontes, ícones e imagens são servidos pelo próprio site.

## Rodar

```bash
npm install
npm run dev
```

`npm run build` gera `dist/`. `npm run preview` serve o que foi gerado.

## Estrutura

| Caminho | O que é |
|---|---|
| `src/pages/` | rotas: `/`, `/gmcoptimizer/`, termos, privacidade, 404, e as mesmas em `/en/` |
| `src/components/` | componentes de página e de seção |
| `src/i18n/locales/` | **todo o texto do site**, em `pt.json` e `en.json` |
| `src/data/product.ts` | versão, URL da Store e os números do produto |
| `src/styles/global.css` | tokens e estilos, arquivo único |
| `public/` | fontes, capturas, ícones, `CNAME`, `robots.txt`, `.nojekyll` |
| `.claude/skills/gmc-web-design/` | identidade visual e regras de conteúdo |

## Idiomas

Português é o padrão e não tem prefixo. Inglês fica em `/en/`. São os dois
idiomas que o GMC Optimizer entrega, e o site não anuncia idioma que o app não
tem.

## URLs que não podem mudar

O app e o Partner Center da Microsoft Store apontam para:

- `https://gmc.dev.br/gmcoptimizer/terms.html`
- `https://gmc.dev.br/gmcoptimizer/privacy.html`

Por isso `astro.config.mjs` usa `build: { format: 'preserve' }`. Alterar isso
quebra os links legais publicados na Store.

## Publicação

Push na `main` dispara `.github/workflows/deploy.yml`, que compila e publica no
GitHub Pages. A origem do Pages precisa estar configurada como **GitHub
Actions** nas configurações do repositório.

`public/.nojekyll` é obrigatório: sem ele o Pages descarta `dist/_astro/` e o
site sai sem CSS.

## Ao atualizar o produto

1. `src/data/product.ts`: versão e números.
2. `src/i18n/locales/*.json`: a seção `release` e o que mudou nos recursos.
3. `public/gmcoptimizer/images/`: capturas novas, em português e em inglês.

A fonte da verdade para descrever o app são as fichas da Microsoft Store no
repositório do GMC Optimizer, não o README daquele projeto.
