function indexOf(arr,word,start=0) {
    for (let i = start; i < arr.length; i++ ) {
        if (arr[i] === word) {
            return i
        } 
    }
    return -1
}

function lastIndexOf(arr,word, end=arr.length) {
    var idx = -1
    for (let i = arr.length; i >= 0; i-- ) {
        if (arr[i] === word) {
            idx = i
        }
    }
    return idx
}

function includes(arr,word) {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === word) {
            return true
        }
    }
    return false
}
