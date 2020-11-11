function calculaMedia(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    let media
    media = soma / vetor.length
    console.log(`A média dos números é ${media}`)
}

let vetor = [1,2,3,4]
calculaMedia(vetor)