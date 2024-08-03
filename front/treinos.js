let button = document.getElementById("handleSubmit");

button.onclick = async function(event) {
    event.preventDefault();

    let fm = new FormData();

    fm.append('title', document.getElementById("title").value);
    fm.append('description', document.getElementById("description").value);
    fm.append('file', document.getElementById("file").files[0]);

    const plainFormData = Object.fromEntries(fm.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

    console.log(fm.get('title'))
    console.log(fm.get('description'))
    console.log(fm.get('file'))
    console.log(formDataJsonString)

    const response = await fetch('http://localhost:3005/api/store/atv', {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
			"Accept": "application/json"
        },
        body: formDataJsonString
    });

    let content = await response.json();

    if(content.success) {
        
        alert("Sucesso")
    } else{
        alert('Não');
    }
}