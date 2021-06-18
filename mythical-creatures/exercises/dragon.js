class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.timesEaten = 0;
  }

  greet = (rider) => {
    return `Hi, ${this.rider}!`
  }

  eat = () => {
    if (this.timesEaten < 2) {
      this.timesEaten++
      return
    } else {
      this.hungry = false
    }
  }
}

module.exports = Dragon;