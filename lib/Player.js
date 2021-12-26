const Potion = require('../lib/Potion');

// player object constructor function
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()]
}

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

// method to return player health
Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`
}

// method to check if player is alive
Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false
    }
    return true
}
  
module.exports = Player;