let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e){
    console.log("clicou");
}

btn1.addEventListener("click",msg);

btn2.addEventListener("click",function(e){
    console.log(e);
});

p.addEventListener("click",function(event){
    console.log("clicou no paragrafo");
});

