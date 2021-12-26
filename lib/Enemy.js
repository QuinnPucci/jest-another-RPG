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

// method to get health value
Enemy.prototype.getHealth = function() {
    return `The ${this.name}'s health is now ${this.health}!`;
};

// method to check if enemy is alive
Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
};

// method to get attack value
Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
};

// method to lower health value
Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
};

module.exports = Enemy