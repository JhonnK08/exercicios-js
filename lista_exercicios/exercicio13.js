function descobreDia(dia) {
    switch (dia) {
        case 1 : console.log('Fim de Semana!')
                break
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : console.log('Dia Útil!') 
                break
        case 7 : console.log('Fim de Semana!') 
                break
        default: console.log('Dia Inválido!')
    }
}

descobreDia(1)
descobreDia(2)
descobreDia(3)
descobreDia(4)
descobreDia(5)
descobreDia(6)
descobreDia(7)
descobreDia(' ')