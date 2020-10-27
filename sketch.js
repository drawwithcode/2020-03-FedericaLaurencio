let myVHS = [];
let song = [];
let img = []
let playingIndex = -1;
let analyzer;
var PP = [];
var NofSongsPP = 4;
let colors = [
  "#00E0D5",
  "#9AC5E4",
  "#E76468",
  "#4B1B27"
]
let colorsBG = [
  "#006C92",
  "#925098",
  "#092B34",
  "#ECAD6F"
]






function preload() {
  img[0] = loadImage("./assets/images/zero.png");
  img[1] = loadImage("./assets/images/uno.png");
  img[2] = loadImage("./assets/images/due.png");
  img[3] = loadImage("./assets/images/tre.png");
  img[4] = loadImage("./assets/images/quattro.png");
  song[1] = loadSound("./assets/sound/uno.mp3");
  song[2] = loadSound("./assets/sound/due.mp3");
  song[3] = loadSound("./assets/sound/tre.mp3");
  song[4] = loadSound("./assets/sound/quattro.mp3");

}

function setup() {
  createCanvas(800, 600)
  angleMode(DEGREES)
  for (var i = 1; i < NofSongsPP; i++) {
    PP.push(false);
  }

  const roll = {
    k: 200,
    j: 1,
    text: "CHOOSE ME",
    Wposition1: 82,
    Hposition1: 358,
    Ww1: 66,
    Hh1: 20,
    Wposition2: 78 + 66,
    Hposition2: 345,
    Ww2: 66,
    Hh2: 20,
    Wposition3: 52,
    Ww3: 132,

    hovering: false
  }
  const conte = {
    k: 300,
    j: 2,
    text: "JUST POLITICS",
    Wposition1: 82,
    Hposition1: 385,
    Ww1: 66,
    Hh1: 20,
    Wposition2: 78 + 66,
    Hposition2: 375,
    Ww2: 66,
    Hh2: 20,
    Wposition3: 58,
    Ww3: 132,
  }
  const komm = {
    k: 300,
    j: 3,
    text: "GET IN",
    Wposition1: 82,
    Hposition1: 410,
    Ww1: 66,
    Hh1: 20,
    Wposition2: 78 + 66,
    Hposition2: 400,
    Ww2: 66,
    Hh2: 20,
    Wposition3: 47,
    Ww3: 132,
  }
  const spooky = {
    k: 300,
    j: 4,
    text: "SPOOOKY",
    Wposition1: 82,
    Hposition1: 430,
    Ww1: 66,
    Hh1: 20,
    Wposition2: 78 + 66,
    Hposition2: 424,
    Ww2: 66,
    Hh2: 20,
    Wposition3: 44,
    Ww3: 132,
  }


  myVHS = [new VHS(roll), new VHS(conte), new VHS(komm), new VHS(spooky)];
}


function draw() {
  illus()
  for (let i = 0; i < myVHS.length; i++) {
    myVHS[i].over();
    myVHS[i].show();
  }
  viz()
}

function viz() {
  let d = 10;
  for (let q = 374; q < 480; q += d) {
    let h = (q - 374) / 10
    push();
    noFill();
    strokeWeight(1)

    if (playingIndex !== -1 && song[playingIndex].isPlaying()) {

      let volume = map(analyzer.getLevel(), 0, 1, 10, 300);
      colorOK = colors[playingIndex - 1]
      stroke(colorOK);
      rect(q, 200 + (-volume / 2) / h - q / 18, 3, volume / h)
      rect(760 - q, (157.7 + (-volume / 2) / h) + q / 18, 3, volume / h)
    }
  }
}

function illus() {

  resizeCanvas(800, 600);
  if (playingIndex !== -1 && song[playingIndex].isPlaying()) {
    image(img[playingIndex], 0, 0, 800, 600);
    colorOKBG = colorsBG[playingIndex - 1]
    document.body.style.backgroundColor = colorOKBG
  } else {
    image(img[0], 0, 0, 800, 600);
    document.body.style.backgroundColor = "gray"
  }
}

function mousePressed() {

  if (mouseX > 280 && mouseX < 325 && mouseY > 286 && mouseY < 326) {
    if (playingIndex !== -1 && song[playingIndex].isPlaying()) {
      song[playingIndex].pause()
      PP[playingIndex - 1] = true;
    } else if (PP[playingIndex - 1] == true) {
      analyzer = new p5.Amplitude();
      analyzer.setInput(song[playingIndex]);
      song[playingIndex].play()
      PP[playingIndex - 1] = false;

    }
  }
}

function mouseClicked() {

  for (var i = 0; i < myVHS.length; i++) {
    if (myVHS[i].click()) {

    };
  }

}

class VHS {
  constructor({
    k,
    j,
    text,
    Wposition1,
    Hposition1,
    Ww1,
    Hh1,
    Wposition2,
    Hposition2,
    Ww2,
    Hh2,
    Wposition3,
    Ww3,
    hovering,
    clicked,
    hoveringStarted,
  } = {}) {
    this.j = j;
    this.k = k;
    this.text = text;
    this.Wposition1 = Wposition1;
    this.Hposition1 = Hposition1;
    this.Ww1 = Ww1;
    this.Hh1 = Hh1;
    this.Wposition2 = Wposition2;
    this.Hposition2 = Hposition2;
    this.Ww2 = Ww2;
    this.Hh2 = Hh2;
    this.Wposition3 = Wposition3;
    this.Ww3 = Ww3;
    this.hovering = false;
    this.clicked = false;
    this.hoveringStarted = 0;
  }
  show() {

    noFill();
    noStroke();
    blendMode(MULTIPLY)
    fill("grey")
    if (this.hovering) {
      fill("black")
    }
    if (this.clicked) {
      fill("red")
      song[1].stop()
      song[2].stop()
      song[3].stop()
      song[4].stop()

      playingIndex = this.j;

      let mySong = song[playingIndex]
      mySong.play();

      analyzer = new p5.Amplitude();
      analyzer.setInput(song[playingIndex]);
    }
    this.clicked = false;

    //rect(this.Wposition1, this.Hposition1, this.Ww1, this.Hh1 )
    //rect(this.Wposition2, this.Hposition2, this.Ww2, this.Hh2 )

    push();

    textSize(19);
    textAlign(CENTER);
    rotate(-5)
    textFont('East Sea Dokdo');
    text(this.text, this.Wposition3, this.Hposition1 + 7, this.Ww3, this.Hh1);

    pop()
  }

  over() {
    let q = this.Wposition1 + this.Ww1;
    let s = this.Hposition1 + this.Hh1;
    let w = this.Wposition2 + this.Ww2;
    let e = this.Hposition2 + this.Hh2;
    if (mouseX >= this.Wposition1 && mouseX <= q && mouseY >= this.Hposition1 && mouseY <= s ||
      mouseX >= this.Wposition2 && mouseX <= w && mouseY >= this.Hposition2 && mouseY <= e) {

      this.hovering = true;

    } else {
      this.hovering = false;

    }
    return this.hovering;
  }
  click() {
    if (this.over()) {
      this.clicked = true;
    }
  }

}
