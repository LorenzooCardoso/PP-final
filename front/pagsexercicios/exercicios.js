let botao = document.getElementById("buttonsair");
botao.style.display = "none";

function redirecionar() {
    window.location.href = "../pag1/pag1.html";
}


async function getPosts() {
    const images = 'http://localhost:3006/uploads/';

    const response = await fetch('http://localhost:3006/api/posts', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

 

    setTimeout(function() {
        document.getElementById('button-container').style.display = 'block';
    }, 10000); 

 

    // document.getElementById("buttonsair").onclick = function(event) {
    //     // Previne o comportamento padrão do link
    //     event.preventDefault();
        
    //     // Exemplo de ação adicional: Exibir um alerta
    //     alert("Você será redirecionado para outra página.");
    
    //     // Redireciona para a nova página
    //     window.location.href = "pag1.html";
    // };

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

