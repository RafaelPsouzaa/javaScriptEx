class contaBancaria {
    constructor(saldoCc,saldoCp,juros){
        this.saldoCc = saldoCc;
        this.saldoCp = saldoCp;
        this.juros = juros;
    }
    deposit(deposito){
        let saldo = this.saldoCc;
        saldo += deposito;
        this.saldoCc = saldo;


    }

}

let conta = new contaBancaria (6000,0,10);
console.log(conta);
conta.deposit(500);
console.log(conta);