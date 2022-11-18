const split = (str, sep) =>{
    let ans = []
    let word = ""
    let i = 0
 
 if (sep == ''){
     for (let i = 0; i < str.length; i++){
         ans.push(str[i])
     }
     return ans
 }
 
 while(i < str.length){
     if (str[i] == sep[0]){
      let  frag = str.slice(i, i+sep.length)
        
 
         if (frag == sep){
             ans.push(word)
             word = ""
             i += sep.length
             continue
         }
     } 
     word += str[i]
     i++
     }
    
 //if (word != ""){
     ans.push(word)
     word = ""
 //}
    return ans
 }
 const join = (str, sep=',') => {
    let ans = ""
   
    for (let i = 0; i < str.length; i++){
       
    ans += str[i]
    if (i != str.length-1) {
        ans += sep
    }
}
    return ans
}
