class Endereco {
    constructor(rua,cep,bairro){
        this.rua = rua;
        this.cep = cep;
        this.bairro = bairro;

    }
     set newEndereco(editBairro){
        this.bairro = editBairro;

    }
    set newRua(editRua){
        this.rua = editRua;

    }
     set newCep(editCep){
        this.cep = editCep;

    }

}

let endereco = new Endereco("rua imip",5643211,"coelhos");
console.log(endereco.bairro);
endereco.newEndereco("mangabeira");
console.log(endereco.bairro);
