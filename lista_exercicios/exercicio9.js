function classificaNotas(nota) {
    if (nota >= 38) {
        let notaMultipla
        let diferenca
        let novaNota
        notaMultipla = (Math.ceil(nota/5)) * 5
        console.log(`Nota Multipla de 5 maior: ${notaMultipla}`)
        diferenca = notaMultipla - nota
        console.log(`Diferença: ${diferenca}`)
        if (diferenca < 3) {
            console.log('Nota arredondada!')
            novaNota = notaMultipla
        } else {
            console.log('Nota não arredondada!')
            novaNota = nota
        }
        console.log(`Nota atualizada: ${novaNota}`)
    } else
        console.log('Aluno Reprovado!')
}


classificaNotas(38)
classificaNotas(43)
classificaNotas(41)
classificaNotas(57)
classificaNotas(58)