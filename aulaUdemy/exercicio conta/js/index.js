class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(saque){
        this.saque -= this.deposito;
    }

}

let bradesco = new Conta(500);
bradesco.deposito(2000);
console.log(bradesco);