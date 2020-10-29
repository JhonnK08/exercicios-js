function calculaPontos (lista) {
    let quantMaior = 1
    let numPior = 0
    let posicaoPior
    let lista2 = []
    lista2 = lista.split(" ")
    let ponto1 = lista2[0]
    numPior = ponto1
    for(let i = 1; i < lista2.length; i++ ) {
        if (lista2[i] < numPior) {
            numPior = lista2[i]
            posicaoPior = i + 1
        }
        if (lista2[i] > ponto1) {
            quantMaior++
            ponto1 = lista2[i]
        }
    }
    console.log(`${quantMaior}, ${posicaoPior}`)
    return [quantMaior,posicaoPior] 
}
let valores = []
valores = calculaPontos('10 20 20 8 25 3 0 30 1')
console.log(valores)