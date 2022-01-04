const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validaUsuario.test("rafael-foda123"));