function isPositive(n) {
    if (n >= 0) {
        return true
    } else {
        return false
    }
}

function abs(numb){
    if (numb==0){
        return 0
    }else if (isPositive(numb)){
        return numb
    }else{
        return numb*-1
    }
}

// function abs(digit) {
//     return digit + (Infinity-digit)
// }