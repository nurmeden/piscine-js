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
Object.freeze(nested.obj,nested.arr)
Object.freeze(arr, obj)