const dregex = /\d/;
console.log('d');
console.log(dregex.test("asd"));
console.log(dregex.test(" "));
console.log(dregex.test("123"));
console.log(dregex.test("123asd"));
const Dregex = /\D/;
console.log('D');
console.log(dregex.test("asd"));
console.log(dregex.test(" "));
console.log(dregex.test("123"));
console.log(dregex.test("123asd"));

const dia = /\d\d/;
console.log("testes mais rigoros");
console.log(dia.test("2019")&& "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2)
console.log(dia.test("asd123"));

const palavraTresLetras = /\w\w\w/;
console.log("testes string 3 letras")
console.log(palavraTresLetras.test("as"));
console.log(palavraTresLetras.test("asdxx"));
console.log(palavraTresLetras.test("asd123"));

