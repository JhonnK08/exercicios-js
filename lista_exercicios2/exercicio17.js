function somarNumeros(array) {
    const reducer = (acumulador, valor) => acumulador + valor
    let resultado = array.reduce(reducer)
    return resultado
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))