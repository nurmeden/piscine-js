const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }
  

function get(k) {
    return sourceObject.k
}

function set(k,value) {
    sourceObject.k = value
    return sourceObject.k
}