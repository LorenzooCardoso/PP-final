const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    
    const params = [
        request.body.name,
        request.body.email,
        request.body.password,
        request.body.funcao
    ];

      const query = "INSERT INTO users_fitpay (name, email, password, funcao) VALUES (?, ?, ?, ?)";
    
    connection.query(query, params, (err, results) => {
        
        if (err) {
            console.log("ola", err)
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    sql: err
                });
        } else {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        }
    });
}

async function Getlogin(request, response) {    
    const email = Array(request.body.email);

    const query = "SELECT id, name, email, password, funcao FROM users_fitpay WHERE email = ?";

    connection.query(query, email, (err, results) => {    
        console.log("erro", err)
        if (results.length > 0) {
            const senha = request.body.password;
            const senhaquery = results[0].password;
            
            if (senha === senhaquery){
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Senha correta",
                        data: results
                    })
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Senha incorreta"
                    })
            }       
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso",
                    data: err
                })
        }
    });
}

module.exports = {
    storeTask,
    Getlogin
};
