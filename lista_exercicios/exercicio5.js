function formataReais(num) {
    let teste = num.toString()
    teste = teste.replace('.', ',')
    teste = teste.substr(0,4)
    return 'R$' + teste
}

let reais
reais = formataReais(0.3000000004)
console.log(reais)