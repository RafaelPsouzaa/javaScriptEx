function Cachorro(raca,patas,cor){
    this.race = raca;
    this.paw = patas;
    this.color = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("ahuuuuuuuu");
}

let husky = new Cachorro('Husky',4,'cinza');
husky.uivar();