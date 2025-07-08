// Formas de atribuir valor a uma variavel string

    let nome = "Alleph Nogueira de Oliveira"
    let nome2 = 'Alleph'


    let nome3 = `Bem vindo ${nome}`

// Aqui estamos juntando o nome=Alleph + nome3= "Bem vindo Alleph"
// Duas formas diferentes de fazer
    let nomeConcatenado = nome.concat(nome3)
    let nomeConcatenado2 = `${nome} ${nome3}`
    let nomeConcatenado3 = nome + " " + nome3
    let nomeConcatenado4 = `${nome}
    ${nome3}` // Desse jeito aqui foi a atualização do JS, fazendo dessa forma voce pode pular linha sem usar o /n

    console.log(`${nomeConcatenado3}`)

// Transformando uma string em objeto
// Dentro desse objeto, ele retorna objeto do tipo string
// E retorna tudo que tem dentro dele, como indices
// Ex indice 0 = A
// Indice 1 = l
// Indice 2 = l
    let nome4 = new String('Allephp Nogueira')
    console.log(typeof nome4)



// Pegando o indice de uma String
    console.log(nome[0]) //Saida: A
    console.log(nome.length) // 4 = Atenção indice começa sempre do 0 - Tamanho da lista começa sempre do 1.



// Separando uma frase com indices com o Split
// Dessa forma vamos poder ver todos os indices dessa variavel e oque esta dentro de cada um.
// No parametro vamos colocar os dados que queremos separar
    console.log(nome.split("")) // Saida: A, L, L, E, P, H.......
// Agora vamos separar por espaços e assim vamos "Quebrar" o indice sempre quando houver um espaço
    console.log(nome.split(" ")) // Saida: Alleph, Nogueira, de, Oliveira


// Procurar uma palavra
// Aqui estamos procurando para ver se nessa String existe essa palavra.
    console.log(nome.includes("Nogueira")) // Saida: True 


// Perguntando com qual letra começa a palavra
    console.log(nome.startsWith("A")) // Saida: True

// Perguntando com qual letra ela termina
    console.log(nome.endsWith("a")) // Saida: True


// Mudando o a pelo * com o replace
    console.log(nome.replace("a", "*")) // Saida:  Alleph Nogueir* de Oliveira | Lembrando que ele mudou apenas o a minusculo, aqui ele faz diferença de minusculo para maiusculo


// PODEMOS PESQUISAR MAIS SOBRE OS METODOS DE STRINGS, TEMOS VARIOS METODOS.