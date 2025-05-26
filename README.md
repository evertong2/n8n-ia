# n8n-render-lite

Repositório simplificado do n8n pronto para deploy no [Render](https://render.com).

## 🛠 Configuração no Render

- Build command: `pnpm install`
- Start command: `pnpm start`
- Node version: 20.11.1 (via `.render/node-version`)

### Variáveis obrigatórias:

- `N8N_BASIC_AUTH_ACTIVE=true`
- `N8N_BASIC_AUTH_USER=admin`
- `N8N_BASIC_AUTH_PASSWORD=sua-senha`
- `PORT=10000`
- `N8N_PORT=10000`
- `N8N_HOST=0.0.0.0`
