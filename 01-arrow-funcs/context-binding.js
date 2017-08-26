const which = 2;

/* old style */
/* with self */

function ball(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  // 40fps
  this.ft = 25;

  // preserve outer reference
  let self = this;

  setInterval(() => {
    self.x += vx;
    self.y += vy;
    console.log(self.x, self.y);
  }, this.dt);
}

if (which === 0) {
  ball(0, 0, 1, 1);
}

/* old style */
/* without self */

function ball1(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  // 40fps
  this.ft = 25;

  setInterval(function () {
    this.x += vx;
    this.y += vy;
    console.log(this.x, this.y);
  }.bind(this), this.dt);
}

if (which === 1) {
  ball1(0, 0, 1, 1);
}

/* NEW style */
function ball2(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  // 40fps
  this.ft = 25;

  setInterval(() => {
    this.x += vx;
    this.y += vy;
    console.log(this.x, this.y);
  }, this.dt);
}

if (which === 2) {
  ball2(0, 0, 1, 1);
}
