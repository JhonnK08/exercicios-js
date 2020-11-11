function concatVetores(vetorInteiro, vetorString, vetorDouble){
    let vetorConcat = []
    vetorConcat = vetorConcat.concat(vetorInteiro, vetorString, vetorDouble)
    let vetorConcat12 = [vetorString, vetorDouble, vetorInteiro]
    console.log(`Vetor 1: ${vetorConcat}`)
    console.log(`Vetor 2: ${vetorConcat12}`)
}
let vetorInteiro = [1,2,3,4,5]
let vetorString = ['a','b','c','d','e']
let vetorDouble = [1.23242, 2.43423424, 4.12301239]
concatVetores(vetorInteiro, vetorString, vetorDouble)