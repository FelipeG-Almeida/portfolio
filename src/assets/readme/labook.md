# 📘 Labook Backend

Este é o projeto Labook, uma rede social com o objetivo de promover a conexão e interação entre pessoas. Desenvolvido como parte do projeto final do curso de Desenvolvimento Full Stack da Labenu, unicamente para fins didáticos.

<p align="center"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB" alt="shields"><img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&amp;logo=sqlite&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" alt="shields"></p>

## 📑 Sobre o Projeto

O Labook é uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá criar e curtir publicações.

## ▶️ Funcionalidades

O backend do Labook possui as seguintes funcionalidades:

- CRUD (Create, Read, Update, Delete) de usuários e posts
- Validação dos endpoints

## 🔚 Endpoints

A API possui os seguintes endpoints disponíveis:

- **POST /users/signup**: Realiza o cadastro do usuário e fornece um token JWT.
- **POST /users/login**: Faz o login e fornece um token JWT.

- **POST /posts**: Cria um novo post.
- **GET /posts**: Retorna uma lista com todos os posts.
- **PUT /posts/:id**: Atualiza um post específico com base no seu Id. 
- **DELETE /posts/:id**: Exclui um post específico com base no seu Id.
- **PUT /posts/:id/like**: Realiza a função de like em um post específico com base no seu Id.

## 🎲 Banco de dados

Diagrama do banco de dados, suas tabelas e relações:

![216036534-2b3dfb48-7782-411a-bffd-36245b78594e](https://github.com/FelipeG-Almeida/projeto-labook-backend/assets/73674044/38cd25bd-8485-42d8-aecf-66bbb72f9b14)

## ⚙️ Configuração do Projeto

Para configurar o projeto em sua máquina local, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/FelipeG-Almeida/projeto-labook-backend.git

```

2. Instale as dependências do projeto:

```bash
cd projeto-labook-backend
npm install
```

3. Inicie o servidor:

```bash
npm dev start
```

O servidor será iniciado na porta especificada na variável de ambiente `PORT` (padrão: 3001).

## 📜 Documentação da API

A documentação da API pode ser encontrada em https://documenter.getpostman.com/view/24823235/2s93sXca7Y, que fornece detalhes sobre os endpoints disponíveis, parâmetros de entrada, exemplos de solicitações e respostas.

## 🛠️ Tecnologias e Metodologias Utilizadas

- NodeJS
- Typescript
- Express
- SQL e SQLite
- Knex
- POO
- Arquitetura em camadas
- Geração de UUID
- Geração de hashes
- Autenticação e autorização
- Roteamento
- Postman

## 👍 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma nova issue ou enviar um pull request.
