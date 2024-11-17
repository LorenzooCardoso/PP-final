let botao = document.getElementById("buttonsair");
botao.style.display = "none";

function redirecionar() {
    console.log("Entrou no redirecionar")
    //pegarMoedasUsuario();
    inserirMoedas();
    //window.location.href = "../pag1/pag1.html";
}

async function pegarMoedasUsuario(){
    let idUser = sessionStorage.getItem("idUser")
    
    const responseGet = await fetch(`http://localhost:3007/api/moedas/get/${idUser}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const result = await responseGet.json();
    let moedasAtuais = result.data[0].quantia;
    
    return moedasAtuais;
}

async function inserirMoedas() {
    let data;
    let idUser = sessionStorage.getItem("idUser")

    let moedas = 10 + Number(await pegarMoedasUsuario());

    data = {idUser,moedas} 
    console.log(data)

    const response = await fetch('http://localhost:3007/api/moedas', {
        method: "PUT",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content)
}

async function getPosts() {
    const images = 'http://localhost:3007/uploads/';

    const response = await fetch('http://localhost:3007/api/posts', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

 

    setTimeout(function() {
        document.getElementById('button-container').style.display = 'block';
    }, 10000); 



    const result = await response.json();
    console.log(result)

    if (result.success) {
        let posts = result.data;
        let postsHtml = document.getElementById('posts');

        let idTreino = localStorage.getItem('id_treino');

        let filter = posts.filter((post) =>
            post.musculo === idTreino
        )

        let qtdImagens = filter.length;
        let cont = 0;
        console.log(filter)

        filter.map((post) => {
            let imgHtml = "<div>" +
                "<span id='title'>" + post.title + "</span>" +
                "<span id='descricao'>" + post.description + "</span>" +
                "<img id='image' src=" + images + post.file + " alt='img'  />" +
                "</div>"
            postsHtml.innerHTML = imgHtml;
        })
        document.getElementById("descricao").style.height="200px";
        document.getElementById("title").style.height="200px";

        const alterarImagem = () => {
            confirm('Finalizar o treino ?');
            document.getElementById('image').src = images + filter[cont].file;
            document.getElementById('title').innerText = filter[cont].title;
            document.getElementById('descricao').innerText = filter[cont].description;
            cont++;
            console.log(cont)
            if(cont < 2){
                setTimeout(alterarImagem, 5000)
            }else{
                botao.style.display = "block"
            }
            /*if(cont >= qtdImagens) {
                cont = 0;
            }*/
            
        }
        setTimeout(alterarImagem, 5000)

        
       
    }

    
}






getPosts();

