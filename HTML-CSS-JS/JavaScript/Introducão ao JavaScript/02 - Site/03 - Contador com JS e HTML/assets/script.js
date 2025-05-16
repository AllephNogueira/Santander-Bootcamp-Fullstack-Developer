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


function verificarCor() {
    
    if (parseInt(numeroAtual.innerHTML) < 0) {
    numeroAtual.style.color = 'red';
    } else {
        numeroAtual.style.color = 'black'; // Volta para preto se não for negativo
    }

}
