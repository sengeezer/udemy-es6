class Character {
  constructor(id, name, location) {
    if (new.target === Character) {
      throw new Error('Abstract class Character cannot be instantiated');
    }
    this.id = id;
    this.name = name;
    this.location = location;
    this.direction = 'right';
    this.score = 0;
  }

  get location() {
    return this.location;
  }

  set location(newLoc) {
    this.location = newLoc;
  }

  ensureBoundary(loc) {
    if (loc[0] < 0) {
      loc[0] = 0;
    } else if (loc[0] > 9) {
      loc[0] = 9;
    }

    if(loc[1] < 0) {
      loc[1] = 0;
    } else if (loc[1] > 9) {
      loc[1] = 9;
    }
  }

  faceUp() {
    this.direction = 'up';
    this.location = [this.location[0] - 1, this.location[1]];
    this.ensureBoundary(this.location);
    console.log('Character moved up');
  }

  faceDown() {
    this.direction = 'down';
    this.location = [this.location[0] + 1, this.location[1]];
    this.ensureBoundary(this.location);
    console.log('Character moved down');
  }

  faceLeft() {
    this.direction = 'left';
    this.location = [this.location[0], this.location[1] - 1];
    this.ensureBoundary(this.location);
    console.log('Character moved left');
  }

  faceRight() {
    this.direction = 'right';
    this.location = [this.location[0], this.location[1] + 1];
    this.ensureBoundary(this.location);
    console.log('Character moved right');
  }

  logPos() {
    console.log(this.position, this.name);
  }

  collidesWith(character) {
    return character.location === this.location;
  }
}

class PlayerCharacter extends Character {
  constructor(id, name, location) {
    super(id, name, location);
  }
  incScore(pts) {
    this.score += pts;
  }
}

class NonPlayerCharacter extends Character {
  constructor(location) {
    super(location);
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

function createPlayer(id, name, location = [Math.random().toFixed(2) * 10, Math.random().toFixed(2) * 10]) {
  return new PlayerCharacter(id, name, location);
}

function createNonPlayer(id, name) {
  let location = [Math.random().toFixed(2) * 10, Math.random().toFixed(2) * 10];

  return new NonPlayerCharacter(id, name, location);
}

let npcArr = '23456'.split('').map(i => {
  return createNonPlayer(i, `diddly_${i}`);
});

let player = createPlayer(1, 'hero');

function changeNpcDir() {
  npcArr.forEach(npc => npc.move());
}

function moveChars() {
  player.move();
  npcArr.forEach(npc => npc.move());
}

function logPos() {
  player.logPos();
  npcArr.forEach(npc => npc.logPos());
}

function processCollisions() {
  let len = npcArr.length;
  npcArr = npcArr.filter(npc => !npc.collidesWith(player));
  player.incScore(len - npcArr.length);
}

function moveLoop() {
  console.log('move started');
  changeNpcDir();
  moveChars();
  logPos();
  processCollisions();
}

setInterval(moveLoop, 5000);
