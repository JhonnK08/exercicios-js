function filtrarPorQuantidadeDeDigitos(numeros, quantDigitos) {
    let resultado = []
    for(numero of numeros) {
        const quantidade = String(numero).length
        if ( quantidade === quantDigitos)
            resultado.push(numero)
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))