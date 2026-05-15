# Invex Digital Flow

Site estatico editavel da Invex, reconstruido a partir do deploy publico da Base44.

## Publicar na Render

1. Suba este repositorio para o GitHub.
2. Na Render, crie um novo **Static Site**.
3. Use `public` como publish directory.
4. O arquivo `render.yaml` ja define a rota de fallback para `/index.html`.

## Observacoes

- O site agora usa `public/index.html`, `public/css/styles.css` e `public/js/main.js`.
- As imagens foram copiadas para `public/images`.
- O formulario abre uma mensagem pronta no WhatsApp da Invex.

## Rodar localmente

Use Node.js:

```bash
node serve-local.mjs
```

Depois abra `http://127.0.0.1:4173`.
