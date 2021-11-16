let arrayCheck = ['Rafael','Bryan','Edmundo','Gerusa','Reynan'];

function seachInArray(vari){
    for(i =0;i < arrayCheck;i++){
        if(vari == arrayCheck){
            console.log(`pesquisa encontrada${vari}`);
        }else{
            console.log('pesquisa nao encontrada');
        }
    }
}

const foundArray = arrayCheck.find(nome=> nome.startsWith("R"))
