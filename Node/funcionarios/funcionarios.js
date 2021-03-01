const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})

function menorSalarioMulherChina(funcionarios) {
    const obj = {}
    obj = JSON.parse(funcionarios)
    const chineses = obj.filter(objeto => objeto.pais === 'China')
    const mulheresChinesas = chineses.filter(objeto => objeto.genero === 'F')
    const maior = mulheresChinesas[0]
    const menorSalarioMulher = mulheresChinesas.reduce((maior, mulher) => {
        if(maior.salario < mulher.salario)
            maior = mulher
    })
    return menorSalarioMulher
}