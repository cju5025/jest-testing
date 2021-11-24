function arrayFiltering (array) {
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'string'){
            array.splice(i, 1)
            i--
        }
    }
    return array
}

console.log(arrayFiltering([1,"a",2,"b"]))
module.exports = arrayFiltering