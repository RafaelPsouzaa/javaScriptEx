const marcas = /marca:(nike|adidas|puma|asics)/;

console.log(marcas.test("marca:olimpus"));
console.log(marcas.test("marca:nikee"));
console.log(marcas.test("marca:123"));
console.log(marcas.test("marca:PuMa"));
