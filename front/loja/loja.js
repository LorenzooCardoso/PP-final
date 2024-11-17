async function getLojas() {
    const images = 'http://localhost:3007/uploads/';

    const response = await fetch('http://localhost:3007/api/get/lojas', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

 

    // setTimeout(function() {
    //     document.getElementById('button-container').style.display = 'block';
    // }, 10000); 



    const result = await response.json();
    console.log(result)

    if (result.success) {
        let lojas = result.data;
        let postsHtml = document.getElementById('lojas');


        console.log(lojas);
        
        lojas.forEach(oferta => {
            let imgHtml = "<div>" +
                "<span id='title'>" + oferta.title + "</span>" +
                "<span id='descricao'>" + oferta.description + "</span>" +
                "<span id='preco'>" + oferta.preco + "</span>" +
                "</div>"
            postsHtml.innerHTML = imgHtml;
        });


        // filter.map((post) => {
        //     let imgHtml = "<div>" +
        //         "<span id='title'>" + post.title + "</span>" +
        //         "<span id='descricao'>" + post.description + "</span>" +
        //         "<span id='preco'>" + post.preco + "</span>" +
        //         "</div>"
        //     postsHtml.innerHTML = imgHtml;
        // })
        document.getElementById("descricao").style.height="200px";
        document.getElementById("title").style.height="200px";
        document.getElementById("preco").style.height="200px"



        
       
    }

    
}
getLojas();