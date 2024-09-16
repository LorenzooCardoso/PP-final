

function confirmarEnvio(event) {
    event.preventDefault();

    let select = document.getElementById('exercicios');
    let value = select.value;
    console.log(value);
    localStorage.setItem('id_treino', value)
    switch(value) {
        case "1":
            window.location.href = "../pagsexercicios/bracos.html";
            break;
        case "2":
            window.location.href = "./pagsexercicios/costas.html";
            break;
        case "3":
            window.location.href = "./pagsexercicios/peito_abdomen.html";
            break;
        case "4":
            window.location.href = "./pagsexercicios/pernas.html";
            break;
        case "5":
            window.location.href = "./pagsexercicios/cardio.html";
            break;
        default:
            alert("Seleção não encontrada");
    }

}

document.getElementById("loja").onclick = function(event) {
    // Previne o comportamento padrão do link
    event.preventDefault();
    
    // Exemplo de ação adicional: Exibir um alerta
    alert("Você será redirecionado para outra página.");

    // Redireciona para a nova página
    window.location.href = "../loja/loja.html";
};