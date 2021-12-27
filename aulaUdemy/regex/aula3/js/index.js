const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("aqui tem teste a"));

const notToaz = /[^a-z]/;
console.log("a-z");
console.log(notToaz.test("123"));
console.log(notToaz.test("asdflçaskdfjslçakdfkçdjh"));
