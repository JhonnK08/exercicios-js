function removerPropriedade(obj,propriedade) {
    const objeto = Object.assign({}, obj)
    delete objeto[propriedade]
    return objeto
}

let objeto = removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")
console.log(objeto) // retornará {id: 20, nome: "caneta"}
console.log(Object.is(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"), objeto))
console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2}
