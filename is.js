const is = {}
is.num = function(n) {
    checker('number',n)
}
is.nan = function(n) {
    checker('NaN',n)
}
is.str = function(n) {
    checker('string',n)
}
is.bool = function(n) {
    checker('boolean',n)
}
is.undef = function(n) {
    checker('undefined',n)
}
is.def = function(n) {
    checker('defined',n)
}
is.arr = function(n) {
    checker('array',n)
}
is.obj = function(n) {
    if (checker('object',n) === false) {
        checker('null'),n
    } else {
        checker('object',n)
    }
}
is.fun = function(n) {
    checker('function',n)
}
is.truthy = function(n) {
    checker('truthy',n)
}
is.falsy = function(n) {
    checker('falsy',n)
}

function checker(type, n) {
    if (type === typeof(n)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
