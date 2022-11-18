function findExpression(numb){
    str = ''
    for (let i = 1; i < numb; i++) {
        if (i%2==0){
            for (let j = 0; j < i/2; j++) {
                str+='*2'                
            }
        }else if (i%4==0){
            for (let j = 0; j< i/4; i++){
                str+='+4'
            }
        };
        
    }
}
