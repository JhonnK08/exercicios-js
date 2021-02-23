function simboloMais(valor){
    let string= ""
    for(let i = 0; i < valor; i++) {
        string += "+"
    }
    return string
}

console.log(simboloMais(2))
console.log(simboloMais(4))