// pegando o item do valor pelo id

var numeroAtual = document.getElementById('valor-atual')

// Fazendo a funçao de acordo com o evento

function incrementar() {
    // innerHTML é o valor que está dentro do elemento no caso seria o 0 que esta la
    // parserInt transforma o valor de string para inteiro
    // e depois soma 1
    // O inner serve para ler e para modificar o valor também
    numeroAtual.innerHTML = parseInt(numeroAtual.innerHTML) + 1
}

function decrementar() {
    numeroAtual.innerHTML = parseInt(numeroAtual.innerHTML) - 1
}






// addEventListener é um evento que escuta o que acontece no click "botao"
// Se o botao for clicado, ele vai executar a algo dentro do escopo dele.


document.getElementById('diminuir').addEventListener("click", function() {

    // Repara a diferença, aqui estamos pegando o valor do elemento e convertendo ele para inteiro.
    let numeroAtual = parseInt(document.getElementById('valor-atual').innerHTML)


    if (numeroAtual < 0) {
        // Desabilitando um botao quando chegar a baixo de 0
        // Atenção função dissabled só funciona para botoes.
        document.getElementById('diminuir').disabled = true

        let valorDaPagina = document.getElementById('valor-atual')
        valorDaPagina.style.color = 'red' // Aqui estamos mudando o elemento para a cor vermelha.
        
        
    }

})

document.getElementById('aumentar').addEventListener("click", function() { 

    // Pegando o valor do elemento e convertendo ele para inteiro.
    let numeroAtual = parseInt(document.getElementById('valor-atual').innerHTML)

    if (numeroAtual > 0) {
        // Mudando o elemento para a cor preta.
        document.getElementById('valor-atual').style.color = 'black'; // Muda a cor para preto
    }
 })

