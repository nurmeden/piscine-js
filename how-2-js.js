console.log('Hello World')
const escapeStr = "\"`\\/\'"
const arr = [4,'2']
const obj = {
    str:"Dulat",
    num:20,
    bool:true,
    undef:undefined
}
Object.freeze(obj)
Object.freeze(arr)
const nested = {
    arr: [4,undefined,'2'], 
    obj: {
        str:"", 
        num:0,
        bool:true
    }
}
console.log(nested)