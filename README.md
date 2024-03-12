## Boilerplate Node.js com MongoDB e Express
Este é um boilerplate para o desenvolvimento de aplicativos Node.js utilizando MongoDB como banco de dados e Express como framework web.

## Funcionalidades
Este boilerplate fornece uma estrutura básica para iniciar o desenvolvimento de aplicativos Node.js com suporte a:

Autenticação JWT utilizando o módulo @nestjs/jwt.
Middleware de segurança para proteção de rotas sensíveis.
Integração com o banco de dados MongoDB usando o módulo @nestjs/mongoose.
Logging com o módulo @nestjs/common.
Validação de dados de entrada utilizando class-validator.

## Tecnologias Utilizadas
Node.js
Express
MongoDB
NestJS

## Configuração

# Clone o repositório:
git clone https://github.com/seu-usuario/boilerplate-nodejs.git

# Instale as dependências:
npm install

# Inicie o servidor:
npm start

# Acesse o sistema no seu navegador:
http://localhost:3000

## Endpoints da API
- GET /api: Retorna uma mensagem de boas-vindas.
- POST /api/login: Endpoint de autenticação que gera um token JWT.
- GET /api/users: Retorna todos os usuários.
- POST /api/users: Cria um novo usuário.
- GET /api/users/:id: Retorna um usuário específico.
- PUT /api/users/:id: Atualiza um usuário existente.
- DELETE /api/users/:id: Exclui um usuário.
