const Potion = require('./Potion')
const Character = require('./Character')

// constructor function to create enemy object
class Enemy extends Character {
    constructor (name, weapon) {
        super(name)
    this.weapon = weapon
    this.potion = new Potion()
}

// method to describe enemy and weapon
getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  };

}
module.exports = Enemy