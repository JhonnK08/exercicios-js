function buscaMaiorMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < menor) {
            menor = vetor[i]
        }
        if(vetor[i] > maior) {
            maior = vetor[i]
        }
    }
    console.log(`O menor valor é : ${menor}, e o maior é ${maior}`)
}

let vetor = [1,2,3,4,5,6,7,8,9]
buscaMaiorMenor(vetor)