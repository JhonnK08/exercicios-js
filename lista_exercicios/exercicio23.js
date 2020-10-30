function calculaNota(codigo, nota1, nota2, nota3) {
    if (codigo > 0) {
        let media = 0
        if (nota1 >= nota2 && nota1 >= nota3) {
            media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3))/12
        } else if (nota2 >= nota1 && nota2 >= nota3) {
            media = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3))/12
        } else if (nota3 >= nota1 && nota3 >= nota2) {
            media = ((nota3 * 4) + (nota2 * 3) + (nota1 * 3))/12
        }
        console.log(`Código do Aluno: ${codigo}`)
        console.log(`Média: ${Math.floor(media)}`)
        if (media >= 5) {
            console.log('APROVADO')
        } else
            console.log('REPROVADO')
        }
    else return
}

calculaNota(1, 100, 100, 100)