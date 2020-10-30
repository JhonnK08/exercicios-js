function verificaIntervalo(vetor) {
    let intervalo = 0
    for(let i = 0;i <=  vetor.length; i++) {
        if (i >= 10 && i <=20) {
            intervalo++
        }
    }
    console.log(`${intervalo} números dentro do intervalo e ${vetor.length - intervalo} números fora.`)
}


verificaIntervalo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])