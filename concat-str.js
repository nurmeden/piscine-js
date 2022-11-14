const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
function concatStr(a,b) {
    var str1 = a.toString()
    var str2 = b.toString()
    const result = str1.concat(str2)
    return result
}