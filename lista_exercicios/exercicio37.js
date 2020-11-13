function progressaoAritmetica(n, a1, r){
    let an = 0
    let soma = 0
    an = a1 + ((n - 1) * r)
    console.log(`an = ${an}`)
    for (let i = 0; i <= n; i++){
        console.log(a1 + ((i - 1) * r))
        soma += a1 + ((i - 1) * r)
    }
    console.log(`Soma: ${soma}`)
}

function progressaoGeometrica(n, a1, q){
    let an = 0
    let total = 0
    an = a1 * Math.pow(q, n-1)
    console.log(`an = ${an}`)
    for (let i = 0; i <= n; i++){
        console.log(an = a1 * q**(i-1))
        total += a1 * q**(i-1)
    }
    console.log(`Total: ${total}`)
}

progressaoAritmetica(10, 26, 5)
progressaoGeometrica(9, 3, 2)