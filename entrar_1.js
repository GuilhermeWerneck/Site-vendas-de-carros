
function mudarsenha() {
    let campo_Senha = document.getElementById("senha_1");
    if (campo_Senha.type == "password") {
        campo_Senha.type = "text";

    } else {
        campo_Senha.type = "password"
    }
}

function verificar() {
    let campo_Senha = document.getElementById("senha_1").value;
    var campo_Email = document.getElementById("email_1").value;
    toString(campo_Email);
    toString(campo_Senha);
    if (campo_Senha == "" || campo_Email == "") {
        alert("Por favor prencha os campos de Email e Senha!");
         
    }
    else {
        window.location.href = "http://127.0.0.1:5500/index.html";
        alert("Acesso Liberado!!"); 
    }

}