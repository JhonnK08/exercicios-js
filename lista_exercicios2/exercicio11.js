function receberPrimeiroEUltimoElemento(vetor) {
    let newArray = []
    newArray.push(vetor[0])
    newArray.push(vetor[vetor.length-1])
    return newArray
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))