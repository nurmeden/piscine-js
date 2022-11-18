function chunk(arr, n){
    let res = []
    let array = []
    if (n<=0){
        return 
    }
    while (arr.length > n){
        array = arr.slice(0,n)
        arr = arr.slice(n)
        res.push(array)
        array = []
    }
    if (arr.length>0){
        res.push(arr)
    }
    return res
}