function nasa(n) {
    let result = ""
    for (let i = 0; i <= n; i++) {
        if (i != 0) {
            if (i % 3 === 0 && i % 5 === 0) {
                result += " " + "NASA"
            } else if (i % 3 === 0) {
                result += " " + "NA"
            } else if (i % 5 === 0) {
                result += " " + "SA"
            } else {
                result += " " + i.toString()
            }
        } else {
            result += i.toString()
        }
    }
    return result
}

console.log(nasa(15))