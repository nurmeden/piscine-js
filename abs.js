function isPositive(numb){
    if (numb<=0){
        return false
    }else{
        return true
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