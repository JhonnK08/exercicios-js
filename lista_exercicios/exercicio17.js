function calculaPlano(plano, salario) {
    let aumento = 0
    switch (plano) {
        case 'A': aumento = salario * 10 / 100
        break
        case 'B': aumento = salario * 15 / 100
        break
        case 'C': aumento = salario * 20 / 100
        break
        default: console.log('Opção Inválida!')
    }
    console.log(`Seu novo salário é R$${salario + aumento}`)
}

calculaPlano('A', 1300)
calculaPlano('B', 1300)
calculaPlano('C', 1300)
