const product = require('./product.js')

test('multiplies 3 & 3 to equal 9', () => {
    expect(product(3,3)).toBe(9)
})