/*
1 - Crie uma classe para representar carros 
os carros possuem marca, modelo, cor, ano, motorização e o gasto medio por km percorrido.
Crie um metodo que daado a quantidade de quilometro e o preço do combustivel calcule o gasto para 
realizar determinado percurso*/
class Viagem{
    constructor(origem, destino, kmTotal, valMedioComb){
        this.origem = origem;
        this.destino = destino;
        this.kmTotal = kmTotal;
        this.valMedioComb = valMedioComb;
    }
};

class Carro {
    constructor(marca, modelo, ano, motorizacao, mediaPorLt) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motorizacao = motorizacao;
        this.mediaPorLt = mediaPorLt;
    }
};
let carro = new Carro(
    'volksvagem',
    'Polo',
    '2006',
    1.6,
    12
);

let viagem1 = new Viagem(
    'Rolim de MOura - RO',
    'Cuiaba - MT',
    1000,
    6.38

);
function calculaDespesa(){

    totalDespesas = viagem1.kmTotal  / carro.mediaPorLt * viagem1.valMedioComb
    console.log(`A sua viagem para ${viagem1.destino} tera um gasto com combustivel de R$ ${totalDespesas.toFixed(2)}`)
}
calculaDespesa()



