let button = document.getElementById("criar");

button.onclick = async function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let funcao = document.getElementById("funcao").selectedIndex;
    let data = {name,email,password,funcao}
console.log(data)
    const response = await fetch('http://localhost:3006/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if(content.success) {
        // alert("Sucesso")
        window.location.href = "../login/index_login.html"
    } else {
        alert('Não deu');
    }
}

const nome = nomeInput.value;
localStorage.setItem('nome', nome);

