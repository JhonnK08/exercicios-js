function repetir(elemento, vezes) {
    const newArray = []
    for(let i = 0; i < vezes; i++) {
        newArray.push(elemento)
    }
    return newArray
}

console.log(repetir("código",2))
console.log(repetir(7,3))