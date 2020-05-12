const express = require('express');

const server = express();

server.use(express.json());

const jogadores = [
    {nome: 'Ronaldo', numero: 9, idade: 30, salario: 'R$ 200.000,00', contrato: '31/12/2022'},
    {nome: 'Ronaldinho', numero: 11, idade: 29, salario: 'R$ 200.000,00', contrato: '31/06/2022'},
    {nome: 'Kaka', numero: 8, idade: 26, salario: 'R$ 170.000,00', contrato: '31/12/2024'},
    {nome: 'Adriano', numero: 7, idade: 29, salario: 'R$ 180.000,00', contrato: '31/12/2023'},
    {nome: 'Rivaldo', numero: 10, idade: 32, salario: 'R$ 150.000,00', contrato: '31/12/2021'}
]

server.get('/elenco', function(request, response) {
    response.json(jogadores);
})

server.post('/elenco', function (request, response){

    const {nome, numero, idade, salario, contrato} = request.body;

    jogadores.push({nome, numero, idade, salario, contrato});
    response.status(204).send();
})

server.put('/elenco/:id', function (request, response){
    const {id} = request.params;
    const {nome, numero, idade, salario, contrato} = request.body;

    for(let i = 0; i < jogadores.length; i++){
        if(jogadores[i].nome == id){
            jogadores[i].nome = nome;
            jogadores[i].numero = numero;
            jogadores[i].idade = idade;
            jogadores[i].salario = salario;
            jogadores[i].contrato = contrato;
            break;
        }
    }
    return response.status(204).send();
})

server.delete('/elenco/:id', function (request, response){

    const {id} = request.params;

    for(let i = 0; i < jogadores.length; i++){
        if(jogadores[i].nome == id){
            jogadores.splice(i, 1);
            break;
        }
    }
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);