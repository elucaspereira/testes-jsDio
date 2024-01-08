/* 2- faça um programa que receba n quantidade de numeros e seus respectivos valores  e
imprima o maior numero par e o menor numero impar*/

const {gets, print} = require('./funcoes-aux ex02');

const n = gets();
let maiorNumPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if(numero % 2 === 0){

        if(maiorNumPar === null || numero > maiorNumPar){
            maiorNumPar = numero
        }

    }else{
        if(menorNumeroImpar === null ||numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        
    }
    
}
}
print('Maior numero par: ' + maiorNumPar)
print('Menor numero Impar: ' + menorNumeroImpar)