// JS p5 Game 
// by Victor Sonntag
//
console.log('hello')
const game = new Game();

function preload() {
	game.preload()
}

function setup() {
	
    let canvas = createCanvas(800, 600)
    // center the canvas
    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    canvas.position(x, y);
    game.setup()
    frameRate()

   
    
}

function draw() {
    
	game.draw()
    game.collision()
}

// function mousePressed(){
    
//         if (game.collision() ) {
//             game.targets.splice(i, 1)
//         }
    
// }






/*
// global decleration 
let circleX = 100 
let circleY = 100
let Ymovement = Math.random(-500, 500)
let bg;
//let obj;
let objX = 100
let objY = 100
let y = 0



function setup() {
    // Basic Canvas for Game 
    bg = loadImage('/img/background-img.bmp')
    createCanvas(700, 500);
}

function draw() {
    // sets background//filling color for circle
    background(bg)
    circle(circleX, circleY , 50)
    circleX++
    circleY + Math.random(height)
  
    noStroke()
    fill(255)
}
/*
class circle {  
   constructor() {
    // disables the drawing of outlines
    noStroke()
    fill(255)
 //   this.vy = 0
//moving object// target
// circle    
}   
//this.pos = createVector(x, y)
//this.vel = p5.Vector.random2D()
//this.vel.mult(random(3))
//this.acc = createVector(2, 4)
        
}
*/
