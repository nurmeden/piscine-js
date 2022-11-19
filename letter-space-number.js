function letterSpaceNumber(str){
    let arr = []
    let checkWord = /[a-zA-z]\s\d\b/g
    let res = str.match(checkWord)
    if (res!=null){
        return res
    }else{
        return arr
    }
    
    
}
