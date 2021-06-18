var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    if (this.statues.length < 3) {
      const statue = new Statue(victim.name)
      this.statues.push(statue);
    } else {
      const freedStatue = this.statues.shift()
      const statue = new Statue(victim.name)
      this.statues.push(statue);
      const freedPerson = new Person(freedStatue.name)
      freedPerson.mood = 'relieved';
      return freedPerson;
    }
  }
}

module.exports = Medusa;