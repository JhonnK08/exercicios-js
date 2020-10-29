function verificaBissexto(ano) {
    if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else
        return false
}

console.log(verificaBissexto(1600))
console.log(verificaBissexto(1904))
console.log(verificaBissexto(1100))
console.log(verificaBissexto(2020))
console.log(verificaBissexto(2001))
console.log(verificaBissexto(2012))
console.log(verificaBissexto(2016))