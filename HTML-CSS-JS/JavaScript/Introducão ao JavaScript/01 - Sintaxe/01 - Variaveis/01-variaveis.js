var nome = "Alleph"; // Var pode ser uma variavel global
let idade = 20; // Let é uma variavel que usamos dentro de um bloco | Ela só funciona dentro do bloco que foi declarada.
const SIGNO = "Aries"; // Constante é algo que não muda

console.log(nome);

// Exemplo a baixo

var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // Redeclaramos a variavel, agora ela passa a ser 11
    let b = 22;

    console.log(a) // 11
    console.log(b) // 22
}

console.log(a) // 11
console.log(b) // 2

// EXPLICAÇÃO
// No JS podemos redeclarar a variavel, o A apos a gente recriar ela, ela vai receber outro valor
// VAR podemos redeclarar, let não.
// Ja no Kotlin seria outra variavel.