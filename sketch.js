let myVHS = [];
let song = [1, 2];
let img = [0, 1]
let button = []
let g = false;
let h = false;
let f = false;
let d = false;
let volume1 = 0;
let volume2 = 0;
let volume3 = 0;
let volume4 = 0;
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
  for(var i = 1; i < NofSongsPP; i++) {
    PP.push(false);
  }
  //sound control



  //VHS class options
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

  //VHS push
  myVHS = [new VHS(roll), new VHS(conte), new VHS(komm), new VHS(spooky)];
}

function setAnalyzer() {
  // analyzer1 = new p5.Amplitude();
  // analyzer1.setInput(song[1]);
  // analyzer2 = new p5.Amplitude();
  // analyzer2.setInput(song[2]);
  // analyzer3 = new p5.Amplitude();
  // analyzer3.setInput(song[3]);
  // analyzer4 = new p5.Amplitude();
  // analyzer4.setInput(song[4]);
}

function draw() {
  illus()
  for (let i = 0; i < myVHS.length; i++) {

    myVHS[i].over();
    myVHS[i].show();
  }
  //console.log(mouseY)

  //rect(280, 286, 45, 40)

  viz()

}

function viz() {
  //
  // volume1 = analyzer1.getLevel();
  // volume1 = map(volume1, 0, 1, 10, 300)
  // volume2 = analyzer2.getLevel();
  // volume2 = map(volume2, 0, 1, 10, 300)
  // volume3 = analyzer3.getLevel();
  // volume3 = map(volume3, 0, 1, 10, 300)
  // volume4 = analyzer4.getLevel();
  // volume4 = map(volume4, 0, 1, 10, 300)
  let d = 10;
  for (let q = 374; q < 480; q += d) {
    let h = (q - 374) / 10
    push();
    noFill();
    strokeWeight(1)



    if (playingIndex !== -1 && song[playingIndex].isPlaying()) {

      let volume = map(analyzer.getLevel(), 0, 1, 10, 300);
        colorOK= colors[playingIndex - 1]
        stroke(colorOK);
        //console.log(volume)
      rect(q, 200 + (-volume / 2) / h - q / 18, 3, volume / h)
      rect(760 - q, (157.7 + (-volume/ 2) / h) + q / 18, 3, volume / h)
    }

    // if (song[1].isPlaying() == true) {
    //
    //   stroke("#00E0D5")
    //
    //   rect(q, 200 + (-volume1 / 2) / h - q / 18, 4, volume1 / h)
    //   rect(760 - q, (157.7 + (-volume1 / 2) / h) + q / 18, 4, volume1 / h)
    // } else if (song[2].isPlaying() == true) {
    //   stroke("#9AC5E4")
    //   rect(q, 200 + (-volume2 / 2) / h - q / 18, 3, volume2 / h)
    //   rect(760 - q, (157.7 + (-volume2 / 2) / h) + q / 18, 3, volume2 / h)
    // } else if (song[3].isPlaying() == true) {
    //   stroke("#E76468")
    //   rect(q, 200 + (-volume3 / 2) / h - q / 18, 3, volume3 / h)
    //   rect(760 - q, (157.7 + (-volume3 / 2) / h) + q / 18, 3, volume3 / h)
    // } else if (song[4].isPlaying() == true) {
    //   stroke("#4B1B27")
    //   rect(q, 200 + (-volume4 / 2) / h - q / 18, 3, volume4 / h)
    //   rect(760 - q, (157.7 + (-volume4 / 2) / h) + q / 18, 3, volume4 / h)
    // }
    pop();

  }
}

function illus() {


  let colorsBG = [
    "#006C92",
    "#925098",
    "#092B34",
    "#ECAD6F"
  ]

  resizeCanvas(800, 600);
  if (playingIndex !== -1 && song[playingIndex].isPlaying()) {
    image(img[playingIndex], 0, 0, 800, 600);
    colorOKBG= colorsBG[playingIndex - 1]
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

    }}
  //   if (song[2].isPlaying() == true) {
  //     song[2].pause()
  //     h = true;
  //
  //   } else if (h == true) {
  //     song[2].play()
  //     h = false;
  //   }
  //   if (song[3].isPlaying() == true) {
  //     song[3].pause()
  //     f = true;
  //
  //   } else if (f == true) {
  //     song[3].play()
  //     f = false;
  //   }
  //   if (song[4].isPlaying() == true) {
  //     song[4].pause()
  //     d = true;
  //   } else if (d == true) {
  //     song[4].play()
  //     d = false;
  //   }
  // }

}

function mouseClicked() {
  //console.log(myVHS)
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

    fill("gray")
    if (this.hovering) {
      fill("black")
      //stroke("white")

      //strokeWeight(1)

      //console.log(this.hovering)

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
      //song[this.j].play()

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
