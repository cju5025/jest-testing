function stringReverser(string) {
    let outputString = ''
    
    for (let i = string.length - 1; i >= 0; i--){
        outputString += string[i]
    }
    return outputString
}

module.exports = stringReverser