const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }
  
function get(n) {
    return sourceObject[n]
}

function set(n,val) { 
    sourceObject[n] = val
    return sourceObject.n
}