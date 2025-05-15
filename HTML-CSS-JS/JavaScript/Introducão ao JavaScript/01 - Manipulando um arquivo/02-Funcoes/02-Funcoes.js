// FUNÇÃO BASICA

    function hello() {
        console.log("Hello World");
    }

// FUNÇÃO COM PARAMETRO

    let anoNascimento = 1994;

    function calcularIdade(anoNascimento) {
        console.log("Você tem: " + anoNascimento);
    }

// FUNÇÃO COM RETORNO
    function calcularIdade(anoNascimento) {
        let anoAtual = 2023;
        let idade = anoAtual - anoNascimento;
        return idade;
    }

    let idade = calcularIdade(anoNascimento);
    console.log(idade);

// FUNÇÃO ANONIMA 
    let soma = function (a, b) {
        return a + b;
    }

    console.log(soma(10, 20));

// FUNÇÃO ARROW

    let soma2 = (a, b) => {
        return a + b;
    }

    console.log(soma2(10, 20));

// FUNÇÃO ARROW SIMPLIFICADA
    let soma3 = (a, b) => a + b;

    console.log(soma3(10, 20));

// FUNÇÃO COM PARAMETRO DEFAULT
    let soma4 = (a, b = 0) => a + b;

    console.log(soma4(10)); // 10
    console.log(soma4(10, 20)); // 30

// FUNÇÃO COM PARAMETRO REST
    let soma5 = (...numeros) => {
        let total = 0;
        for (let i = 0; i < numeros.length; i++) {
            total += numeros[i];
        }
        return total;
    }

    console.log(soma5(10, 20, 30)); // 60
    console.log(soma5(10, 20, 30, 40)); // 100

// FUNÇÃO COM PARAMETRO REST E DESESTRUTURACAO
    let soma6 = (a, b, ...numeros) => {
        let total = a + b;
        for (let i = 0; i < numeros.length; i++) {
            total += numeros[i];
        }
        return total;
    }

    console.log(soma6(10, 20, 30)); // 60
    console.log(soma6(10, 20, 30, 40)); // 100