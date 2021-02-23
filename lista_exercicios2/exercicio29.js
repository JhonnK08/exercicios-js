function segundoMaior(array) {
    let indiceMaior = 0
    let segundoMaior

    array.forEach( (numero, indice) => {
        if( numero > array[indiceMaior])
            indiceMaior = indice
    });

    array.splice(indiceMaior, 1)
    segundoMaior = array[0]

    array.forEach(numero => {
        if(numero > segundoMaior)
        segundoMaior = numero
    })

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))