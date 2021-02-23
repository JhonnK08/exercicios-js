function filtrarNumeros(array) {
    const somenteNumeros = numeros => typeof numeros == "number"
    let newArray
    newArray = array.filter(somenteNumeros)
    return newArray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))