const is = {}
is.num = function(n) {
    return checker('number',n)
}
is.nan = function(n) {
    return Number.isNaN(n)
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
    return !is.undef(n)
}
is.arr = function(n) {
    return Array.isArray(n)
}
is.obj = function(n) {
    return typeof(n)=== 'object' && !is.arr(n) && !is.fun(n) && n!==null
}
is.fun = function(n) {
    return checker('function',n)
}
is.truthy = function(n) {
    return !!n
}
is.falsy = function(n) {
    return !n
}

function checker(type, n) {
    if (type === typeof(n)) {
        return true
    } else {
        return false
    }
}