// Closure � o escopo criado quando a fun��o � declarada
// Esse escopo permite acessar e manipular vari�veis externas � fun��o

// Contexto l�xico em a��o!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())