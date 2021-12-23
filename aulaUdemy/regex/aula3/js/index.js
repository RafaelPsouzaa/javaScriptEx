const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("aqui tem teste a"));

const nottoaz = /[^a-z]/;
console.log("a-z");
console.log(nottoaz.test("123"));
console.log(nottoaz.test("asdflçaskdfjslçakdfkçdjh"));
