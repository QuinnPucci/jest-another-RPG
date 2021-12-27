const Potion = require('../lib/Potion.js')

// test for creation of a health potion object
test('creates a health potion object', () => {
    const potion = new Potion('health')

    expect(potion.name).toBe('health')
    expect(potion.value).toEqual(expect.any(Number))
})

// test for creation of random potion object
test('creates a random potion object' , () => {
    const potion = new Potion()
    expect(potion.name).toEqual(expect.any(String))
    expect(potion.name.length).toBeGreaterThan(0)
    expect(potion.value).toEqual(expect.any(Number))
})