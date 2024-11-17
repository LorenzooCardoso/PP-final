let button = document.getElementById("button");

button.onclick = async function (event) {
    event.preventDefault();

    
    let titulo = document.getElementById("title").value
    let descricao = document.getElementById("description").value
    let preco = document.getElementById("preco").value
    
    let data = {titulo, descricao, preco}
    

    const response = await fetch('http://localhost:3007/api/store/loja', {
        method: "POST",
        headers: { "Content-Type":"application/json;charset=UTF-8" },  
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {

        alert("Sucesso")
    } else {
        alert('Não');
    }
}

