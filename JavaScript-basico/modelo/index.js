function contar() {
    var msg =  document.getElementById('msg');
    var ini =  document.getElementById('inicio')
    var fim =  document.getElementById('fim')
    var passo = document.getElementById('passo')
   

    if(ini.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0){
     msg.innerHTML = 'impossivel contar'
    }else {
        msg.innerHTML = 'contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i< f ){
            for(let c =i; c <= f; c += p){
                msg.innerHTML += `${c}  \u{1f92c}`
            }
            msg.innerHTML += `${c}  \u{1f3c1}`
        }else{
            for(let c =i; c >= f; c -= p){
                msg.innerHTML += `${c}  \u{1f92c}`
        }
        msg.innerHTML += `${c}  \u{1f3c1}`

    }

    }
    }
