let a = 1;
let b = 2;
let c = 3;

if(c>a){
    a = c++;
    debugger;
}
for(let i = 5;i > 0;i--){
    b++;
    a = a + c + 1;
    c +=2;
    debugger;
}

