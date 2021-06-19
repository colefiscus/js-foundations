const Direwolf = require("./direwolf");

class Stark {
  constructor({ name, area }) {
    this.name = name;
    this.location = area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (!this.safe) {
      return 'Winter is Coming'
    } else {
      return 'The North Remembers'
    }
  }

  callDirewolf(name, home) {
    const direwolf = new Direwolf('Nymeria', 'Winterfell')
    direwolf.home = this.location;
    direwolf.protect(this)
    return direwolf;
  }
}

module.exports = Stark;