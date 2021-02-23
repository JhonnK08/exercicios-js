function inverter (array) {
    const arrayInvertido = {}
    Object.entries(array).forEach( parChaveValor => {
        const chave = 0,
        valor = 1
        arrayInvertido [parChaveValor [valor]] = parChaveValor[chave]
    })
    return arrayInvertido

}



console.log(inverter({ a: 1, b: 2, c: 3})) // retornará { 1: "a", 2: "b", 3: "c"}