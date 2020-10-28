function descobreTriangulo(l1, l2, l3) {
    if(l1 == l2 && l2 == l3) {
        console.log('Triangulo Equilatero')
    } else if(l1 == l2 || l2 == l3 || l3 ==l1) {
        console.log('Triangulo Isosceles')
    }else {
        console.log('Triangulo Escaleno')
    }
}


descobreTriangulo(1,1,1)
descobreTriangulo(1,2,3)
descobreTriangulo(1,2,1)
descobreTriangulo(2,2,1)
descobreTriangulo(2,1,1)