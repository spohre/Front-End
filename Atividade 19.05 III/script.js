
//Exercício 1
function mostrarMensagem() {
    let nomeExe01, paragrafoExe01;
    nomeExe01 = document.getElementById("nameInput");
    paragrafoExe01 = document.getElementById("greetingMessage");

    if (nomeExe01.value !== "") {
        paragrafoExe01.innerText = "Olá, " + nomeExe01.value + "! Seja bem vindo(a)!";
    } else {
        paragrafoExe01.innerHTML = "<span style='color: blue; font-size: 40px'>Digite seu nome </span>"; 
    }
}
//Exercício 2
function TrocarEstilo() {
    let nomeExe02, paragrafoExe02;
    nomeExe02 = document.getElementById("TrocarEstilo");
    paragrafoExe02 = document.getElementById("vida");

    if (nomeExe02.innerText == "Trocar estilo") {
        paragrafoExe02.style.color = "red";
        paragrafoExe02.style.fontSize = "20px";
        paragrafoExe02.style.fontWeight = "bold";
        paragrafoExe02.style.fontStyle = "italic";
        paragrafoExe02.style.background = "yellow";
    } else {
        paragrafoExe02.style.color = "";
        paragrafoExe02.style.fontSize = "";
        paragrafoExe02.style.background = "";
        paragrafoExe02.innerText = "Trocar estilo";
    }
}


//Exercício 3
function trocaCor(mudarCorFundo) {
    document.body.style.backgroundColor = mudarCorFundo;
}

//Exercicio 4
function addParagrafo() {
    let div, novoParagrafo;
    div = document.getElementById("texto")
    novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este é um novo parágrafo adicionado dinamicamente.";
    div.appendChild(novoParagrafo);
}
function removerParagrafo() {
    let div, ultimoParagrafo;
    div = document.getElementById("texto");
    ultimoParagrafo = div.lastElementChild;
    if (ultimoParagrafo) {
        div.removeChild(ultimoParagrafo);
    }else {
        alert("Não há parágrafos para remover.");
    }
}



//Exercício 5
function mostrarImagem() {
    let img;
    img = document.getElementById("minhaImagem");
    img.style.display = "block";
}

function esconderImagem() {
    let img;
    img = document.getElementById("minhaImagem");
    img.style.display = "none";
}


//Exercicio 6
function trocaIMG(tipo){
    img = document.getElementById("imgEx06");
    switch(tipo) {
        case "bike":
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQ1QxmdvslqgpyRashWSdKy3djANzMot6JQ&s";
            break;
        case "carro":
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgE9A_3vC03JT2nst-e2G5eHC_szwkjjNubw&s";
            break;
        case "moto":
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3EBeA_CgTOEqPht2lwL_JUeTysgs85ezsQ&s";
            break;
        case "onibus":
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTNhQrjoSDNpkLgwowLK_75_Vek1B7jUXug&s";
            break;
        default:
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqRBVV5Y_SHl9E281N4EsruKsZDQLg934mQ&s";
    }
}