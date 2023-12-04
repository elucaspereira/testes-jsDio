/* Faça um algoritimo que dado o peso e altura de uma pessoa calcule o IMC e 
mostre sua condição de acordo com a tabela
IMC 
MENOR QUE 16,9: MUITO ABAIXO DO PESO
ENTRE 17 A 18,4: ABAIXO DO PESO
ENTRE 18,5 A 24,9: PESO NORMAL
ENTRE 25 A 29,9: ACIMA DO PESO
ENTRE 30 A 34,9 OBESIDADE GRAU I
ENTRE 35 A 40 OBESIDADE GRAU II
MAIOR QUE 40 OBESIDADE GRAU III

PESO/(ALTURA * ALTURA)
*/
let altura = 1.55;
let peso = 50;

let imc = Number.peso / (Number.altura * Number.altura);


if(imc <= 16){
    console.log(`Seu IMC é de ${imc.toFixed(1)} você está: Muito abaixo do Peso`);
}else if( imc > 17 && imc <= 18.4){
    console.log(`Seu IMC é de ${imc.toFixed(1)} você está: Abaixo do peso`);
}else if(imc > 18 && imc <= 24){
    console.log(imc);
}else{
    console.log('aqui');
}
