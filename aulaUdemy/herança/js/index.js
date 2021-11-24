class Cachorro{
    constructor(raca,cor){
        this.race = raca;
        this.color = cor;
    }
    latir(){
        console.log('au ahu');
    }
}

Cachorro.prototype.race ='SRD';
Cachorro.prototype.patas =4;

let labrador = new Cachorro('Labrador','Amarelo');
console.log(labrador.patas);
console.log(labrador);
labrador.latir();