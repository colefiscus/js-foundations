class Stark {
  constructor({ name, area }) {
    this.name = name;
    this.location = area || 'Winterfell';
  }
}

module.exports = Stark;