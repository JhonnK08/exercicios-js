function calculaPedido(codigo, quantidade) {
    switch (codigo) {
        case 100: console.log(`Valor total Cachorro Quente: R$${quantidade * 3}`)
        break
        case 200: console.log(`Valor total Hambúrguer Simples: R$${quantidade * 4}`)
        break
        case 300: console.log(`Valor total Cheeseburguer: R$${quantidade * 5,50}`)
        break
        case 400: console.log(`Valor total Bauru: R$${quantidade * 7,50}`)
        break
        case 500: console.log(`Valor total Refrigerante: R$${quantidade * 3,50}`)
        break
        case 600: console.log(`Valor total Suco: R$${quantidade * 2,80}`)
        break
        default: console.log('C�digo Inv�lido. Produto Inexistente.')
    }
}

calculaPedido(100, 2)
calculaPedido(200, 2)