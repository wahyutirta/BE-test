

function convert (str) {
    let num = parseInt(str.charCodeAt(0)) - 64
    return num
}

function excelToNum (str) {
    array_ = str.split("")
    let res = 0
    array_.reverse().forEach((char, idx) => {
        res = res + ( Math.pow(26, idx) * convert(char) )
    })
    
    return res
}

console.log(excelToNum("CK"))

