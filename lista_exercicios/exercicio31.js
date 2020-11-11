function buscaValorNegativo (vetor) {
    let cont = 0;
    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            cont++
        }
    }
    console.log(`Quantidade de números negativos: ${cont}`)
}

let vetor = [-5,-4,-3,-2,-1, 0, 1, 2, 3, 4]
buscaValorNegativo(vetor)