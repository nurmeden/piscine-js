function get(n) {
    switch (n) {
        case "num":
            return sourceObject.num
        case "bool":
            return sourceObject.bool
        case "str":
            return sourceObject.str
        case "log":
            return sourceObject.log
    }
  }

function set(n,val) { 
    switch (n) {
        case "num":
            sourceObject.num = val
            return sourceObject.num
        case "bool":
            sourceObject.num = val
            return sourceObject.bool
        case "str":
            sourceObject.num = val
            return sourceObject.str
        case "log":
            sourceObject.num = val
            return sourceObject.log
    }
}