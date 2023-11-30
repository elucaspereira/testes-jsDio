const combEtanol = 4.98;
const combGasolina = 6.39;
let utilizaEtanol = false;

const mediaPorlitro = 13.6;

const distanciaTotal = 800;

let qntdLitrosCombs = distanciaTotal / mediaPorlitro;

if(utilizaEtanol == true){
     totViagem = qntdLitrosCombs * combEtanol
}else{
    totViagem = qntdLitrosCombs * combGasolina
}

console.log(`O valor necessario para os gastos de combustivel sera de ${totViagem.toFixed(2)}`);