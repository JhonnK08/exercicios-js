function jurosSimples(capital, taxa, tempo) {
    let juros = capital * taxa * tempo
    return juros.toFixed(2)
}

const jurosCompostos = function (capital, taxa, tempo) {
    let juros = capital *  (1 + taxa) ** tempo
    return juros.toFixed(2)
}

console.log(`Juros Simples: ${jurosSimples(1000, 0.5, 12)}`)
console.log(`Juros Simples: ${jurosCompostos(1000, 0.5, 12)}`)