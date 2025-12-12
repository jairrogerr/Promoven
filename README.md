# Promoven One 🚀

Plataforma de assessoria integrada, gestão financeira e contabilidade simplificada para MEIs e microempreendedores.

Este repositório contém o MVP (Produto Mínimo Viável) da aplicação, focado na experiência do usuário, design de alta fidelidade e fluxos de navegação.

## 🛠 Tecnologias Utilizadas

- **Frontend:** React.js, Tailwind CSS
- **UI Components:** Shadcn UI, Lucide React (Ícones)
- **Estilização:** Glassmorphism, Dark Mode nativo, Animações CSS
- **Backend (Estrutura):** FastAPI (Python), MongoDB
- **Gerenciamento de Estado:** React Hooks

## 📱 Funcionalidades do MVP

### Área Pública (Institucional)
- **Landing Page (Home):** Hero section com mockup 3D interativo via CSS, seções de benefícios e prova social.
- **Funcionalidades:** Detalhamento dos recursos da plataforma.
- **Preços:** Tabela comparativa de planos.
- **Sobre:** Missão, visão e valores da empresa.
- **Autenticação:** Páginas de Login e Cadastro com validações visuais.

### Área Logada (Demo Dashboard)
O painel administrativo (`/demo-dashboard`) inclui simulações funcionais de:
1.  **Visão Geral:** Resumo financeiro, gráficos de performance e atalhos.
2.  **Notas Fiscais:** Listagem completa com status (Emitida, Paga, Cancelada).
3.  **Financeiro:** Controle de fluxo de caixa anual e entradas/saídas.
4.  **Educação:** Hub de conteúdos (vídeos, artigos) para o empreendedor.
5.  **Configurações:** Gerenciamento de perfil e dados da empresa.
6.  **Chat IA:** Assistente virtual simulado para dúvidas rápidas.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v18+)
- Python (v3.10+)
- MongoDB (Local ou Atlas)

### 1. Configuração do Frontend
```bash
cd frontend
# Instalar dependências
yarn install

# Rodar servidor de desenvolvimento
yarn start
# O projeto abrirá em http://localhost:3000
```

### 2. Configuração do Backend
*Nota: O backend neste MVP é estrutural. A lógica de negócios está detalhada em `contracts.md`.*

```bash
cd backend
# Instalar dependências
pip install -r requirements.txt

# Rodar servidor
uvicorn server:app --reload
# A API ficará disponível em http://localhost:8000
```

## 📂 Estrutura de Pastas Relevante

```
/app
├── contracts.md            # Documentação técnica da API e modelagem de dados futura
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/  # Componentes internos do painel (Overview, Finance, etc)
│   │   │   ├── layout/     # Navbar, Footer
│   │   │   ├── sections/   # Seções da Landing Page
│   │   │   └── ui/         # Componentes base (Botões, Inputs, Cards)
│   │   ├── pages/          # Rotas principais (Home, Login, DashboardDemo)
│   │   └── data/           # Dados mockados para o frontend
└── backend/                # Estrutura inicial do servidor FastAPI
```

## 🎨 Diretrizes de Design

O projeto segue uma estética "Dark Mode Premium":
- **Cores Principais:** Indigo (`#4f46e5`) e Roxo (`#9333ea`) sobre fundo Zinco Escuro (`#09090b`).
- **Efeitos:** Uso extensivo de `backdrop-blur` (vidro) e gradientes sutis.
- **Tipografia:** Sans-serif moderna, otimizada para leitura.

## 🔜 Próximos Passos (Roadmap)

Conforme detalhado no arquivo `contracts.md`:
1.  Implementar autenticação JWT real.
2.  Conectar o dashboard aos endpoints da API `finance`.
3.  Integrar API da OpenAI para o Chat Assistant.
4.  Configurar integração com gateway de emissão de NFe.

---
Desenvolvido com 💜 para o ecossistema empreendedor.
