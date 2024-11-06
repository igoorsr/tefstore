# TEF STYLE

TEF Style é um projeto de e-commerce desenvolvido para fins educativos. O projeto explora desenvolvimento full-stack com autenticação, criptografia, e um sistema de carrinho de compras. O site foi criado com Node.js no backend, React no frontend e está hospedado na Azure.

- Link do site: [TEF STYLE](https://tefstyle.azurewebsites.net)
- Link do repositório: [TEF STYLE - REPOSITÓRIO](https://github.com/igoorsr/tefstore)

## Indíce
- Visão Geral
- Funcionalidades
- Tecnologias Utilizadas
- Instalação e Uso
- Estrutura do Projeto
- Licença

### Visão Geral

O projeto TEF Style foi criado para fins educacionais, simulando uma loja de roupas online com funcionalidades comuns de e-commerce. É possível explorar produtos, adicionar itens ao carrinho e realizar operações com segurança através de autenticação e criptografia.

### Funcionalidades
- Registro e login seguro usando JWT e passport-local.
- Carrinho de Compras: Adicionar e remover produtos.
- Criptografia de Dados: Proteção de dados sensíveis com bcrypt.
- Backend e Frontend Integrados: Comunicação entre frontend e backend para operações de e-commerce.

### Tecnologias Utilizadas
- Frontend: React com Vite
- Backend: Node.js e Express
- Banco de Dados: MongoDB Atlas
- Hospedagem: Azure
- Autenticação e Segurança: JWT para autenticação, bcrypt para criptografia de senhas, e passport-local para estratégia de autenticação local
- Containerização: Docker

### Instalação e Uso

#### Pré-requisitos
- Node.js e npm instalados
- Conta no MongoDB Atlas
- Conta no Azure para deploy (opcional para uso local)
- Docker (opcional para execução em contêineres)

#### Passo a Passo para Rodar o Projeto Localmente

1. Clone o repositório
```bash
   git clone https://github.com/igoorsr/tefstore.git
```

2. Backend
- Instale as dependências:
```bash
cd tefstore/backend
npm install
```

- Inicie o backend:
```bash
npm run dev
```

3. Frontend
- Instale as dependências:
```bash
cd tefstore/frontend
npm install
```

- Inicie o backend:
```bash
npm run dev
```

4. Acesse o projeto:
- O frontend estará disponível em http://localhost:8080 e o backend em http://localhost:3000.

#### Utilizando Docker

```bash
# No diretório backend
docker build -t tefstyle-backend .
docker run -p 3000:3000 tefstyle-backend

# No diretório frontend
docker build -t tefstyle-frontend .
docker run -p 8080:8080 tefstyle-frontend
```

### Estrutura do Projeto

#### Estrutura Backend

```bash
backend/
├── node_modules/
├── src/
│   ├── auth/                # Lógica de autenticação
│   ├── controllers/         # Controladores para lógica de negócios
│   ├── data/                # Arquivos de dados (exemplo, dados simulados)
│   ├── dataAcess/           # Acesso aos dados e manipulação
│   ├── database/            # Configurações de banco de dados (MongoDB Atlas)
│   ├── helpers/             # Funções auxiliares
│   └── routes/              # Definição das rotas da API
├── .env                     # Variáveis de ambiente
├── Dockerfile               # Dockerfile para containerização
├── package.json
└── server.js                # Arquivo principal do backend
```

#### Estrutura Frontend
```bash
frontend/
├── node_modules/
├── public/
│   ├── homepage/            # Conteúdo da página inicial
│   ├── logos/               # Logotipos e imagens relacionadas
│   └── products/            # Imagens dos produtos
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   ├── contexts/            # Contextos globais de estado
│   ├── pages/               # Páginas da aplicação
│   └── services/            # Serviços para chamadas à API
├── .gitignore
├── Dockerfile               # Dockerfile para containerização
├── index.html               # HTML principal
├── package.json
└── vite.config.js           # Configurações do Vite
```

### Licença
Este projeto é para fins educacionais e está disponível publicamente.
