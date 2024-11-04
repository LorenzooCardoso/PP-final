const connection = require('../config/db');
const dotenv = require('dotenv').config();


async function getMoedasById(request, response) {
    const params = [request.params.idUser];

    const query = "select quantia from moedas where userid = ? ;";
    console.log(query)

    connection.query(query, params, (err, results) => {
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

async function storeMoedas(request, response) {
    
    const params = [
        request.body.moedas,
        request.body.idUser
    ];

      const query = "UPDATE moedas SET quantia = ? WHERE userid = ?";
    
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
// const db = require('../config/db'); // Certifique-se de que o db está configurado corretamente

// exports.getQuantia = (req, res) => {
//     const query = 'SELECT quantia FROM moedas LIMIT 1'; // Ajuste conforme necessário
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Erro ao buscar quantia:', err);
//             return res.status(500).json({ error: 'Erro ao buscar quantia' });
//         }
//         res.json({ quantia: results[0].quantia });
//     });
// };

module.exports = {
    storeMoedas,
    getMoedasById
};
