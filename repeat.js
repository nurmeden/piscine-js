function repeat(strs,number) {
    var str = ""
    for (i = 0; i < number; i++) {
        str += strs
    }
    return str
}

console.log(repeat('a', 3))