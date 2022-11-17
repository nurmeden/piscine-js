function indexOf(arr,word,start=0) {
    for (let i = start; i < arr.length; i++ ) {
        if (arr[i] === word) {
            return i
        } 
    }
    return -1
}

function lastIndexOf(arr,word, end=arr.length) {
    for (let i = end; i >= 0; i-- ) {
        if (arr[i] === word) {
            return i
        }
    }
    return -1
}

function includes(arr,word) {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === word) {
            return true
        }
    }
    return false
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
