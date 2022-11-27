let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  for (let i = 0; i < pelotas.length; i++) {
    if (pelotas[i].isAlife) {
      pelotas[i].update();
      pelotas[i].display();
    } else {
      pelotas.splice(i, 1);
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < 500; i++) {
    let nuevoDiosito = new Diositollevame(mouseX, mouseY);
    pelotas.push(nuevoDiosito);
    //print(pelotas.length);
  }
}

// ----------------------------------
//------------Classes ---------------
//-----------------------------------

//----------- Random Walker ---------
class Diositollevame {
  constructor(_mouseX, _mouseY) {
    this.red = random(150, 200);
    this.green = random(50, 235);
    this.blue = random(100, 150);

    this.t = 0;
    this.tSpeed = random(0, 2);
    this.noiseShift = random(1000);
    this.lifespan = int(random(10, 20));

    this.isAlife = true;

    this.pos = createVector(_mouseX, _mouseY);
    this.speed = createVector(random(-3, 3), random(-3, 3));
    this.diametro = random(10, 30);
    this.bolitaFinal = this.diametro / 2;
    print('Hola! soy diosito ' + this.lifespan + 'frames.');
  }
  update(_t) {

    this.speed.rotate(
      map(noise(this.t + this.noiseShift), 0, 1, -0.1, 0.2));
    this.pos.add(this.speed);

    this.t += this.tSpeed;

    this.lifespan--;

  }
  display() {
    stroke('rgba(0,0,0,.2)');
    strokeWeight(3)
    fill(this.red, this.green, this.blue);
    ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);
    if (this.lifespan <= 0) {
      this.modotieso();
    }

  }

  modotieso() {
    this.diametro -= 0.6;
    if (this.diametro <= 0) {
      this.isAlife = false;
      print('tiesa por elevada y ' + this.isAlife);
      ellipse(this.pos.x, this.pos.y, this.bolitaFinal, this.bolitaFinal);

    }

  }
}