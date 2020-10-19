let myVHS = [];
let song = [1, 2];
let img = [0, 1]
let button = []

var analyzer



function preload() {
  img[0] = loadImage("./assets/images/0.PNG");
  img[1] = loadImage("./assets/images/1.PNG");
  img[2] = loadImage("./assets/images/2.PNG");
  song[1] = loadSound("./assets/sound/rick.mp3");
  song[2] = loadSound("./assets/sound/Loser.mp3");

}

function setup() {
  createCanvas(800, 600)
  angleMode(DEGREES)


  //sound control

  analyzer1 = new p5.Amplitude();
  analyzer1.setInput(song[1]);
  analyzer2 = new p5.Amplitude();
  analyzer2.setInput(song[2]);

  //VHS class options
  const roll = {
    k: 200,
    j:1,
    text: "choose me",
    Wposition1: 82,
    Hposition1: 360,
    Ww1: 66,
    Hh1: 20,
    Wposition2: 82+66,
    Hposition2: 345,
    Ww2: 66,
    Hh2: 20,
    Wposition3: 52,
    Ww3: 132,

    hovering : false
  }
  const lofi = {
    k: 300,
    j:2,
    text: "boring politics",
    Wposition1: 92,
    Hposition1: 385,
    Ww1: 66,
    Hh1: 20,
    Wposition2: 92+66,
    Hposition2: 375,
    Ww2: 66,
    Hh2: 20,
    Wposition3: 62,
    Ww3: 132,
  }
//VHS push
  myVHS = [new VHS(roll), new VHS(lofi)];







}

function draw() {
illus()
  for (let i = 0; i < myVHS.length; i++) {

    myVHS[i].over();
    myVHS[i].show();
  }
  console.log(mouseX)
  let volume1 = 0;
  let volume2 = 0;
  volume1 = analyzer1.getLevel();
  volume1 = map(volume1, 0, 1, 10, 300)
  volume2 = analyzer2.getLevel();
  volume2 = map(volume2, 0, 1, 10, 300)

  let d = 10;

  for (let q = 374; q < 480; q += d) {
 let h = (q-374)/10
      push();
noFill();
strokeWeight(1)
        if (song[1].isPlaying()){

          stroke("#4B1B27")

          rect(q , 200+(-volume1/2)/h-q/18, 4, volume1/h)
          rect(760-q , (157.7+(-volume1/2)/h)+q/18, 4, volume1/h)
        }
      if (song[2].isPlaying()){
        stroke("#ff8080")
        rect(q , 200+(-volume2/2)/h-q/18, 3, volume2/h)
        rect(760-q , (157.7+(-volume2/2)/h)+q/18, 3, volume2/h)
      }
      pop();

}
}

function illus() {

  if (windowWidth > 1000) {
    resizeCanvas(800, 600);
    if(song[1].isPlaying()){
       image(img[1], 0, 0, 800, 600);
       document.body.style.backgroundColor = "#ECAD6F"

    }
    else if (song[2].isPlaying()){
      image(img[2], 0, 0, 800, 600);
    document.body.style.backgroundColor = "#092B34"}
      else {
        image(img[0], 0, 0, 800, 600);
      document.body.style.backgroundColor = "gray"}
  } else if (windowWidth < 800 && windowWidth > 600) {
    resizeCanvas(400, 300);
    image(img, 0, 0, 400, 300);
  }

}


function mouseClicked(){
	for(var i = 0; i < myVHS.length; i++){
		if(myVHS[i].click()){

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
    push();
    noFill();
    noStroke();

    if(this.hovering){
      stroke("red")
      strokeWeight(3)
  console.log(this.hovering)

    }
    if(this.clicked){
      fill("red")
song[1].stop()
song[2].stop()
 song[this.j].play()





    }
this.clicked = false;



  rect(this.Wposition1, this.Hposition1, this.Ww1, this.Hh1 )
  rect(this.Wposition2, this.Hposition2, this.Ww2, this.Hh2 )
  fill("black")
  textSize(15);
  textAlign(CENTER);
  rotate(-5)
  textFont('Permanent Marker');
  text(this.text, this.Wposition3, this.Hposition1+7, this.Ww3, this.Hh1  );
  pop()
  }
  over() {
    let q =this.Wposition1+this.Ww1;
    let s =this.Hposition1+this.Hh1;
    let w =this.Wposition2+this.Ww2;
    let e =this.Hposition2+this.Hh2;
     if (mouseX>=this.Wposition1 && mouseX<=q && mouseY>=this.Hposition1 && mouseY<=s ||
       mouseX>=this.Wposition2 && mouseX<=w && mouseY>=this.Hposition2 && mouseY<=e) {

          this.hovering = true;
          //song[this.j].play()

 }
 		else{
 			this.hovering = false;

 		}
 		return this.hovering;
   }
   click(){
   		if(this.over()){
   			this.clicked = true;


   		};
   	}



}



//function hover()    {
//if(mouseX>65 && mouseX<185+65 && mouseY>372 && mouseY<372+28){

//  stroke("red")
//  strokeWeight(2)}
//  else {

//      noStroke()
//    }
//}


//function mousePressed() { //Runs whenever the mouse is pressed
//  if (mouseX > 65 && mouseX < 185 + 65 && mouseY > 372 && mouseY < 372 + 28) {
//    if (song[1].isPlaying()) {
//      song[1].stop();
//    } else {
//      song[1].play();
//    }
//    song[2].stop()
//    document.body.style.backgroundColor = "red"
//  }
//  if (mouseX > width / 3.6 && mouseX < width / 3.6 + width / 8 && mouseY > height / 3 && mouseY < height / 3 + height / 26) {
//    song[2].play();
//    song[1].stop()
//  }
//}
//
//function playsong() {
//
//  song[1].play()
//}
