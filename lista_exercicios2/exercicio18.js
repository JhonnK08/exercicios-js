function despesasTotais(arrayProdutos) {
    let total = 0
    for (let prod of arrayProdutos) {
        total += prod.preco
    }
    return total
}

function despesasTotais1(itens) {
    return itens.map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}


console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))