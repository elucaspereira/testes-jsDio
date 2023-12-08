/*Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura
as Pessoas devem ter a capacidade de dizar o valor do se imc
Instancie uma pessoa, e peça para dizer o valor do seu imc*/
class Pessoa {

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    geraImc(peso,altura){
       return this.peso / (this.altura * this.altura);
        
    }
    classificaImc(){
        const imc = this.geraImc();
        
        if(imc <= 16){
            return(`Tenho IMC de ${imc.toFixed(2)} e estou Muito abaixo do Peso`);
        }else if( imc > 17 && imc <= 18.40){
            return(`Tenho IMC de ${imc.toFixed(2)} e estou Abaixo do peso`);
        }else if(imc >= 18.5 && imc <= 24.99){
            return(`Tenho IMC de ${imc.toFixed(2)} e estou com Peso normal`);
        }else if(imc >= 25 && imc <= 29.99){
            return(`TenhoIMC de ${imc.toFixed(2)} e estou Acima do peso`);
        }else if(imc >= 30 && imc <= 34.99 ){
            return(`Tenho IMC de ${imc.toFixed(2)} e estou com Obesidade grau I`);
        }else if(imc >= 35 && imc <= 40 ){
            return(`Tenho IMC de ${imc.toFixed(2)} e estou com Obesidade grau II`);
        }else{
            return(`Tenho IMC de ${imc.toFixed(2)} e estou com Obesidade grau III`);
        };
        
        
        
    }
}
let pessoa = new Pessoa(
    'Lucas',
    50,
    1.55,

)
let pessoaII = new Pessoa(
    'Jorge Igor',
    80,
    1.65,
)
console.log(`Olá meu nome é ${pessoa.nome} ` + pessoa.classificaImc());
console.log(`Olá meu nome é ${pessoaII.nome} ` + pessoaII.classificaImc());
