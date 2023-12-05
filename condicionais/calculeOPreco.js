/*ELABORE UM ALGORITIMO QUE CALCULE O VALOR A SER PAGO EM UM PRODUTO, CONSIDERANDO O PREÇO 
DA ETIQUETA E A FORMA DE PAGAMENTO DESEJADA.


CONDIÇÕES DE PAGAMENTO:
1- À VISTA DÉBITO: 10% DE DESCONTO;
2- À VISTA NO DINHEIRO OU PIX: 15% DESCONTO;
3- EM ATE 2X PREÇO NORMAL;
4- ACIMA DE 2X: ACRESSIMO DE 10%
*/

let nomeProduto = 'Monitor LG 19,5 polegadas';
let preco = 450.25;

//calcula o desconto do pagamento debito
function pagDebito(){
    desconto = preco * (10/100);
    totPagar = preco - desconto;
    console.log(`O valor a ser Pago com desconto de 10% é: R$ ${totPagar.toFixed(2)} à vista no Débito`);
}
//calcula o desconto do pagamento a vista e pix
function pagInstantaneo(){
    desconto = preco * (15/100);
    totPagar = preco - desconto;
    console.log(`O valor a ser Pago com desconto de 15% é: R$ ${totPagar.toFixed(2)} à vista Dinheiro/pix`);
}
//calcula o valor da parcela em 2
function pagParcelado2x(){
    totPagar = preco
    console.log(`O valor a ser  é: R$ ${totPagar.toFixed(2)} parcelado pela loja em 2x`);
}
function pagParcelado(){
    acrescimo = preco * (10/100);
    totPagar = preco + acrescimo;
    console.log(`O valor a ser Pago com acréssimo de 10% é: R$ ${totPagar.toFixed(2)} parcelado loja`);
}
//selecione uma forma de pagamento de acordo com as opçoes acima
const condicaoPagamento = 10;

if(condicaoPagamento < 1 || condicaoPagamento > 4){
    console.log('Forma de pagamento invalida Verifique')

}else if(condicaoPagamento === 1){
    return pagDebito()

}else if(condicaoPagamento === 2){
    return pagInstantaneo()

}else if(condicaoPagamento === 3){
    return pagParcelado2x() 

}else{
    return pagParcelado()
}