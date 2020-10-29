function escolheFruta (fruta) {
    switch (fruta) {
        case 'maçã':
        case 'maça':
        case 'maca': console.log('Não vendemos essa fruta aqui.')
        break
        case 'kiwi': console.log('Estamos com escassez de kiwis.')
        break
        case 'melancia': console.log('Aqui está, são 3 reais o quilo.')
        break
        default: console.log('Opção inválida!')
    }
}

escolheFruta('maçã')
escolheFruta('kiwi')
escolheFruta('melancia')
escolheFruta('banana')