<div align="center">
 
  <div>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
    <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
  </div>

  <h3 align="center">Uma API para Gerenciamento de Assinaturas</h3>


</div>

## 📋 Tabela de Conteúdos

1. 🤖 [Introdução](#introdução)  
2. ⚙️ [Tecnologias Utilizadas](#tecnologias-utilizadas)  
3. 🔋 [Funcionalidades](#funcionalidades)  
4. 🤸 [Início Rápido](#início-rápido)  
5. 🕸️ [Trechos de Código](#trechos-de-código)  
6. 🔗 [Links Úteis](#links-úteis)  
7. 🚀 [Mais Conteúdos](#mais-conteúdos)



## 🤖 Introdução

**API de Gerenciamento de Assinaturas pronta para produção**, que lida com **usuários reais, dinheiro real e lógica de negócios real**.

Autentique usuários usando JWTs, conecte com banco de dados, crie modelos e esquemas, e integre com ORMs. Estruture a arquitetura da sua API para garantir escalabilidade e comunicação eficiente com o frontend.



## ⚙️ Tecnologias Utilizadas

- Node.js  
- Express.js  
- MongoDB

## 🔋 Funcionalidades

- **Limitação Avançada de Requisições e Proteção contra Bots** (com Arcjet)  
- **Modelagem de Banco de Dados** (MongoDB + Mongoose)  
- **Autenticação JWT** (CRUD de usuários e gerenciamento de assinaturas)  
- **Tratamento Global de Erros** (validação de entrada + middlewares)  
- **Mecanismos de Log** (para depuração e monitoramento)  
- **Lembretes por E-mail** (automatizados com Upstash)  
- Estrutura de código reutilizável e escalável

## 🤸 Início Rápido

### Pré-requisitos

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)

### Clonando o Repositório

```bash
git clone https://github.com/erolkss/crud-with-nodejs-express-mongodb.git
cd subscription-tracker-api
```

### 📦 Instalando as Dependências

```bash
npm install
```

### 🛠️ Variáveis de Ambiente
Crie um arquivo ".env.development.local" na raiz do projeto com o seguinte conteúdo:
```
PORT=5500
SERVER_URL="http://localhost:5500"
NODE_ENV=development
DB_URI=
JWT_SECRET=
JWT_EXPIRES_IN="1d"
ARCJET_KEY=
ARCJET_ENV="development"
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=
EMAIL_PASSWORD=
```

### 🚀 Executando o Projeto

```bash
npm run dev
```

### 🕸️ Trechos de Código

<details>
<summary><code>JSON Fictício</code></summary>

```json
{
  "name": "Javascript Course",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```
</details>

### 🔗 Links Úteis

- [Arcjet](https://launch.arcjet.com/4g2R2e4)
- [Upstash](https://bit.ly/42ealiN)
- [Hostinger](https://hostinger.com/mastery10)
- [WebStorm](https://jb.gg/GetWebStormFree)


