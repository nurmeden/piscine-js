const escapeStr = "\"`\\/\'"
const arr = [4,'2']
const obj = {
    str:"Dulat",
    num:20,
    bool:true,
    undef:undefined
}
const nested = {
    arr: [4,undefined,'2'], 
    obj: {
        str:"", 
        num:0,
        bool:true
    }
}
Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
Object.freeze(nested)
Object.freeze(arr, obj)