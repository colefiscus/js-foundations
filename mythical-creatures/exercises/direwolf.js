class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length <= 1) {
      this.starksToProtect.push(stark)
      this.huntsWhiteWalkers = false;
      stark.safe = true;
    }
  }

  leave(stark) {
    this.starksToProtect.splice(stark);
    stark.safe = false;
  }
}

module.exports = Direwolf;