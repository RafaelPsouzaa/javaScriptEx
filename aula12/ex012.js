var horAtual = new Date();
var hora = horAtual.getHours();
console.log(`Agora sao extamente ${hora}horas`);
if(hora < 12) {
    console.log('Bom Dia')
} else if(hora <=18){
    console.log('Boa Tarde')
}else{
    console.log('Boa Noite')
}