class Carrinho{
    constructor(itens,quant,valorTotal){
        this.itens = itens;
        this.quant = quant;
        this.valorTotal  = valorTotal;

    }
    addItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].quant +=item.quant;
            }
        }
        this.quant += item.quant;
        this.valorTotal += item.preco;
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

carrinho.addItem({id:01,nome:"Camisa",quant:02,preco:20});
console.log(carrinho);

