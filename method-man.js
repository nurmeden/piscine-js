function words(word) {
    return word.split(" ")
}

function sentence(arr) {
    return arr.join(' ')
}

function yell(sentence) {
    return sentence.toUpperCase()
}

function whisper(sentence) {
    return '*' + sentence.toLowerCase() + '*'
}


function capitalize(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}