// 1 CAPTURAR O TEXTO DO USUARIO
// 2 ADICIONAR O TEXTO A LISTA
// 3 LIMPAR O CAMPO DO INPUT TEXT
// 4 RISCAR TAREFAS DA LISTA

function capturarTexto() {
    // 1 Capturando o texto que o usuario digitou
    // Lembrar que para capturar precisamos usar um botao.
    // Quando clicamos no botao fazemos a leitura do input do usuario
    const input = document.getElementById("eventoList");
    const valorDigitado = input.value;


    adicionandoTextoNaLista(valorDigitado)

    limparTexto()

}

function adicionandoTextoNaLista(texto){
    // CAPTURANDO A UL DA LISTA
    const ul = document.querySelector('#minha-lista ul') 

    // CRIANDO UM NOVO ELEMENTO LI PARA A LISTA
    const li = document.createElement('li');

    // TEXTO QUE VAMOS ADICONAR A LISTA
    li.textContent = texto

    // ADICIONANDO A LI DENTRO DA UL
    ul.appendChild(li)

    alert('Item adicionado a lista!')

}

function limparTexto(){
    /*  O correto é usar a propriedade .value, pois é ela que representa o valor digitado pelo usuário em um input. */
    document.getElementById('eventoList').value = ''

    /* .innerHTML serve para elementos que contêm HTML interno, como <div>, <p>, etc. */
}


function riscarTarefa(botao) {
    const li = botao.parentElement; // pega o <li> do botão
    li.classList.toggle('feito');   // adiciona/remove classe 'feito'
}