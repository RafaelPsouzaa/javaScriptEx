let num = document.querySelector("input#fnum");
let lista = document.querySelector('select#flist');
let res  = document.querySelector('div#res');
let valores = [];

function isNumero(n){
    if(Number(n)>=1 && Number(n) <= 100){
        return true 
    }else {
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true

    }else{
        return false
    }

}

function analyze(){
     if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado `
        lista.appendChild(item)
        res.innerHTML = '';
        
        
     }else{
        window.alert('valor inválido ou ja encontrado na lista.');
     }
     num.value = '';
     num.focus();

};
function finalizar(){
    if(valores.length == 0 ){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores){
           soma += valores[pos];
           if(valores[pos] > maior){
            maior = valores[pos];
            console.log("maior" + maior);
           }if(valores[pos] < menor){
            menor = valores[pos]
        }
        console.log("menor" + menor);
        }
        media = soma /tot;
        
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos </p>`
        res.innerHTML += `<p>seu maior valor foi ${maior}  </p>`
        res.innerHTML += `<p>seu menor valor foi ${menor}  </p>`
        res.innerHTML += `<p>total da soma foi:  ${soma}  </p>`
        res.innerHTML += `<p> media foi:  ${media} </p>`

    }
};