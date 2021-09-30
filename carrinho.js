const produtos = require('./produtos');

let carrinho = produtos.filter( item => {
    let qualidade = item.qualidadeDoProduto;
    let statusEstoque = item.status;
    let valor = item.valorDoProduto;
    let filtro = ( valor >= 482 && valor <= 1600 && qualidade > 6 && statusEstoque == true );
    return filtro;
});

let valorTotalCarrinho = carrinho.reduce((x,y) => {
    return x.valorDoProduto +y.valorDoProduto
});

console.table(carrinho);

console.log(`Valor total de todos os produtos do carrinho é de ${valorTotalCarrinho}`);
