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
    withdraw(saque){
        this.saldoCc -= saque;
    }
    get saldoAtual(){

        return console.log(conta.saldoCc);
    }
    

}

let conta = new contaBancaria (6000,0,10);
conta.deposit(500);
conta.withdraw(1500);
conta.saldoAtual
