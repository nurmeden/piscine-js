function triangle(symbol,n) {
    var result = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += symbol
        }
        if (i != n) {
            result += '\n'
        }
    }
    return result
}
