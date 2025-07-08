// Testando verdadeiro ou falso

var numeros = 1 === 3
console.log(numeros) // Falso


var numeros = 1 < 3
console.log(numeros) // Verdadeiro

var numeros = 1 <= 3
console.log(numeros) // Verdadeiro

var numeros = 1 === 3
console.log(numeros.toString()) // Transformando em String o valor.


// Retornando o contrario do valor Bool
// Entao dessa forma vamos sempre retornar o oposto
    var numeros = 1 <= 3 // Sabemos que aqui e verdadeiro, mas vamos retornar o contrario
    console.log(!numeros) // Falso

    // Outros exemplos a baixo
    console.log(!false) // True
    console.log(!true) // Falso