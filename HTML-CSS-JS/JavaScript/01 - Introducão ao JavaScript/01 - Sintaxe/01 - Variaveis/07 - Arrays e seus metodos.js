// Array é uma lista que o primeiro item começa sempre com 0
// Declarando um array
    let array = ["Alleph", "Fernanda", "Crixus"]

// Adicionando membro no array
    array.push("Amora")
    array.push("Joaquim")

// Removendo um elemento
    array.pop("Joaquim")

// Olhando o tamanho do array
    console.log(array.length)

// Meu array tem 4 elementos
    // Vamos acesar o ultimo que no caso começa com 0 então seria o 3
    console.log(array[3])

// Imprimindo todos os elementos
    console.log(array)


// POP - shift - REMOÇÃO
    // Pop se você nao passar o elemento, ele vai remover o ultimo
    // shift ele vai remover o primeiro

    // POP

    console.log(array.pop()) // Remove o ultimo elemento // AMORA

    // shift
    console.log(array.shift()) // Remove o primeiro elemento // ALLEPH

    console.log(array) // Agora restou apenas: Fernanda e Crixus



// unshift - Adição
    console.log(array.unshift("Alleph Nogueira")) // Adiciona no começo da lista
    console.log(array) 

// Fazendo um loop no meu array
    // Aqui vamos ver tudo que tem dentro de cada indice.
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }


// Pesquisar um item dentro do array
    console.log(array.includes("Alleph Nogueira"))


// Verificar os itens
    console.log(array.every(item => item === "Alleph Nogueira")) // Todos os itens igual a Alleph Nogueira?
    console.log(array.some(item => item === "Alleph Nogueira")) // Tem item igual a Alleph Nogueira?


    // PESQUISE SOBRE OS METODOS EM JS, TEM VARIOS METODOS.