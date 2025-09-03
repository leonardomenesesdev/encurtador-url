# 🔗 Encurtador de URL – Backend

Este é um projeto backend desenvolvido em **JavaScript**, utilizando **Express** e **Firebase Firestore** para encurtar URLs.  
Ele expõe uma API simples que permite criar URLs encurtadas e redirecionar para o endereço original.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Firestore](https://firebase.google.com/docs/firestore)
- [shortid](https://www.npmjs.com/package/shortid)

---

## 📂 Estrutura básica da API

### Criar URL encurtada
**POST** `/shorten`

**Body (JSON):**
```json
{
  "originalUrl": "https://exemplo.com/minha-pagina"
}
```
**Resposta (201):**
```json
{
  "shortUrl": "http://localhost:3000/abc123",
  "originalUrl": "https://exemplo.com/minha-pagina"
}
```
> Retorna a URL encurtada

## ⚙️ Configuração do projeto

### 1. Clone o repositório
```bash
git clone https://github.com/leonardomenesesdev/encurtador-url.git
cd encurtador-url
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Configure o Firebase
- No console do Firebase, crie um projeto.
- Ative o Cloud Firestore.
- Vá em Configurações do projeto → Contas de serviço.
- Clique em Gerar nova chave privada e baixe o arquivo serviceAccountKey.json.
- Coloque esse arquivo na raiz do projeto.

**⚠️ Importante: adicione serviceAccountKey.json ao .gitignore para evitar expor suas credenciais.**
### 4. Rode o servidor
```bash
npm run dev
```
Se tudo estiver certo, verá algo como:
```less
Servidor rodando em http://localhost:3000
```
