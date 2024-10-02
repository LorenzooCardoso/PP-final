

function confirmarEnvio(event) {
    event.preventDefault();

    let select = document.getElementById('exercicios');
    let value = select.value;
    console.log(value);
    localStorage.setItem('id_treino', value)
    switch(value) {
        case "1":
            window.location.href = "../pagsexercicios/velocidade.html";
            break;
        case "2":
            window.location.href = "../pagsexercicios/resistencia.html";
            break;
        case "3":
            window.location.href = "./pagsexercicios/impulso.html";
            break;
        case "4":
            window.location.href = "../pagsexercicios/forca.html";
            break;
        case "5":
            window.location.href = "../pagsexercicios/perda.html";
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