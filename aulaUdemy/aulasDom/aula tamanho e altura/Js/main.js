let  elemento = document.querySelector('#titulo-principal');

console.log('largura:'+ elemento.offsetWidth);//considera as bordas 
console.log('largura:'+ elemento.offsetHeight);

console.log('largura:'+ elemento.clientWidth);//nao considera as bordas
console.log('largura:'+ elemento.clientHeight);