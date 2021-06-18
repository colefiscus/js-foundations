class Vampire {
  constructor(name, pet = 'bat') {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.ouncesDrank = 0;
  }

  drink = () => {
    if (this.ouncesDrank < 49) {
      this.ouncesDrank += 10;
      this.thirsty = false;
    } else {
      return 'I\'m too full to drink anymore!';
    }
  }
}

module.exports = Vampire;