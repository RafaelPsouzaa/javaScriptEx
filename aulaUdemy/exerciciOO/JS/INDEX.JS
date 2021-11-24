class conta {
    constructor(nome,saldo,valor){
        this.saldo = saldo;
        this.nome = nome;
        this.valor = valor;
    }
    deposito(deposito){
        this.deposito = deposito;
        return deposito;
    }

    saque(saque){
        this.saque = saque;
    }
    
}

let bradesco = new conta("rafael,",890,0);
console.log(bradesco);
console.log(bradesco.saque(90));