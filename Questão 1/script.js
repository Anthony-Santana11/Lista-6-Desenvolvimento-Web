function bemVindo() {
    let nome = document.getElementById("nome").value;
    if (nome.trim() !== "") {
        document.getElementById("mensagem").innerHTML = "Bem vindo " + nome + "!";
    } else {
        document.getElementById("mensagem").innerHTML = "Por favor, insira seu nome.";
    }
}