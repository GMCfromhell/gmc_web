# GMC Gaming / GMC Optimizer - Site

Site institucional para apresentar o **GMC Optimizer** e hospedar Termos de Uso e Política de Privacidade (necessários para a Microsoft Store e para o próprio app).

## Estrutura

- **index.html** – Página inicial com apresentação do produto, screenshots e link para a Store
- **terms.html** – Termos de Uso
- **privacy.html** – Política de Privacidade
- **css/style.css** – Estilos (tema escuro, responsivo)
- **images/** – Screenshots do app (screenshot-home.png, screenshot-optimizers.png)

## Como usar localmente

Abra `index.html` no navegador ou use um servidor local, por exemplo:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Acesse `http://localhost:8000`.

## Publicação

Publicar o conteúdo em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, etc.) ou em um servidor web. Após publicar, anote a URL base do site (ex.: `https://seudominio.com`).

## URLs para o GMC Optimizer e Microsoft Store

Depois que o site estiver no ar, use estas URLs:

- **Termos de Uso:** `https://seudominio.com/terms.html`
- **Política de Privacidade:** `https://seudominio.com/privacy.html`

No projeto **GMC Optimizer**, atualize `lib/core/constants/app_constants.dart`:

```dart
static const String termsOfServiceUrl = 'https://seudominio.com/terms.html';
static const String privacyPolicyUrl = 'https://seudominio.com/privacy.html';
```

No **Partner Center** (Microsoft Store), informe as mesmas URLs na página do app (Política de Privacidade e Termos de Uso, quando solicitado).

## Screenshots

As imagens em `images/` são mockups de apresentação do app. Se quiser usar prints reais do GMC Optimizer, substitua:

- `images/screenshot-home.png` – Sugestão: tela inicial com o título e cards de otimizadores
- `images/screenshot-optimizers.png` – Sugestão: tela com a lista/grid de otimizadores

---

© 2026 Gabriel Correa GMC
