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
    get saldoCpAtual(){
        return console.log(conta.saldoCp)
    }
    transfer(send){
        if(send <=this.saldoCc){
        this.saldoCp = send;
        this.saldoCc -=send;
        }else if(send > this.saldoCc){
            console.log("saldo insuficiente")
        }
    }
    jurosDeAniversario(){
        let juros = (this.saldoCp * this.juros)/100;
        this.saldoCp += juros;
    }
}

class contaEspecial extends contaBancaria {
    constructor(saldoCc,saldoCp,juros){
        super(saldoCc,saldoCp,juros*2)
    }

}

let conta = new contaBancaria (6000,0);
let conta2 = new contaEspecial(2000,10000,44)
conta.transfer(800);
conta.saldoCpAtual;
console.log(conta2);

