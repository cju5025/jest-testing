const stringReverser = require('./stringReverser.js')

test('reverses "cosmo" into "omsoc"', () => {
    expect(stringReverser("cosmo")).toBe("omsoc")
})