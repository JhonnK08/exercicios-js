function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function funcaoDaSorte(numero) {
    let numeroSorte = getRandomInt(1, 10)
    if (numeroSorte == numero) {
        return `Parabéns! O número sorteado foi ${numeroSorte}`
    } else
        return `Que pena! O número sorteado foi ${numeroSorte}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))