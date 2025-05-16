// Sabemos que o addEventListener é um ouvinte que fica ouvindo um clique de um botao
// Se acontecer algo com aquele botao, podemos fazer algo

// Ele é parecido com o onSetListener

// Exemplo a baixo

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});

// Podemos reparar nesse exemplo que temos um botao no HTML com a Id chamada de meuBotao
// Quando a gente clicar nesse botao vamos gerar uma mensagem no console.



// ATENÇAO NO NOSSO CODIGO USAMOS OS 2 o addEventListener e também o onClick
// Usando o addEventListener não precisamos usar o onClick e vice-versa.