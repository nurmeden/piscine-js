function arrToSet(arr){
    let set = new Set()
    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }
    return set
}
function arrToStr(arr){
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str+=arr[i]
    }
    return str
}
function setToArr(set){
    let arr = Array.from(set)
    return arr
}
function setToStr(set){
    let arr = Array.from(set)
    let str = arrToStr(arr)
    return str
}
function strToArr(str){
    let arr = Array.from(str)
    return arr
}
function strToSet(str){
    let arr = strToArr(str)
    let set = arrToSet(arr)
    return set
}
function mapToObj(map){
    let obj = Object.fromEntries(map)
    return obj
}
function objToArr(obj){
    let arr = Object.values(obj)
    return arr
}
function objToMap(obj){
    let newArray = Object.entries(obj)
    let map = new Map(newArray);
    return map
}
function arrToObj(arr){
    let obj = Object.assign({}, arr)
    return obj
}
function strToObj(str){
    let obj = {}
    for (let i=0; i<str.length; i++) {
       obj[i] = str[i];
      }
    return obj
}
function superTypeOf(ent){
    if (ent===null){
        return 'null'
    }
    let values = {Set, Map, Array, Function}
    for (let key in values){
        if (ent instanceof values[key]){
            return key
        }
    }
    let types = {Number:'number', String:'string', Object:'object'}
    for (let key in types){
        if (typeof(ent) ===types[key]){
            return key
        }
    }
   return typeof(ent)
}