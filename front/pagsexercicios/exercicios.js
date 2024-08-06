posts.map((post) => {
    let imgHtml = "<div>" +
    "<span>" + post.description + "</span>" +
    "<img src=" + images + post.file + " alt='img' height='100' width='100' />" +
    "</div>"
    postsHtml.innerHTML = imgHtml;
})