function buscarPalavrasSemelhantes(palavra, arrayString) {
    const resultado = []
    for(let palavraEncontrada of arrayString) {
        if(palavraEncontrada.includes(palavra)) {
            resultado.push(palavraEncontrada)
        }
    }
    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))