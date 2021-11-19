class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(saque){
        this.saldo -= saque;
    }

}

let bradesco = new Conta(500);
bradesco.deposito(2000);
bradesco.saque(500);
console.log(bradesco.saldo);