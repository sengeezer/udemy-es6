class Stat {
  static create() {
    return new Stat();
  }
  constructor() {
    console.log('constructor');
  }
}

// have to call static methods from the class itself
let stats = Stat.create();

// can't do

// stats.create
