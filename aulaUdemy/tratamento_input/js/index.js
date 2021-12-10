function checarNumero(numero){
    let number = Number(numero);
    if(Number.isNaN(number)){
        console.log("insira apenas numeros");
    }
    else{
        return console.log("numero inserido "+number);
    }
}

checarNumero(5)