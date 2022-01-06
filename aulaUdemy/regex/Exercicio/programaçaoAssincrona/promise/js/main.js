let p = Promise.resolve(5);

console.log("outros codigos");

console.log(p);

p.then((value)=>{console.log(`o valor ${value}`)})