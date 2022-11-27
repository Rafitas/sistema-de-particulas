var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print('diosito ya llevame');

  for (var i = 0; i < 5000; i++) {
    var b = new Ball(i);
    balls.push(b);
  }
}

function draw() {
  background(0);
  noFill(100);

  translate(width / 2, height / 2);
  for (var i = 0; i < 200; i++) {
    push();

    rotate(sin(frameCount + i) * 100);
    var r = map(sin(frameCount), -1, 1, 50, 255);
    var g = map(cos(frameCount / 2), -1, 1, 50, 255);
    var b = map(sin(frameCount / 4), -1, 1, 50, 255);

    stroke(r, g, b);

    rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i);
    pop();

  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].collide();
    balls[i].edges();
    balls[i].move();
    balls[i].show();
  }

}

//CLASES//

class Ball {
  constructor() {
    this.radius = 6
    this.pos = createVector(random(this.radius, width - this.radius), random(this.radius, height - this.radius))
    this.vel = p5.Vector.random2D(2).mult(1);
  }

  collide() {
    for (var i = 0; i < balls.leghth; i++) {
      var d = dist(this.pos.x, this.pos.y, balls[i].pos.x, balls[i].pos.y);

      if (d < this.radius + balls[i].radius && this.index !== i) {
        fill(105, 0, 0);
        break
      } else {
        fill(50);
      }
    }
  }
  edges() {
    if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
      this.vel.x *= 1
    }
    if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
      this.vel.y *= 1
    }
  }

  move() {
    this.pos.add(this.vel);

  }

  show() {
    noStroke(1);
    fill(200);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);

  }

}