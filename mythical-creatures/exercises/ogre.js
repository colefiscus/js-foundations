class Ogre {
  constructor({ name, abode = "Swamp" }) {
    this.name = name;
    this.home = abode;
    this.swings = 0;
  }

  encounter(being) {
    being.encounterCounter++;
    if (being.noticesOgre()) {
      this.swingAt(being)
    }
    if (this.swings === 2 && being.knockedOut === false) {
      being.knockedOut = true;
    }
  }

  swingAt(being) {
    this.swings++
  }

  apologize(being) {
    being.knockedOut = false;
  }
}

module.exports = Ogre;