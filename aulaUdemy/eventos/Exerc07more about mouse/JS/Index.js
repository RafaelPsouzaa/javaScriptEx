let btn1 = document.querySelector('#btn1');

btn1.addEventListener("mousedown",function(){
    console.log("apertou um botão");
});
btn1.addEventListener("mouseupn",function(){
    console.log("apertou um botão");
});

btn2.addEventListener("dblclick",function(){
    console.log("clicou duas vezes");
});
btn2.addEventListener("contextmenu",function(e){
        e.preventDefault();
        console.log("Botão direito");

});