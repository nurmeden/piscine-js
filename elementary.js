function multiply(a,b){
    let check = false
    let res = 0
    if (b<0){
        b=-b
        check = true
    }
    while (b>0){
        res += a
        b--
    }
    if (check){
        res = -res 
    }
    return res
}
function divide(a,b){
    let check = false
    let count = 0
    if (b<0 && a<0){
        b=-b
        a=-a
    }
    if (a<0){
        a=-a
        check=true
    }
    if (b<0){
        b=-b
        check=true
    }
   let c = a
   while (c>b){
    c-=b
    count++
   }
    if (check){
        count=-count
    }
    return count
}
function modulo(a,b){
    let n = divide(a,b)
    let t = multiply(n,b)
    return a-t
}