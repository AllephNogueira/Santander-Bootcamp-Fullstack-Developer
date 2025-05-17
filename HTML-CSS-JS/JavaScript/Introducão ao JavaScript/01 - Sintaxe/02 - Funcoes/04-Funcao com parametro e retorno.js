function receberNumerosEComparar(numero1, numero2) {

    let mensagem = ""

    if(numero1 == numero2){
        mensagem += "Numeros iguais\n"
    }else {
        mensagem += "Numeros diferentes\n"
    }

    let total = numero1 + numero2
    if(total >= 10 && total <= 20) {
        mensagem += "A soma esta entre 10 e 20\n"
    }else{
        mensagem += "Soma inferior a 10 ou superior a 10\n"
    }

    return mensagem
}


// Perceba que estamos acumulando o valor dentro de mensagem.
// Estamos também usando uma quebra de linhas

console.log(receberNumerosEComparar(10,8))