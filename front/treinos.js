getPosts();

let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
    event.preventDefault();

    let fm = new FormData();

    fm.append('title', document.getElementById("title").value);
    fm.append('description', document.getElementById("description").value);
    fm.append('file', document.getElementById("file").files[0]);

    const response = await fetch('http://localhost:3005/api/store/atv', {
        method: "POST",
        body: fm
    });

    let content = await response.json();

    if(content.success) {
        
        alert("Sucesso")
    } else{
        alert('Não');
    }
}

async function getPosts() {
    const images = 'http://localhost:3005/uploads/';

    const response = await fetch('http://localhost:3005/api/posts', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const result = await response.json();

    if(result.success) {
        let posts = result.data;
        let postsHtml = document.getElementById('posts');

        posts.map((post) => {
            let imgHtml = "<div>" +
            "<span>" + post.title + "</span>" +
            "<img src=" + images + post.file + " alt='img' height='100' width='100' />" +
            "</div>"
            postsHtml.innerHTML = imgHtml;
        })
    }   
}

