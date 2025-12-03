const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors()); 

app.get('/api/mensagem', (req, res) => {
    console.log('Recebi uma requisição do frontend!');
    res.json({ mensagem: "Mensagem secreta da API em 8080 - COM PERMISSÃO CORS!" });
});

app.listen(PORT, () => {
    console.log(`Servidor Backend rodando em http://localhost:${PORT}`);
});