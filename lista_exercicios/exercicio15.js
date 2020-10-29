function escolheVeiculo(veiculo) {
    switch(veiculo) {
        case 'Hatch':
        case 'hatch': console.log('Compra efetuada com sucesso!')
        break
        case 'motocicleta':
        case 'sedans':
        case 'motoclicleta':
        case 'caminhonete': console.log('Tem certeza que não prefere este modelo?')
        break
        default: console.log('Opção Inválida')
    }
}

escolheVeiculo('motoclicleta')
escolheVeiculo('hatch')
escolheVeiculo('moto')