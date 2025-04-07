let numero = parseInt(prompt("Insira um número"));

if (isNaN(numero)){
    alert("Insira um número")
}

if (numero % 5 == 0) { 
    alert("Seu número é múltiplo de 5")
}

if (numero % 5 != 0) { 
    alert("Seu número não é múltiplo de 5")
}
// Esse codigo foi criado para saber se um numero é multiplo de 5, para isso ultilizamos o seguinte calculo (% 5 ==0).