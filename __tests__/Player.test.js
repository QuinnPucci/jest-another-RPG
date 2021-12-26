const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion')
console.log(new Potion())

// test for player object constructor
test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    )
});

// test for player stats method
test("gets player's stats as an object", () => {
    const player = new Player('Dave')

    expect(player.getStats()).toHaveProperty('potions')
    expect(player.getStats()).toHaveProperty('health')
    expect(player.getStats()).toHaveProperty('strength')
    expect(player.getStats()).toHaveProperty('agility')
})

// test for player inventory method
test('gets inventory from player or returns false', () => {
    const player = new Player('Dave')

    expect(player.getInventory()).toEqual(expect.any(Array))

    player.inventory = []

    expect(player.getInventory()).toEqual(false)
})

// test for check players health value method
test("gets player's health value", () => {
    const player = new Player ('Dave')

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()))
})

// test for check if player is alive method
test('checks if player is alive or not', () => {
    const player = new Player('Dave')

    expect(player.isAlive()).toBeTruthy()

    player.health = 0 

    expect(player.isAlive()).toBeFalsy()
})

// test for reduce health method
test("subtracts from player's health", () => {
    const player = new Player('Dave')
    const oldHealth = player.health

    player.reduceHealth(5)

    expect(player.health).toBe(oldHealth - 5)

    player.reduceHealth(99999)

    expect(player.health).toBe(0)
})