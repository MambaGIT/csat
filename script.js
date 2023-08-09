const urlParams   = new URLSearchParams(window.location.search);
const lead        = urlParams.get("l");
const mensalidade = urlParams.get("m");
const avaliacao   = urlParams.get("a");

//SET LEAD///////////////////////////////
if (lead && lead.trim() !== "") {
    document.getElementById("lead").value = lead; 
}else{
    document.getElementById("lead").value = "sem nome"; 
}

//SET MENSALIDADE///////////////////////////////
if (mensalidade && mensalidade.trim() !== "") {
    document.getElementById("mensalidade").value = mensalidade; 
}else{
    document.getElementById("mensalidade").value = "sem nome"; 
}

//SET AVALIACAO///////////////////////////////
if (avaliacao && avaliacao.trim() !== "") {
    document.getElementById("avaliacao").value = avaliacao; 
}else{
    document.getElementById("avaliacao").value = "sem nome"; 
}

// Função para atualizar o valor da variável global e exibir no console
let valorDoBotao = 0;

function atualizarValor(valor) {
    localStorage.setItem("Nota", valor);
    valorDoBotao = valor;
    console.log('Valor do botão clicado:', valorDoBotao);
    // Verifica se o botão de envio deve ser exibido ou ocultado
    document.getElementById("botao_envio").style.visibility = (valorDoBotao > 0) ? "inherit" : "hidden";
    document.getElementById("botao_envio").classList.add('animacao_envio');
}

// Função para adicionar a classe de animação ao elemento
function adicionarAnimacao(classeAnimacao) {
    const elemento = document.getElementById('ponteiro');
    elemento.classList.remove(...elemento.classList); // Remova classes de animações anteriores, se houver
    elemento.classList.add(classeAnimacao);
}

// Event listeners para cada botão
document.getElementById('star1').addEventListener('click', function () {
    atualizarValor(1);
    console.log("1");
    document.getElementById("nota").value = 1;
});

document.getElementById('star2').addEventListener('click', function () {
    atualizarValor(2);
    console.log("2");
    document.getElementById("nota").value = 2;
});

document.getElementById('star3').addEventListener('click', function () {
    atualizarValor(3);
    console.log("3");
    document.getElementById("nota").value = 3;
});

document.getElementById('star4').addEventListener('click', function () {
    atualizarValor(4);
    console.log("4");
    document.getElementById("nota").value = 4;
});

document.getElementById('star5').addEventListener('click', function () {
    atualizarValor(5);    
    console.log("5");
    document.getElementById("nota").value = 5;
});