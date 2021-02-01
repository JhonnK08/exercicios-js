function areaDoTriangulo(base, altura){
    let resultado = 0
    resultado = (base * altura) / 2
    return resultado.toFixed(2)
}

console.log(areaDoTriangulo(10, 15))
console.log(areaDoTriangulo(7, 9))
console.log(areaDoTriangulo(9.25, 13.1))