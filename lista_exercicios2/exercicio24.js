function contarCaractere(caractere, frase) {
    let quant = 0
    for(let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === caractere) {
            quant++
        }
    }
    return quant
}


console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))