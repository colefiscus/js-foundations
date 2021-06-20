class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
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
      this.riddles.splice(correctAnswer)
    }
  }
}

module.exports = Sphinx;