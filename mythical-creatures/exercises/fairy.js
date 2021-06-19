class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dresses) {
    this.clothes.dresses = [...this.clothes.dresses, dresses].flat()
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant)
      if (this.humanWards.length === 3) {
        this.disposition = 'Good natured';
      }
      return infant.disposition = 'Malicious';
    } else {
      return infant
    }
  }
}

module.exports = Fairy;