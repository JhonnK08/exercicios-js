function calculaAltura(altura1, altura2, taxa1, taxa2) {
    let anos = 0
    if (altura1 > altura2){
        while (altura2 < altura1) {
            altura2 += altura2 * (taxa2)/100
            anos++
        }
        console.log(`A criança menor demorará ${anos} anos para ultrapassar a altura da outra criança.`)
    } else if (altura2 > altura1) {
        while (altura1 < altura2) {
            altura1 += altura1 * (taxa1)/100
            anos++
        }
        console.log(`A criança menor demorará ${anos} anos para ultrapassar a altura da outra criança.`)
    }

}

calculaAltura(130, 110, 4, 5)
calculaAltura(170, 110, 2, 5)