function calcularMedia(array) {
    let soma = 0
    let quantidade = array.length
    soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
    return soma/quantidade
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))