class Centaur {
  constructor({ name, type }) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.crankiness = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shootBow() {
    this.crankiness++;
    if (this.crankiness === 3) {
      this.cranky = true;
    }
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    return `Twang!!!`;
  }

  run() {
    this.crankiness++;
    if (this.crankiness === 3) {
      this.cranky = true;
    }
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    } else {
      this.cranky = false;
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;