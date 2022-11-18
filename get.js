// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'

// function get(src,path) {
//     var listPropertyNames = Object.keys(src)
//     // let patharr = path.split('.')
//     // for (i = 0 ; i < patharr.length; i++) {
//     //     result += patharr[i]
//     // } 
//     return src[listPropertyNames[0][0]]
// }

// console.log(get(src,path))
function get(src, path){
    let arr = path.split('.')
    
    arr.forEach(element => {
        if (src===undefined){
            return src
        } 
        src=src[element] 
    });
    return src
}

// console.log(get(src,path))