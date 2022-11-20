const vowels = /[aeiouAEIOU]/g
function vowelDots(str){
    let res = str.match(vowels)
    if (res==null){
        return str
    }
    let result = ''
    let j = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i]==res[j]){
            result += str[i]+'.'
            j++
        }else{
            result += str[i]
        }
        if (res.length==j){
            result += str.slice(i+1)
            return result
        }
        
    }
    return result
}