function sameAmount(str,str1,str2){
    let regexp = new RegExp(str1, 'g')
    let regexp2 = new RegExp(str2, 'g')
    let res1 = str.match(regexp)
    let res2 = str.match(regexp2)
    if ((res1!=null && res2!=null)&&(res1.length==res2.length)){
        return true
    }
    return false
}