function trocaVetores(vetorA, vetorB){
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i] 
        }
        console.log(`Novo vetor A: ${vetorA}`)
        console.log(`Novo vetor B: ${vetorB}`)
    } 
}

let vet1 = [1,2,3,4]
let vet2 = [8,9,10,11]
trocaVetores(vet1, vet2)