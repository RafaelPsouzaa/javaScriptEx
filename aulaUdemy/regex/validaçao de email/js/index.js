const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("marksmancicone@gmail.com"));
console.log(validarEmail.test("marksmanciconegmail.com"));
console.log(validarEmail.test("marksmancicone@gmailcom"));
console.log(validarEmail.test("marksmanciconegmailcom"));


