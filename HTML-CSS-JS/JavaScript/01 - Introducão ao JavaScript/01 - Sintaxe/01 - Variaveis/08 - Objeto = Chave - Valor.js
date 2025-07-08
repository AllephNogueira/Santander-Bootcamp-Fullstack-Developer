// Objeto são chaves e valores, podemos lembrar do MAP, do PutExtras...

let objeto = {} // Inicializando
console.log(typeof objeto)

// Adiconando valor no objeto
// Chave = nome
// Valor = Alleph
objeto.nome = "Alleph"

// Adicionando mais chaves
objeto.idade = 31

console.log(objeto)


// Agora olhando os valores desse objeto    
    console.log(Object.values(objeto))

// Agora olhando as chaves
    console.log(Object.keys(objeto))

// Agora construindo um objeto
    let dados = {
        nome: "Alleph",
        sobrenome: "Nogueira",
        endereco: "Travessa Duarte Branco",
        numero: "26"
    }

    console.log(dados)

    // Acessando cada elemento de forma separada
    // Duas formas de retornar
    console.log(dados.nome)
    console.log(dados["sobrenome"])

    // Criando uma nova chave
    dados.quantidadeDeFilhos = 0 // Dessa forma criamos uma nova chave
    dados["quantidadeDeAfilhados"] = 2 // Outra forma de criar.

    // Criando uma nova chave usando uma variavel
    let mae = "Valeria" // Criamos uma variavel
    dados["Mae"] = mae // Criando a chave mae e adicionando oque tem dentro da variavel

    console.log(dados)
