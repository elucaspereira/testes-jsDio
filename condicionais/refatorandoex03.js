let notas = [];

let condicao = ['Reprovado', 'Recuperação', 'Aprovado'];


notas.push(6,8,5);

let totalGeral = 0;
for(i = 0; i < notas.length; i++){
    totalGeral += notas[i];
    media = 10.2//totalGeral / notas.length   
}

if(media < 0 || media > 10){
    console.log('[ERRO] O valor não é  valido: Verifica as notas lançadas')
}else if(media <= 5){
    console.log(`Sua media é de: ${media.toFixed(2)} sua classificação é ${condicao[0]}`);
}else if(media > 5 && media < 7){
    console.log(`Sua media é de: ${media.toFixed(2)} sua classificação é ${condicao[1]}`);
}else{
    console.log(`Sua media é de: ${media.toFixed(2)} sua classificação é ${condicao[2]}`);
}
    



