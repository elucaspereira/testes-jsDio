/* Faça um algoritimo que calcula as 3 notas de um aluno e calcule a 
media, mostrando em seguida a classificacao 
classificação:
Media < 5 reprovado
Media >5 e <7, recuperação
media > 7 aprovado
refatorar codigo dando imais complexibilidade, fazendo a media utilizando array, verificar se  a nota > 0
criar uma estrutura para a classificação

*/

let nota1 = 8;
let nota2 = 3;
let nota3 = 9;

let totalizaNotas = (nota1 + nota2 + nota3) / 3

if(totalizaNotas <= 5){
    console.log(`Sua média é de ${totalizaNotas.toFixed(2)}, Infelizmente vc esta Reprovado`);
}else if(totalizaNotas > 5 && totalizaNotas < 7){
    console.log(`Sua média é de ${totalizaNotas.toFixed(2)}, Infelizmente vc esta de Recuperação`);
}else{
    console.log(`Sua média é de ${totalizaNotas.toFixed(2)}, Parabens vc esta aprovado`);
}

