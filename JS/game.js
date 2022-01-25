class Game {
    constructor() {
        this.backgroundImage
        this.score = 0
        this.background = new Background()
        this.targets = []
        console.log('background gets called')
    }


    setup() {
  //      this.player = new Player()
        
    }

    preload() {
        this.backgroundImage =  loadImage('/img/background-img.bmp')
        this.targetImage = loadImage('/img/suzu1.png')
 //       this.pointerImage = circle(mouseX,mouseY,10)//loadImage('')
    }

    draw() {
        clear()
       // this.obstacle.draw()
       // this.player.draw()
        this.background.draw()
        // we want to place an action every x frames -> frame count set by p5 to 60fps
        // console.log(frameCount)
        // we add those little mf to the to the obstacles array
        this.targets.push(new Susuwatari(this.targetImage))
        console.log(this.targets)
        this.targets.forEach(function (target) {
            target.draw()
        })
    }
        
//  if (framecount % 60 === 0) {
//         this.targets = this.targets.filter(target => {
//             // also if the susu leaves the screen it has to be removed from the array
//             if (target.collision(this.player) || target.x < 0) {
//                 return false
//             } else {
//                 return true
//             }
//         })
    
    }


// obstecals = targets
// from L to R, R to L
// random up and down

// player has a pointer as mouseXY
// if clicket on target, obstecal image changes + score++
