function conceitoNotas(vetorNotas) {
    for(let i = 0; i < vetorNotas.length; i++) {
        if(vetorNotas[i] < 4.9) {
            console.log(`Nota : ${vetorNotas[i]} - Conceito D`)
        } else if (vetorNotas[i] < 6.9) {
            console.log(`Nota : ${vetorNotas[i]} - Conceito C`)
        } else if (vetorNotas[i] < 8.9) {
            console.log(`Nota : ${vetorNotas[i]} - Conceito B`)
        } else if (vetorNotas[i] <= 10) {
            console.log(`Nota : ${vetorNotas[i]} - Conceito A`)
        } else
            console.log('Valor inválido')
    }
}

let vetor = [1.0, 10, 6.0, 7.5]
conceitoNotas(vetor)