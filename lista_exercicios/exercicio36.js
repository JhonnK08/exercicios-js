function multiplicaVetor (vetor, num) {
    let vetorFinal = []
    for (let i = 0; i < vetor.length; i++){
        vetorFinal.push(vetor[i] * num)
    }
    console.log(vetorFinal)
}

function multiplicaVetor5 (vetor, num) {
    let vetorFinal = []
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 5) {
            vetorFinal.push(vetor[i] * num)
        } else
            vetorFinal.push(vetor[i])
    }
    console.log(vetorFinal)
}

vetor = [1,2,3,4,5,6,7,8,9,10]
multiplicaVetor(vetor, 6)
multiplicaVetor5(vetor, 4)
