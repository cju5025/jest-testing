function arrayFiltering (array) {
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'string'){
            array.splice(i, 1)
            i--
        }
    }
    return array
}
module.exports = arrayFiltering