const is = {}
is.num = function(n) {
    return checker('number',n)
}
is.nan = function(n) {
    return n.isNaN
}
is.str = function(n) {
    return checker('string',n)
}
is.bool = function(n) {
    return checker('boolean',n)
}
is.undef = function(n) {
    return checker('undefined',n)
}
is.def = function(n) {
    return checker('defined',n)
}
is.arr = function(n) {
    return checker('array',n)
}
is.obj = function(n) {
    if (checker('object',n) === false) {
        return checker('null',n)
    } else {
        return checker('object',n)
    }
}
is.fun = function(n) {
    return checker('function',n)
}
is.truthy = function(n) {
    return checker('truthy',n)
}
is.falsy = function(n) {
    return checker('falsy',n)
}

function checker(type, n) {
    if (type === typeof(n)) {
        return true
    } else {
        return false
    }
}