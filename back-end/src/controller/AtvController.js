const connection = require('../config/db');

async function storeAtv(request, response) {
 
    const params = Array(
        request.body.title,
        request.body.description,
        request.body.file
        
    );

    const query = "INSERT INTO Exercicios(title, description, file) VALUES (?,?,?)";

    connection.query(query, params, (err, results) =>{
        console.log(results)
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
    storeAtv
}