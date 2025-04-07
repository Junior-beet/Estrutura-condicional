let valorCompra = perseFloat(prompt("Insira o valor da sua compra"))
let valorDesconto = valorCompra*0.1
let valorDescontado = valorCompra - valorDesconto

if (isNaN(valorCompra)){
    alert("Voce não inseriu um valor válido")
}

if (valorCompra >= 100){
    alert ('Voce ganhou um desconto de 10% por que sua conta passou de 100 reais, o valor do desconto é $ {valorDesconto} e o valor final é ${valorDescontado}')
}

if (valorCompra <100){
    alert ("Hoje não tem desconto");
}
// O codigo foi desenvolvido para informar o usuario se ele teve desconto na compra ou não, o desconto informado pelo mercado foi de 10% apos o valor da compra atingir 100 reais.