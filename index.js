// Importa a biblioteca do express
const express = require('express');
const cors = require('cors');

// "inicializa" o servidor
const app = express();

app.use(cors());

const JSONReceitas = require('./receitas.json');

// Associa requsições do tipo GET ao path '/' com a seguinte função.
// Lembrando que `request` tem informações referentes à requisição, e
// `response` tem informações referentes à resposta que ainda será mandada
const straux = '/';
app.get(straux, (request, response) => {
    const ingredientes = request.query.ingredientes;
    if (ingredientes) {
        let ingredientesDisponiveis = ingredientes.split(',');

        const todasASReceitas = Object.entries(JSONReceitas.receitas);
        let possiveisReceitas = [];
        todasASReceitas.forEach(receitaAtual => {
            ingredientesReceitaAtual = receitaAtual[1].ingredientes;

            for (const ingrediente of ingredientesReceitaAtual) {
                if (ingredientesDisponiveis.indexOf(ingrediente) === -1) {
                    return;
                }
            }

            possiveisReceitas.push(receitaAtual);

        });

        response.send(JSON.stringify(possiveisReceitas));

    } else {
        response.send(JSONReceitas); //retorna json contendo todas as receitas
    }
});

// Inicializa o servidor na porta 8000
app.listen(8000, () => {
    console.log('Server running at port 8000!');
});