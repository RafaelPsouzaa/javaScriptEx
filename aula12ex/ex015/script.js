function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[erro] verifique seus dados')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if(fsex[0].checked){
           genero = 'Homem'
           if(idade>=0 && idade <=10){
            img.setAttribute('src','baby-man.png')
           }else if (idade < 21) {
            //jovem
            img.setAttribute('src','jovem-homem.png')
           }else if (idade < 50){
            //adulto
            img.setAttribute('src','adult-man.png')
           }
           else{
               img.setAttribute('src','oldman.png')
           }

       }
       else if (fsex[1].checked){
           genero = 'Mulher'
           if(idade>=0 && idade <=10){
            img.setAttribute('src','baby-female.png')

        }else if (idade < 21) {
         //jovem
         img.setAttribute('src','young-woman.png')
        }else if (idade < 50){
         //adulto
         img.setAttribute('adul-woman1.png')
        }
        else{
            //idoso
            img.setAttribute('src','idoso-mulher.png')
        }
       }
       res.style.texAlign = 'center'
       res.innerHTML= (`detectamos uma ${genero} com ${idade}anos`)
       res.appendChild(img)
    }
}