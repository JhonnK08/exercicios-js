function calculaAnuidade(mes, valor) {
    let tempo = mes - 1
    let valorTotal = (valor *  (1 + (5/100)) ** tempo).toFixed(2)
    console.log(`Valor R$${valorTotal}`)
}

calculaAnuidade(12, 50)