const umouMaisNumeros = /\d+/;

console.log(umouMaisNumeros.test("1518"));

const naoCaracteres = /\W/;
console.log("nao caractes");
console.log(naoCaracteres.test("123"));
console.log(naoCaracteres.test(" "));
console.log(naoCaracteres.test("gfgakajdfjak"));