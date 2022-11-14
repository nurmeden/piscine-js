function first(n) {
    return n[0]
}

function last(n) {
    return n[n.length-1]
}

function kiss(n) {
    const array = []
    array.push(last(n))
    array.push(first(n))
    return array
}