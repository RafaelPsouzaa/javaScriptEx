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
console.log("dd");
console.log(dia.test("201955555"));
console.log(dia.test("1989"));
console.log(dia.test("05"));
console.log(dia.test("asd191189"));

