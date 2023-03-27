function carregar(){
    var msg = window.document.getElementById('msg');
    var img =window.document.getElementById('imagem')
    var data = new Date()
    //  var hora = new data.getHours()
    var hora = 10
    msg.innerHTML =`agora são ${hora}horas `
      if(hora >= 0 && hora <12){
        //bom dia 
        img.src = './picture/fotomanha.png'
      }else if(hora >= 12 && < 18){
        //Boa Tarde 
        img.src = './picture/fototarde.png'
      }else{
         //boa noite 
      img.src = './picture/fotonoite.png'
      
      }
       
      