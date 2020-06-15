const Pool = require('pg').Pool;


const pool = new Pool({  
    user: 'jteollvdukwjec', 
    password: '5dbda661dd3496e43e31634542e0fa066cca59c8a4eae412028f1d0d72a8ce3e',
    host: 'ec2-34-197-141-7.compute-1.amazonaws.com',
    database: 'd6jecnuorpjmjt',
    port: '5432',
    ssl: { rejectUnauthorized: false }
});

const sql = `
    CREATE TABLE IF NOT EXISTS elenco 
    (
        id serial primary key,
        nome varchar(200) not null,
        numero varchar(3),
        idade varchar(11),
        salario varchar(50),
        contrato varchar(50)
    )
`;

pool.query(sql, function(error, result) {
    if(error)
        throw error;
});
