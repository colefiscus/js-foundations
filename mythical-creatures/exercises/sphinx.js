class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length <= 2) {
      this.riddles.push(riddle)
    } else {
      this.riddles.shift()
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(answer) {
    const correctAnswer = this.riddles.find(riddle => riddle.answer === answer);
    if (correctAnswer) {
      const i = this.riddles.indexOf(correctAnswer);
      this.riddles.splice(i, 1);
      return "That wasn't that hard, I bet you don't get the next one"
    } else {
      this.heroesEaten++;
    }
  }
}

module.exports = Sphinx;