const filterValues=(nutrients, fun)=>{
    let filteredNutrients={}
    for (let [key ,value] of Object.entries(nutrients)){
        if (fun(value)){
         filteredNutrients[key]=value
        }
    }      
    return filteredNutrients
}
const mapValues=(nutrients, fun)=>{
    let mappedNutrients={}
    Object.keys(nutrients).forEach(objCheck=>{
        if(typeof nutrients[objCheck]==='object'){
        mappedNutrients[objCheck]=nutrients[objCheck]
          Object.keys(mappedNutrients[objCheck]).forEach(keys=>{
            mappedNutrients[objCheck][keys]=fun(mappedNutrients[objCheck][keys])
          })
        }else{
            if (fun(nutrients[objCheck])){
                mappedNutrients[objCheck]=fun(nutrients[objCheck])
              }
        }
    })
    return mappedNutrients
}
const reduceValues=(nutrients,fun, num)=>{
    try{
        if (nutrients.length<=1) throw new Error;
    }catch(e) {
        console.log(e.name)
    } 
    let acc
    if (num!==undefined){
        acc=num
    }
    
    Object.keys(nutrients).forEach((objCheck,i)=>{
        if(typeof nutrients[objCheck]==='object'){
        Object.keys(nutrients[objCheck]).forEach((keys,i)=>{
            if (i===0&&acc===undefined){
                acc =nutrients[objCheck][keys]
            }  else{
                 acc=fun(acc,nutrients[objCheck][keys])
            }
          })
        }else{
            if (i===0&&acc===undefined){
                acc =nutrients[objCheck]
            }  else{
                 acc=fun(acc,nutrients[objCheck])
            }
        }
       
    })
     return acc
}