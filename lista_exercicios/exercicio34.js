function comparaPalavras(frase1, frase2){
    let temLetra = true
    for (let i = 0; i < frase1.length; i++){
        let caracter1 = frase1.charAt(i).toLowerCase()
        for (let j = 0; j < frase2.length; j++) {
            let caracter2 = frase2.charAt(j).toLowerCase()
            if (caracter1 == caracter2) {
                temLetra = true
                break
            }
            else
                temLetra = false
        }
        if(!temLetra) {
            return temLetra
        }
    }
    return temLetra
}

console.log(comparaPalavras('oi', 'io'))