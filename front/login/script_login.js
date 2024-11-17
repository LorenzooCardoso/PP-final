let button = document.getElementById("entrar");


button.onclick = async function() {
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    const data = {email, password}
  

    const response = await fetch("http://localhost:3007/api/login", {
      method: "POST",
      headers: { "Content-Type":"application/json;charset=UTF-8" },     
      body: JSON.stringify(data)
    });
  
    const result = await response.json();

    console.log (result);
  
    if (result.success) {
      console.log(result.data)

      let funcao = result.data[0].funcao;
      sessionStorage.setItem("idUser", result.data[0].id);
      let idUser = sessionStorage.getItem("idUser")
      console.log(idUser)

      switch(funcao) {
        case "1":
            window.location.href = "../pag1/pag1.html";
            break;
        case "2":
            window.location.href = "../cadastro_treinos/treinos.html";
            break;
        case "3":
            window.location.href = "../cadastro_ofertas/ofertas.html";
            break;
        default:
            alert("Seleção não encontrada");
    }

        // window.location.href = "../pag1/pag1.html"
      
    } else {
      alert("email ou senha invalidos");
    }

  };

  let botao = document.getElementById("fsc");
  botao.onclick = async function() {
    window.location.href = '../cadastro/Cadastro.html'
  }