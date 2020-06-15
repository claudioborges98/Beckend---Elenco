// yarn add pg

const Pool = require('pg').Pool;

///1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

const pool = new Pool({  
    user: 'agqzleqpmhqcoa', 
    password: 'd5583d20f7351fa10fe3ab7134a36bd199b831e2997de581cacf8415a0b3a68e',
    host: 'ec2-34-202-88-122.compute-1.amazonaws.com',
    database: 'd4nrv8gk9ouvue',
    port: '5432',
    ssl: { rejectUnauthorized: false }
});