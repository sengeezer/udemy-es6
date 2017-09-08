// TODO: Make it work

let horse = {
  horseName: 'QuickBux',
  toString: () => this.horseName
};

let rider = {
  riderName: 'Frank',
  toString: () => this.riderName
};

let horseRiderStringUtility = {
  toString: () => `${this.riderName} on ${this.horseName}`
};

let racer = Object.assign(
  {},
  horse,
  rider,
  horseRiderStringUtility
);

console.log(racer.toString());
