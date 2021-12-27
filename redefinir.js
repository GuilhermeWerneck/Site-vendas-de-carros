document.getElementById("entrar_1").addEventListener("click", mudarPagina, true);

function mudarPagina() {
    var input_email = document.getElementById("email_1").value;
    if (input_email == "") {
        alert("Por favor coloque seu Email!!")
    } else {
        window.location.href = "index.html";
        alert("Um link para redefinir sua senha, foi enviado ao seu Email!!!")
    }



}
















