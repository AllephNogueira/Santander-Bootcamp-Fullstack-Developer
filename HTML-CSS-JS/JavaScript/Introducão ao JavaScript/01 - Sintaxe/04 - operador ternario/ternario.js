function compararNumeros (numero1, numero2) {
    // Verificando se o numero existe, caso o usuario não digite nada
    if(!numero1 || !numero2) return 'Numeros não exitem' // Assim que verificamos se os numeros são nulos


    const saoIguais = numero1 === numero2 // Comparando os numeros e retornando um verdadeiro ou falso

    if(saoIguais){
        return "Verdadeiro"
    }

    return saoIguais ? "São iguais" : "Não sao iguais." // Operador ternario, onde vamos verificar, se for verdadeiro vamos cair na casa 1.
    // Se for falso vamos cair na casa 2.
    // É exatamente igual um IF. ideal parpa comparar apenas 2 valores.
}

function compararNumerosComTernario(numero1, numero2) {
    const compararNumero = numero1 === numero2
    return compararNumero ? "Verdadeiro" : "Falso" // Se for verdadeiro caimos na casa 1, se for falso caimos na segunda.
}

console.log(compararNumeros())
console.log(compararNumerosComTernario(10,12))