let horse = {
  horseName: 'QuickBux',
  toString: function() {
    return this.horseName;
  }
};

let rider = {
  riderName: 'Frank',
  toString: function() {
    return this.riderName;
  }
};

let horseRiderStringUtility = {
  toString: function() {
    return this.riderName + ' on ' + this.horseName;
  }
};

let racer = Object.assign(
  {},
  horse,
  rider,
  horseRiderStringUtility
);

console.log(racer.toString());
