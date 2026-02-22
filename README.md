# gmc.dev.br

Site do desenvolvedor **Gabriel Correa** (gmc.dev.br). Home com apresentação e portfólio de projetos; cada aplicativo tem sua própria subpágina.

**Domínio:** [gmc.dev.br](https://gmc.dev.br)

## Estrutura do site

| URL | Conteúdo |
|-----|----------|
| **/** (index.html) | Home: apresentação “Desenvolvedor brasileiro” + lista de projetos |
| **/gmcoptimizer/** | Página do GMC Optimizer: produto, screenshots, link para Microsoft Store |
| **/gmcoptimizer/terms.html** | Termos de Uso do GMC Optimizer |
| **/gmcoptimizer/privacy.html** | Política de Privacidade do GMC Optimizer |

## Estrutura de pastas

```
/
├── index.html          # Home (apresentação + projetos)
├── css/
│   └── style.css       # Estilos globais
├── images/             # Imagens da home (opcional; hoje só GMC Optimizer tem imagens em gmcoptimizer/images)
├── gmcoptimizer/
│   ├── index.html      # Página do app
│   ├── terms.html
│   ├── privacy.html
│   └── images/
│       ├── screenshot-home.png
│       └── screenshot-configs.png
└── README.md
```

## Adicionar um novo projeto

1. Crie uma pasta em `/[nome-do-app]/` (ex.: `meuapp/`).
2. Coloque aí `index.html` (e, se precisar, termos e privacidade).
3. Na **home** (`index.html`), adicione um novo card no `.project-grid`:

```html
<a href="meuapp/index.html" class="project-card">
  <div class="project-card-inner">
    <span class="project-card-label">Plataforma · Categoria</span>
    <h3>Nome do App</h3>
    <p>Descrição curta.</p>
    <span class="project-card-cta">Ver projeto →</span>
  </div>
</a>
```

## URLs para o GMC Optimizer (app e Microsoft Store)

Depois de publicar o site em **gmc.dev.br**, use:

- **Termos de Uso:** `https://gmc.dev.br/gmcoptimizer/terms.html`
- **Política de Privacidade:** `https://gmc.dev.br/gmcoptimizer/privacy.html`

No projeto **GMC Optimizer** (Flutter), em `lib/core/constants/app_constants.dart`:

```dart
static const String termsOfServiceUrl = 'https://gmc.dev.br/gmcoptimizer/terms.html';
static const String privacyPolicyUrl = 'https://gmc.dev.br/gmcoptimizer/privacy.html';
```

No **Partner Center** (Microsoft Store), informe as mesmas URLs onde o app pede link de Termos e de Política de Privacidade.

## Publicação no gmc.dev.br

Envie o conteúdo da pasta do site para o host (FTP, painel de hospedagem ou deploy via Git, conforme o que o seu provedor oferecer). A raiz do domínio deve apontar para a pasta que contém `index.html`, `css/`, `gmcoptimizer/`, etc.

Para testar localmente com URLs relativas:

```bash
# Na pasta do site
python -m http.server 8000
# Acesse http://localhost:8000
```

---

© 2026 Gabriel Correa GMC
