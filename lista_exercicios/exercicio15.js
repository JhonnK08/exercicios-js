function escolheVeiculo(veiculo) {
    switch(veiculo) {
        case 'Hatch':
        case 'hatch': console.log('Compra efetuada com sucesso!')
        break
        case 'motocicleta':
        case 'sedans':
        case 'motoclicleta':
        case 'caminhonete': console.log('Tem certeza que n�o prefere este modelo?')
        break
        default: console.log('Op��o Inv�lida')
    }
}

escolheVeiculo('motoclicleta')
escolheVeiculo('hatch')
escolheVeiculo('moto')