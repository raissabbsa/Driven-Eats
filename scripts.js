let tituloPrato;
let tituloBebida;
let tituloSobremesa;
let total;

function selecionarPrato(classeBotao) {

    const botaoSelecionado = document.querySelector('.pratos .selecionado');

    if ( botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    const botao = document.querySelector(classeBotao);
    botao.classList.add('selecionado');

    tudoSelecionado();
}

function selecionarBebida(classeBotao) {
    const botaoSelecionado = document.querySelector('.bebidas .selecionado');

    if(botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }
    const botao = document.querySelector(classeBotao);
    botao.classList.add('selecionado');
    tudoSelecionado();
}
function selecionarSobremesa(classeBotao) {
    const botaoSelecionado =document.querySelector('.sobremesas .selecionado');

    if(botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado');
    }

    const botao = document.querySelector(classeBotao);
    botao.classList.add('selecionado');
    tudoSelecionado();
}
function tudoSelecionado() {
    const pratos = document.querySelector('.pratos .selecionado');
    const bebidas = document.querySelector('.bebidas .selecionado');
    const sobremesas = document.querySelector('.sobremesas .selecionado');
    

    if(pratos !== null && bebidas !== null && sobremesas !== null)
    {
        const botao = document.querySelector('.pedido');
        botao.innerHTML = "Fechar pedido";
        botao.classList.add('selecao');
    }
}

function final() {
    const telaFinal = document.querySelector('.tela');
    telaFinal.classList.remove('escondido');

    const prato = document.querySelector('.pratos .selecionado .valor p');
    const valorPrato = Number(prato.innerHTML);

    const bebida = document.querySelector('.bebidas .selecionado .valor p');
    const valorBebida = Number(bebida.innerHTML);

    const sobremesa = document.querySelector('.sobremesas .selecionado .valor p');
    const valorSobremesa = Number(sobremesa.innerHTML);
    
    total = valorPrato + valorBebida + valorSobremesa;
    const precoTotal = document.querySelector('.total .preco');
    precoTotal.innerHTML = "R$ " + total.toFixed(2);


    const textoPrato = document.querySelector('.pratos .selecionado h3');
    tituloPrato = document.querySelector('.pedidoPrato .titulo');
    tituloPrato.innerHTML = textoPrato.innerHTML;
    const precoPrato = document.querySelector('.pedidoPrato .preco');
    precoPrato.innerHTML = valorPrato.toFixed(2);

    const textoBebida = document.querySelector('.bebidas .selecionado h3');
    tituloBebida = document.querySelector('.pedidoBebida .titulo');
    tituloBebida.innerHTML = textoBebida.innerHTML;
    const precoBebida = document.querySelector('.pedidoBebida .preco');
    precoBebida.innerHTML = valorBebida.toFixed(2);

    const textoSobremesa = document.querySelector('.sobremesas .selecionado h3');
    tituloSobremesa = document.querySelector('.pedidoSobremesa .titulo');
    tituloSobremesa.innerHTML = textoSobremesa.innerHTML;
    const precoSobremesa = document.querySelector('.pedidoSobremesa .preco');
    precoSobremesa.innerHTML = valorSobremesa.toFixed(2);

    const pratoMudar = document.querySelector('.pratos');
    pratoMudar.classList.add('semClique');
    const sobremesaMudar = document.querySelector('.sobremesas');
    sobremesaMudar.classList.add('semClique');
    const bebidaMudar = document.querySelector('.bebidas');
    bebidaMudar.classList.add('semClique');
}

function finalizar() {
    let nome = prompt("Qual o seu nome?");
    let endereco = prompt("Qual o seu endereço?");

    let texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${tituloPrato.innerHTML}
    - Bebida: ${tituloBebida.innerHTML}
    - Sobremesa: ${tituloSobremesa.innerHTML}
    Total: R$ ${total}
    
    Nome: ${nome}
    Endereço: ${endereco}`;


    let encoded = encodeURIComponent(texto);
    let linkWhats = "https://wa.me/5585981953543?text=" + encoded;
    window.location.href = linkWhats;
}

function cancelar() {
    const esconder = document.querySelector('.tela');
    esconder.classList.add('escondido');
}