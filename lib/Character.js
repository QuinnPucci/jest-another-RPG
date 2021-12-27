class Character {

    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
      }

// method to check if health is higher then 0
isAlive() {
  if (this.health === 0) {
    return false;
  }
  return true;
}

// method to get health value
getHealth() {
    return `${this.name}'s health is now ${this.health}!`
  }

// method to get attack value
getAttackValue() {
  const min = this.strength - 5
  const max = this.strength + 5

  return Math.floor(Math.random() * (max - min) + min)
}

// method to lower health after attack
reduceHealth(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
 }
}
module.exports = Character;