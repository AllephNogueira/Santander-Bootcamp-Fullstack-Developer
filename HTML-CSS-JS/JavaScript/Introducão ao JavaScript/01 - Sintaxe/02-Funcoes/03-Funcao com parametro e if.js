function receberNumerosEComparar(numero1, numero2) {
    if(numero1 == numero2){
        console.log("Numeros iguais")
    }else {
        console.log("Numeros diferentes.")
    }

    let total = numero1 + numero2
    if(total >= 10 && total <= 20) {
        console.log("Sucesso: A soma esta entre 10 e 20")
    }else{
        console.log("Soma inferior ou superior")
    }
}

// Quando a função nao retorna nada, nao precisamos chamar o console.log para ela

receberNumerosEComparar(10,8)

// Quando ela retorna algo, ai sim temos que chamar.