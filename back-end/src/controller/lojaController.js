const connection = require('../config/db');

async function getLojas(request, response) {
    const query = "select * from loja;";

    connection.query(query, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "OPS, deu problema!",
                sql: err
            })
        }
    })
}

async function storeLoja(request, response) {
 
    const params = Array(
        request.body.titulo,
        request.body.descricao,
        request.body.preco,   
    );

    const query = "INSERT INTO loja(title, description, preco) VALUES (?,?,?)";

    connection.query(query, params, (err, results) =>{
        console.log(err, results);
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
            .status(400)
            .json({
                success: false,
                message: "OPS, deu problema!",
                sql: err
            })
        }
    })
}

module.exports = {
    storeLoja,
    getLojas
}