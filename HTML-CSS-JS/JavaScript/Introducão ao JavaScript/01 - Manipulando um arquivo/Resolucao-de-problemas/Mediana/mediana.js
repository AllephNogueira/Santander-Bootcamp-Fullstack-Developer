// Criar um array com 10 numeros
let numeros = [10,25,30,2,5,1,4,3,2,8,9,10,11,14]

let arrayOrdenado = numeros.sort((a, b) => a - b); // Ordena o array em ordem crescente

console.log(arrayOrdenado);

if (numeros.length % 2 === 0) { // Verifica se o tamanho do array é par
    console.log("O array possui um número par de elementos.");
    /* Falta fazer aqui, devemos pegar os 2 valores do meio, somar e dividir por 2. */

    let valor1 = parseInt(arrayOrdenado.length /2 -1) // Aqui vamos ter o primeiro indice

    let valor2 = parseInt(arrayOrdenado.length /2) // Aqui vamos ter o segundo indice

    // Agora devemos calcular

    let calculo = (arrayOrdenado[valor1] + arrayOrdenado[valor2]) / 2;
    console.log(calculo); 
    

    
}else {
    console.log("O array possui um número ímpar de elementos." + arrayOrdenado.length);    
    let meio = parseInt(arrayOrdenado.length / 2); // Calcula o meio do array - Trazendo ele também para um valor inteiro, pq estavamos com o erro pq vinha o valor 6.5
    let mediana = arrayOrdenado[meio]; // A mediana é o elemento do meio
    console.log("A mediana é: " + mediana);
    //FIM

}