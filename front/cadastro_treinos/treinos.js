getPosts();

let button = document.getElementById("handleSubmit");

button.onclick = async function (event) {
    event.preventDefault();

    let fm = new FormData();

    fm.append('title', document.getElementById("title").value);
    fm.append('description', document.getElementById("description").value);
    fm.append('file', document.getElementById("file").files[0]);
    fm.append('musculo', document.getElementById("musculo").value);

    const response = await fetch('http://localhost:3007/api/store/atv', {
        method: "POST",
        body: fm
    });

    let content = await response.json();

    if (content.success) {

        alert("Sucesso")
    } else {
        alert('Não');
    }
}

async function getPosts() {
    const images = 'http://localhost:3007/uploads/';

    const response = await fetch('http://localhost:3007/api/posts', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const result = await response.json();

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
                "<span>" + post.title + "</span>" +
                "<span>" + post.description + "</span>" +
                "<img id='image' src=" + images + post.file + " alt='img' height='100' width='100' />" +
                "</div>"
            postsHtml.innerHTML = imgHtml;
        })

        // const alterarImagem = () => {
        //     confirm('Ir para o próximo treino');
        //     document.getElementById('image').src = images + filter[cont].file;
        //     cont++;

        //     if(cont >= qtdImagens) {
        //         cont = 0;
        //     }

        //     setTimeout(alterarImagem, 1000)
        // }
        // alterarImagem();


       
    }
}

        // // Função que faz o botão aparecer após 10 segundos
        // setTimeout(function() {
        //     document.getElementById('button-container').style.display = 'block';
        // }, 10000); // 10000 milissegundos = 10 segundos

