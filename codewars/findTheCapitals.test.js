const findTheCapitals = require('./findTheCapitals.js')

test('searches "CoSMo" for capital letters, returning the array of indexes [0,2,3]', () => {
    expect(findTheCapitals("CoSMo")).toBe([0,2,3])
})