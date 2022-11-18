function pyramid(str,numb){
    let res = ''            
    for (let i = 1; i <= numb; i++) {
        res+=' '.repeat(numb-i)
        res+=str.repeat(i*2-1)
        if (i==numb){
            return res
        }
        res+='\n'
    } 
    return res
}

