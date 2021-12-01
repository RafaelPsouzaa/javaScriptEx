class Carrinho{
    constructor(itens,quant,valorTotal){
        this.itens = itens;
        this.quant = quant;
        this.valorTotal  = valorTotal;

    }
    addItem(item){
        let contador = 0;
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].quant +=item.quant;
                
                contador =1;
            }
           
        }
        if(contador == 0){
            this.itens.push(item);
        }
        this.quant += item.quant;
        this.valorTotal += item.preco * item.quant;

    }
}


let carrinho = new  Carrinho ([
    {
        id:01,
        nome:"camisa",
        quant:1,
        preco:20
    },
    {
        id:02,
        nome:"calça",
        quant:1,
        preco:60
    }
],3,120);

carrinho.addItem({id:03,item:"bone",quant:1,preco:150});

console.log(carrinho);
