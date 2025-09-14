# Olá Mundo – Demo Estilizada (Chrome Extension)

**Autor:** Mateus Dias ❤

Uma extensão de exemplo (Manifest V3) que mostra uma mensagem e um botão.
Ao clicar, o botão muda de cor e a mensagem alterna entre **“Olá, mundo!”** e **“Bem‑vindo!”**.
Projeto com foco em **acessibilidade**, **dark mode automático** e **animações suaves**.

---

## 🔧 Como instalar localmente (modo desenvolvedor)
1. Baixe o ZIP em [`dist/ola-mundo-ext-v1.1.3.zip`](dist/ola-mundo-ext-v1.1.3.zip) e **descompacte**.
2. Abra `chrome://extensions/` no Chrome.
3. Ative **Modo do desenvolvedor** (canto superior direito).
4. Clique em **Carregar sem compactação** e selecione a pasta **descompactada** (a que contém `manifest.json`).

> Para atualizar depois de editar, clique em **Recarregar** na página de extensões.

## 📦 Estrutura do projeto
```
.
├─ extension/        # código-fonte da extensão (Manifest V3)
│  ├─ manifest.json
│  ├─ popup.html
│  ├─ popup.css
│  ├─ popup.js
│  └─ icons/
│     ├─ 16.png
│     ├─ 32.png
│     ├─ 48.png
│     └─ 128.png
├─ docs/             # GitHub Pages (landing page + web demo)
│  ├─ index.html
│  └─ assets/
│     └─ icon-128.png
├─ dist/             # build empacotado (.zip) pronto para release
│  └─ ola-mundo-ext-v1.1.3.zip
├─ LICENSE           # MIT
└─ README.md
```

## 🌐 GitHub Pages (landing page)
Acesse a landing page: `https://<usuario>.github.io/<repo>/`

**Como ativar:**
- Vá em **Settings → Pages** do repositório.
- Em **Branch**, selecione **main** e a pasta **/docs**.
- Salve. Em alguns minutos a página estará no ar.

A landing page contém um **web demo** do popup (HTML/CSS/JS equivalentes) e links para download.

## 🧾 Permissões
- Nenhuma permissão especial. O popup roda isolado (mais simples de aprovar na Chrome Web Store).

## 🛒 Publicar na Chrome Web Store (opcional)
1. Compacte a pasta **extension/** como `.zip` (ou use o arquivo em `dist/`).
2. Acesse o **Chrome Web Store Developer Dashboard** (conta de desenvolvedor necessária).
3. **Add a new item → Upload ZIP**.
4. Preencha título, descrição, ícones e screenshots.
5. Envie para **revisão** e publique.

## 🏷️ Release no GitHub (opcional, recomendado)
- Crie uma **Release** chamada `v1.1.3` e anexe o arquivo `dist/ola-mundo-ext-v1.1.3.zip`.
- Descreva mudanças, inclua screenshots.

## 🧪 Teste rápido
- Abra o popup da extensão (ícone de peça → “fixar”).
- Clique no botão: a mensagem vira **“Bem‑vindo!”** e o botão fica verde. Clique novamente para voltar.

## 📚 Licença
MIT — veja [`LICENSE`](LICENSE).
