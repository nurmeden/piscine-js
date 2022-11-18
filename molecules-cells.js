let molecules = {
    prop1 : "GC",
    prop2 : "CG",
    prop3 : "TA",
    prop4: "AU",
}
function RNA(s) {
    let result = ""
    for (i = 0 ; i < s.length; i++) {
        if (s[i] === "G") {
            result += molecules.prop1[1]
        } else if (s[i] === "C") {
            result += molecules.prop2[1]
        } else if (s[i] === "T") {
            result += molecules.prop3[1]
        } else if (s[i] === "A") {
            result += molecules.prop4[1]
        }
    }
    return result
}

function DNA(s) {
    let result = ""
    for (i = 0 ; i < s.length; i++) {
        if (s[i] === "G") {
            result += molecules.prop2[0]
        } else if (s[i] === "C") {
            result += molecules.prop1[0]
        } else if (s[i] === "U") {
            result += molecules.prop4[0]
        } else if (s[i] === "A") {
            result += molecules.prop3[0]
        }
    }
    return result 
}
