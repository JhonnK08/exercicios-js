function removerVogais(palavra) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => palavra = palavra.replace(vogal, ''))

    return palavra
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))