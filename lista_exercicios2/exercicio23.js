function contarPalavras(frase) {
    let palavras = []
    palavras = frase.split(" ")
    return palavras.length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))