const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');


const server = express();
server.use(cors());

const pool = new Pool({  
    user: 'agqzleqpmhqcoa', 
    password: 'd5583d20f7351fa10fe3ab7134a36bd199b831e2997de581cacf8415a0b3a68e',
    host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
    database: 'd4nrv8gk9ouvue',
    port: '5432',
    ssl: { rejectUnauthorized: false }
});

server.use(express.json());

//SELECT SIMPLES (GET)

server.get('/elenco', async function(request, response) {
    const result = await pool.query('SELECT * FROM elenco');
    return response.json(result.rows);
})

server.post('/elenco', async function(request, response){
    const nome = request.body.nome;
    const numero = request.body.numero;
    const idade = request.body.idade;
    const salario = request.body.salario;
    const contrato = request.body.contrato;

    const sql = `
    INSERT INTO elenco (nome, numero, idade, salario, contrato) VALUES ($1, $2, $3, $4, $5)
    `;

    await pool.query(sql, [nome, numero, idade, salario, contrato]);
    return response.status(201).send();
});

server.delete('/elenco/:id', async function(req, res){
    const id = req.params.id;

    sql = 'DELETE FROM elenco WHERE id = $1';

    await pool.query(sql, [id]);

    res.send();
})

server.put('/elenco/:id', async (request, response) => {
    const {id} = request.params;
    const {nome,numero,idade,salario,contrato} = request.body;
    const sql = `UPDATE elenco SET nome = $1, numero = $2, idade = $3, salario = $4, contrato = $5 WHERE id = $6`;
    await pool.query(sql, [nome,numero,idade,salario,contrato,id]);
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);