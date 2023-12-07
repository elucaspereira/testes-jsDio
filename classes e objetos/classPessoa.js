/*Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura
as Pessoas devem ter a capacidade de dizar o valor do se imc
Instancie uma pessoa, e peca para dizer o calor do seu imc*/
class Pessoa {

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    geraImc(peso,altura){
       return peso / (altura * altura);
        
    }
}
let pessoa = new Pessoa(
    'Lucas',
    50,
    1.55,

)
console.log(pessoa.geraImc(pessoa.peso,pessoa.altura))