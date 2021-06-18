var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    const statue = new Statue(victim.name)
    this.statues.push(statue);
  }
}

module.exports = Medusa;