class Ogre {
  constructor({ name, abode = "Swamp" }) {
    this.name = name;
    this.home = abode;
    this.swings = 0;
  }

  encounter(being) {
    being.encounterCounter++;
  }

  swingAt(being) {
    this.swings++
  }
}

module.exports = Ogre;