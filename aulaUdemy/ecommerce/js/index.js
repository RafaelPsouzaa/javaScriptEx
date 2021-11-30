class Carrinho{
    constructor(itens,quant,valorTotal){
        this.itens = itens;
        this.quant = quant;
        this.valorTotal  = valorTotal;

    }
}

let carrinho = new Carrinho([
    {
        id:01,
        nome:"camisa",
        qtd:1,
        preco:20
    },
    {
        id:02,
        nome:"calça",
        qtd:2,
        preco:50
    }

],3,120);
console.log(carrinho);