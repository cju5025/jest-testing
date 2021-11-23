const arrayFiltering = require('./arrayFiltering.js')

test('filters strings out of an array so [1,"a","b",2,"c",3] is filtered to [1,2,3]', () => {
    expect(arrayFiltering([1,"a","b",2,"c",3])).toStrictEqual([1,2,3])
})