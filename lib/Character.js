function Character() {}

// method to check if health is higher then 0
Character.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
}

// method to get health value
Character.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`
  }

// method to get attack value
Character.prototype.getAttackValue = function() {
  const min = this.strength - 5
  const max = this.strength + 5

  return Math.floor(Math.random() * (max - min) + min)
}

// method to lower health after attack
Character.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
}

module.exports = Character;