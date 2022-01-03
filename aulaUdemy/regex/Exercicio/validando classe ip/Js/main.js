const ipClass =/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(ipClass.test("192.168.211.111"));
console.log(ipClass.test("192.168.8.12"));
console.log(ipClass.test("10.16.81.11"));
console.log(ipClass.test("8.8.8.8"));