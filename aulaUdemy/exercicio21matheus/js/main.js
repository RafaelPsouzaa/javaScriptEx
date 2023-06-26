function tipoVariavel(variavel){
    if(typeof variavel === 'string'){
        console.log("Este dado é uma String");
    }else if(typeof variavel === 'number'){
        console.log('este dado e um Number');
    }else{
        console.log('este dado é um boolean');
    }
};

tipoVariavel(2);
tipoVariavel('rafael');
tipoVariavel(2.345);
tipoVariavel(true);

