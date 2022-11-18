function reverse(str){
    let res = ''
    let result = []
    for (let i = str.length-1; i >=0; i--) {
        if (typeof str === 'string'){
            res+=str[i]
        }else if (Array.isArray(str)){
            result.push(str[i])
        }
    
    }
    if (typeof str === 'string'){
        return res
    }
    return result
}
// function reverse(s) {
//     if (typeof(s) === 'string') {
//         let word = ""
//         for (i = s.length-1; i >= 0; i-- ) {
//             word += s[i]
//         }
//         return word
//     } else  {
//         let word = []
//         let j = 0  
//         for (i = s.length-1; i >= 0; i-- ) {
//             word[j] = s[i]
//             j++
//         }
//         return word
//     }
// }

// console.log(reverse([1, dula, 3, 4]))