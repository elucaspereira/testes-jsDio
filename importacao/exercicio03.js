/*
FAÇA UM PROGRAMA QUE CAUCULE E IMPRIMA O SALARIO A SER TRANSFERIDO PARA UM FUNCIONARIO
PARA REALIZAR O CAUCULO RECEBA O VALOR BRUTO DO SALARIO E O ADICIONAL DOS BENEFICIOS
O SALARIO A SER TRANSFERIDO É CALCULADO DA SEGUINTE MANEIRA

VALOR BRUTO - PERCENTUAL DE IMPOSTO MEDIANTE A FAIXA SALARIAL + ADICIONAL DE BENEFICIOS

ALICOTAS: 
DE R$ 0.00 A R$ 1100.00 = 5%
DE R$ 1100.00 A R$ 2500.00 = 10%
MAIOR QUE R$ 2500.00 = 15% 
*/

const {gets, print} = require('./funcoes-aux ex03');

const valorSalarioBruto = gets();
const valorAdicionalDosBeneficios = gets();

function pegarPercentualComBaseNoSalario(salario){
    if(salario > 0 && salario <= 1100){
        return 5;
    }else if(salario > 1100 && salario <= 2500){
        return 10;
    }else{
        return 15;
    }

    
}

function calculaPorcentagem(valor,percentual){
    return  valor * (percentual/100)
}



function salarioATransferir(salario,percentual,adicional){
    return salario - percentual + adicional; 
}

const aliquota = pegarPercentualComBaseNoSalario(valorSalarioBruto)

const valorImposto = calculaPorcentagem(valorSalarioBruto, aliquota)

const valorATasferir = valorSalarioBruto - valorImposto + valorAdicionalDosBeneficios

print(valorATasferir)

