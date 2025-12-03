# 🚀 Atividade Prática: CORS & SOP

Este projeto foi desenvolvido para demonstrar na prática o funcionamento da **Política de Mesma Origem (SOP)** e como resolver bloqueios de segurança utilizando **CORS** (Cross-Origin Resource Sharing).

## 🛠️ Tecnologias
* **Backend:** Node.js + Express
* **Frontend:** HTML5 + CSS3 + JavaScript (Fetch API)
* **Pacote:** `cors` (Middleware)

## ⚙️ Estrutura do Projeto

* `/backend` - API rodando na porta **8080**. Rota: `/api/mensagem`
* `/frontend` - Cliente rodando na porta **3000**.

## 📋 Como Executar

### 1. Preparar o Backend
Abra o terminal na pasta `backend` e instale as dependências:
```bash
cd backend
npm install express cors
Para rodar o servidor:

```
```bash

node server.js
2. Rodar o Frontend
Você pode usar a extensão "Live Server" do VSCode ou o pacote serve. Certifique-se de que ele rode na porta 3000.

npx serve -l 3000
```
🧪 Roteiro de Testes
Teste de Bloqueio (Erro):

No arquivo server.js, mantenha a linha app.use(cors()) comentada.

Clique em "Acessar API".

Resultado esperado: Erro vermelho no "terminal" da tela e erro de CORS no console (F12).

Teste de Sucesso:

Descomente a linha do cors() no backend.

Reinicie o servidor (node server.js).

Clique em "Acessar API".

Resultado esperado: JSON retornado com sucesso em verde.
