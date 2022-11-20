function ionOut(str){
    let res = /(\w*)(?=tion)/g
    let result = str.match(res)
    let arr = []
    if (result == null){
        return arr
    }
    for (let i = 0; i < result.length; i++) {
        if (i%2==0){
            result[i]= result[i] + 't'
            arr.push(result[i])
        }
        
    }
    return arr
}
