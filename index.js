const express = require('express');
const app = express();

// Rota 1 - Página inicial com botões
app.get('/', (req, res) => {
    res.send(`
        <h1>Bem-vindo ao meu site!</h1>
        <button onclick="window.location.href='/sobre'">Sobre</button>
        <button onclick="window.location.href='/contato'">Contato</button>
    `);
});

// Rota 2 - Sobre
app.get('/sobre', (req, res) => {
    res.send(`
        <h1>Sobre nós</h1>
        <p>Este é um site simples com Express.</p>
        <a href="/">Voltar</a>
    `);
});

// Rota 3 - Contato
app.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <p>Email: contato@exemplo.com</p>
        <a href="/">Voltar</a>
    `);
});

// Inicia o servidor
app.listen(80, () => {
    console.log('Servidor rodando em http://localhost:80');
});