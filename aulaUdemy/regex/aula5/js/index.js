const cep = /\d{5}-\d{3}/;

console.log("operador preciso");

console.log(cep.test("53700-000"));
console.log(cep.test("53700-00"));
console.log(cep.test("asdf"));