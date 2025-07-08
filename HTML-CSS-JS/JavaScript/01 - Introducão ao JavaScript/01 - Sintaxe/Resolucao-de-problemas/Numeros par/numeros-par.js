/* 
    Criar uma função que recebe uma lista de array com numeros e retornar apenas os numeros pares.
*/

function retornarNumerosPares(array){
    let numerosPares = []; // Onde vamos adicionar os numeros pares
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // Percorrer cada elemento da lista e separar os pares
            numerosPares.push(array[i]); // Push = adicionar dentro da lista
        }
    }
    return numerosPares;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Cria nossa lista com os numeros
let numerosPares = retornarNumerosPares(numeros); // Chama a funçao passando nossa lista e salvando na variavel
console.log(numerosPares); // [2, 4, 6, 8, 10] // Retorna os numeros pares.


