const Potion = require('./Potion.js');

// constructor function to create enemy object
function Enemy(name, weapon) {
    this.name = name
    this.weapon = weapon
    this.potion = new Potion()

    this.health = Math.floor(Math.random() * 10 + 85)
    this.strength = Math.floor(Math.random() * 5 + 5)
    this.agility = Math.floor(Math.random() * 5 + 5)
}

module.exports = Enemy