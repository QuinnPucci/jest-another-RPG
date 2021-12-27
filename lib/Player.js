const Potion = require('./Potion')
const Character = require('./Character')

// player object constructor function
class Player extends Character {
constructor (name = '') {
    super(name)
    this.inventory = [new Potion('health'), new Potion()]
}



// method to return an object with various player properties 
getStats() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    }
}

// method to return the inventory array or false if empty
getInventory() {
    if (this.inventory.length) {
        return this.inventory
    }
        return false
}

// method to add potion object to player inventory array
addPotion(potion) {
    this.inventory.push(potion);
  };

// method to use potion
usePotion(index) {
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
}


module.exports = Player;