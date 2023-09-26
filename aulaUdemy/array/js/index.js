// function decremento(par){
//     for(let i = par;i >=0;i--){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }
// decremento(55);
// console.log(5);
const carrinho = [
    '{"nome":"Borracha","preco": 3.45}',
    '{"nome":"Caderno,"preco": 13.95}',
    '{"nome":"Kit de Lapis","preco": 41.22}',
    '{"nome":"Caneta","preco": 7.45}'
  ]
  
  const paraObjeto = x => JSON.parse(x);
  const apenasPreco = produto => produto.preco
  
  const resultado = carrinho.map(paraObjeto).map(apenasPreco)
  
  console.log(resultado)