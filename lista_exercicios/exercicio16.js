function calculadora (num, operacao, num2) {
    switch (operacao) {
        case '+': return num + num2
        case '-': return num - num2
        case 'x': 
        case '*': return num * num2
        case '/': return num / num2
        default : console.log('Operação Inválida!')
    }
}

console.log(calculadora(2,'+',2))
console.log(calculadora(2,'-',2))
console.log(calculadora(2,'x',2))
console.log(calculadora(2,'*',2))
console.log(calculadora(2,'/',2))