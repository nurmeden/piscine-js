// function float2int (value) {
//     return value | 0;
// }
function round(n){
    let res
    let check = false
    let remainder
    if (n<0){
        n=-n
        check=true
    }
    remainder = modulo(n,1)
    if (remainder>=0.5){
        res = n - remainder + 1
    }else {
        res = n - remainder
    }
    if (check){
        res = -res
    }
    return res
}   
function ceil(n){
    
    let res
    let remainder
   
    
    remainder = modulo(n,1)
    if (n>0 && remainder!=0){
        res = n - remainder +1
    }else if (remainder == 0){
        return n
    }else{
        res = n - remainder
        if (n == remainder){
            return -0
        }
    }
    if (n<0 && res>=0){
        return -res
    }
    
 
    return res
   
}
function floor(n){
    let res
    let remainder
    remainder = modulo(n,1)
    if (n>0 && remainder!=0){
        res = n - remainder
    }else if (remainder ===0){
        return n
    }else{
        res = n - 1 - remainder
    }
    return round(res)
} 
function trunc(n){
    // let res
    // let remainder 
    // remainder = modulo(n,1)
    // if (n>0 && remainder!=0){
    //     res = n-remainder
    // }else{
    //     res = n - remainder
    //     if (n == remainder){
    //         res = -0
    //     }
    // }
    // return res
    var res = parse(modulo(n,10000))
    var res2 = parse(n/10000)
    return res2*10000+res
}
function parse(num){
    return num^0
}
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