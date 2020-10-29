function calculaFatorial(num) {
    if (num == 0) {
        return 1
    } else
        return num * calculaFatorial(num - 1)
}

console.log(calculaFatorial(4))