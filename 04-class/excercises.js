class Character {
  constructor(location) {
    if (new.target === Character) {
      throw new Error('Abstract class Character cannot be instantiated');
    }
    this.location = location || [Math.random().toFixed(2) * 10, Math.random().toFixed(2) * 10];
    this.direction = 'right';
    this.score = 0;
  }

  get location() {
    return this.location;
  }

  set location(newLoc) {
    this.location = newLoc;
  }

  faceUp() {
    this.direction = 'up';
    this.location = [this.location[0] - 1, this.location[1]];
    console.log('Character moved up');
  }

  faceDown() {
    this.direction = 'down';
    this.location = [this.location[0] + 1, this.location[1]];
    console.log('Character moved down');
  }

  faceLeft() {
    this.direction = 'left';
    this.location = [this.location[0], this.location[1] - 1];
    console.log('Character moved left');
  }

  faceRight() {
    this.direction = 'right';
    this.location = [this.location[0], this.location[1] + 1];
    console.log('Character moved right');
  }
}

class PlayerCharacter extends Character {
  constructor(location) {
    super(location);
  }
  move() {

  }
}

class NonPlayerCharacter extends Character {
  constructor(location) {
    super(location);
    setInterval(this.move, 5000);
  }
  move() {
    let move = Math.random().toFixed(2);

    if(0.00 <= move && move <= 0.20) {
      this.direction = this.faceUp();
    } else if (0.21 <= move && move <= 0.40) {
      this.direction = this.faceDown();
    } else if (0.41 <= move && move <= 0.60) {
      this.direction = this.faceLeft();
    } else if (0.61 <= move && move <= 0.80) {
      this.direction = this.faceRight();
    } else if (0.81 <= move && move <= 1) {
      this.direction = this.faceRight();
    } else {
      throw new Error(`Invalid parameter: ${move}`);
    }
  }
}
