const connection = require('../config/db');

async function getPosts(request, response) {
    const query = "select * from exercicios;";

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

async function storeAtv(request, response) {
 
    const params = Array(
        request.body.title,
        request.body.description,
        request.file.filename,
        request.body.musculo        
    );

    const query = "INSERT INTO Exercicios(title, description, file, musculo) VALUES (?,?,?,?)";

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
    storeAtv,
    getPosts
}