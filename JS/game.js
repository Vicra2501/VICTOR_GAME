class Game {
    constructor() {
        this.backgroundImage
        this.background = new Background()
        this.targets = []
        console.log('background gets called')
        // player has array to symbole different stars
        this.player = new Player()
        this.score = 0

    }


    setup() {
        //      this.player = new Player()
        this.playerImage = loadImage ('/img/sugarBlue.png')


    }

    preload() {
        this.backgroundImage = loadImage('/img/background-img.bmp')
        this.targetImage = loadImage('/img/suzu1.png')
        this.playerImage = loadImage('/img/sugarBlue.png')
        //       this.pointerImage = circle(mouseX,mouseY,10)//loadImage('')
    }

    draw() {
        clear()
        // this.obstacle.draw()
        //this.player.draw()
        this.background.draw()
  
        text('Score:',  width / 14, height / 8)
        text(this.score, width / 6.2, height / 8)
        textFont('Impact', 20)
        fill(255,255)

        // we want to place an action every x frames -> frame count set by p5 to 60fps
        // console.log(frameCount)
        // we add those little mf to the obstacles array
        if (frameCount % 60 === 0) {
            this.targets.push(new Susuwatari(this.targetImage))
        }
        console.log(this.targets)
        this.targets.forEach(function (target) {
            target.draw()
        })

        // seting the courser for the player
        
            
            cursor('/img/sugarBlue.png', mouseX, mouseY)
          
        // setting collision and susu existing screen
        // this.targets = this.targets.filter(target => {
        //     if (target.collision(this.player) || target.x < 0){
        //         return false
        //     } else {
        //         return true
        //     }
        // })

      
}
    collision() {
		// here the susuwatari detects a collision with the sugarstar
		// the middle of the obstacle
		let targetX = this.targets.forEach(function(target){target.x})
		let targetY = this.targets.forEach(function(target){target.y})
		// the middle of the player
		let sugarX = this.player.x + this.player.width / 2
		let sugarY = this.player.y + this.player.height / 2
		// console.log('collision', playerInfo)
		if (dist(targetX, targetY, mouseX, mouseY) < 150 ) {
			// change the score
			game.score += 1
			console.log(game.score)
            
			return true
        }
		//  else {
		// 	// change the score
		// 	game.score += 1
		// 	console.log(game.score)

		// 	return true
		// }
	}

}

// obstecals = targets
// from L to R, R to L
// random up and down

// player has a pointer as mouseXY
// if clicket on target, obstecal image changes + score++
