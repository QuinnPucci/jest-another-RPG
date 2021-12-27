const Potion = require('./Potion')
const Character = require('./Character')

// player object constructor function
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()]
}

// inherit prototype methods from Charracter
Player.prototype = Object.create(Character.prototype)

// method to return an object with various player properties 
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    }
}

// method to return the inventory array or false if empty
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory
    }
        return false
}

// method to add potion object to player inventory array
Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
  };

// method to use potion
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0]

    switch (potion.name) {
        case "agility":
            this.agility += potion.value
            break
        case "health":
            this.health += potion.value
            break
        case "strength":
            this.strength += potion.value
            break
    }
}
  
module.exports = Player;