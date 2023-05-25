function analyze(){
    let input1 = document.getElementById('cpNumber');
    let output1 = document.getElementById('seltab');
    
    if(input1.value.length == 0 ){
        window.alert('por favor,digite um numero');
    } else{
        let sai = Number(input1.value);
        let c = 1;
        output1.innerHTML = '';
        while(c <=10){
            let item = document.createElement('option');
            item.text = `${sai} x ${c} = ${sai*c} `;
            output1.appendChild(item);
            c++
        };
    }

};