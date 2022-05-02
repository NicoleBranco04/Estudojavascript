class Produto{
    constructor(nome, descricao, preco){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco; 
    }
}

function cadastro(produto) {
    console.log(`Cadastramos o produto ${produto.nome}`);
    console.log(`O preço deste produto é R$ ${produto.preco}`)
}

module.exports = { Produto, cadastro};