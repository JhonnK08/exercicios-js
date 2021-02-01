function checarAnoBissexto(ano) {
    const divisivelQuatro = ano % 4 == 0
    const divisivelCem = ano % 100 == 0
    const divisivelQuatrocentos = ano % 400 == 0

    return (divisivelQuatro && !divisivelCem) || divisivelQuatrocentos
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))