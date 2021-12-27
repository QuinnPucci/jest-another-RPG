const Potion = require('./Potion');

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

// method to reduce health
Player.prototype.reduceHealth = function(health) {
    this.health -= health
    
    if (this.health < 0) {
        this.health = 0
    }
}

// method to get player attack value (strength)
Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
};

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