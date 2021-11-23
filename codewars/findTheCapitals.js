function findTheCapitals(string) {
    let arrayOfCapitalIndexes = []

    for (let i = 0; i < string.length; i++){
        if (string[i] === string[i].toUpperCase()){
            arrayOfCapitalIndexes.push(i)
        }
    }
    return arrayOfCapitalIndexes
}

module.exports = findTheCapitals