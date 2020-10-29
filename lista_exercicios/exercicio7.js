function calculaBaskara (a, b, c) {
    let delta = b**2 - 4 * a * c
    console.log(`Delta: ${delta}`)
    if (delta >= 0) {
        let x1 = -(b + Math.sqrt(delta))/2 * a
        console.log(`x1: ${x1}`)
        let x2 = -(b - Math.sqrt(delta))/2 * a
        console.log(`x2: ${x2}`)
        resultados = [x1, x2]
        return resultados
    } else
        console.log('Delta é negativo!')


}

let resultados = [];
resultados = calculaBaskara(1, 8, 7)
console.log(`Resultados: ${resultados}`)
