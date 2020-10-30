function notasTroco(valor)  {
    let quantNotas100 = 0
    let quantNotas50 = 0
    let quantNotas5 = 0
    let quantNotas1 = 0
    if (valor >= 100) {
        quantNotas100 = Math.floor(valor/100)
        valor = valor%100
    }
    if (valor >= 50) {
        quantNotas50 = Math.floor(valor/50)
        valor = valor%50
    }
    if (valor >= 10) {
        quantNotas10 = Math.floor(valor/10)
        valor = valor%10
    }
    if (valor >= 5) {
        quantNotas5 = Math.floor(valor/5)
        valor = valor%5
    }
    if (valor >= 1) {
        quantNotas1 = Math.floor(valor/1)
        valor = valor%1
    }
    imprimeResultado(quantNotas100, quantNotas50, quantNotas10, quantNotas5, quantNotas1)
}

function imprimeResultado(quantNotas100, quantNotas50, quantNotas10, quantNotas5, quantNotas1) {
    if(quantNotas100 > 0) {
        console.log(`${quantNotas100} notas de R$100.`)
    }
    if(quantNotas50 > 0) {
        console.log(`${quantNotas50} notas de R$50.`)
    }
    if(quantNotas10 > 0) {
        console.log(`${quantNotas10} notas de R$10.`)
    }
    if(quantNotas5 > 0) {
        console.log(`${quantNotas5} notas de R$5.`)
    }
    if(quantNotas1 > 0) {
        console.log(`${quantNotas1} notas de R$1.`)
    }
}


notasTroco(18)
notasTroco(40)