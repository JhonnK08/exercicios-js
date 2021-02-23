function objetoParaArray(objeto) {
    let obj = []
    for(let chave in objeto) {
        obj.push([chave, objeto[chave]])
    }
    return obj
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
    }))