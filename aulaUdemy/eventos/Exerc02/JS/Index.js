let btn1 = document.querySelector("#btn01");
let btn2 = document.querySelector("#btn02")
console.log(btn);
function msg(){
    console.log("clicou em mim");
}

btn01.addEventListener("click",msg);

btn02.addEventListener("click",()=>{
    btn01.removeEventListener("click",msg);
});

