// Importa a biblioteca do express
const express = require('express');

// "inicializa" o servidor
const app = express();

// Associa requsições do tipo GET ao path '/' com a seguinte função.
// Lembrando que `request` tem informações referentes à requisição, e
// `response` tem informações referentes à resposta que ainda será mandada
app.get('/', (request, response) => {
	// Lê o header `customheader` da requisição
	const customHeader = request.headers.customheader;

	// Verifica se o header existe
	if (typeof customHeader === 'string') {
		// Se o header existir, adiciona '-novo' no final, e manda de volta pro cliente
		const newHeaderValue = customHeader + '-novo';
		response.send(newHeaderValue);
	} else {
		// Se o header não existir, mandar uma resposta com status 400 e um erro.
		response.status(400).send('ERRO: Você não mandou o header \'customheader\'!!!!!');
	}
});

// Inicializa o servidor na porta 8000
app.listen(8000, () => {
	console.log('Server running at port 8000!');
});