window.onload = function(){

    let nome = prompt("qual é o seu nome?");
    
    let msg = document.getElementById("meu-titulo")
    if (nome) {

        msg.textContent = "bem vindo, " + nome + "!";
    }
    else{

        msg.textContent = "bem vindo preto!";


    }

    }