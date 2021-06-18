class Centaur {
  constructor({ name, type }) {
    this.name = name;
    this.breed = type;
  }

  shootBow() {
    return `Twang!!!`
  }

  run() {
    return 'Clop clop clop clop!!!'
  }
}

module.exports = Centaur;