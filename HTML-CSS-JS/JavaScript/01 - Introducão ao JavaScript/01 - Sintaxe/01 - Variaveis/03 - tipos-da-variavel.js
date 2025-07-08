var nome = "Alleph"
var nascimento = 1994
var meuArray = [10,20,30,40,50,60,70]

console.log(typeof(nome))
console.log(typeof nascimento)
console.log(typeof meuArray)



// Verificando se o tipo do nascimento é igual a numero.
const verificarNumber = typeof nascimento === "number"

verificarNumber ? "Verdadeiro" : "Falso"
console.log(verificarNumber)


// LEMBRAR QUE PODEMOS FAZER UMA VARIAVEL SER STRING E NO USO DO CODIGO PODEMOS ALTERAR PARA INT

var nomeESobreNome = "alleph"
console.log(typeof nomeESobreNome)

var nomeESobreNome = 1994 // Aqui estamos reatribuindo, passando agora para inteiro.
console.log(typeof nomeESobreNome)