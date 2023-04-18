function contar(){
    var msg =  document.getElementById('msg');
    var ini =  document.getElementById('inicio')
    var fim =  document.getElementById('fim')
    var passo = document.getElementById('passo')
   

    if(ini.value.length == 0 ||fim.value.length == 0 || passo.value.length == 0){
       window.alert('faltam dados!')
    }else{
        msg.innerHTML = 'contando'
        let i = Number(ini.value)
    }

}
