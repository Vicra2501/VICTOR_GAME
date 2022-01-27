class Susuwatari {
    constructor(image) {
        this.image = image
        this.x =  width  
        // sets different starting points heightwise
        this.y = (Math.random(height - 100, width - 100) * height) 
        this.width = 50
        this.height = 50
    }

    
// draws a target accros the canvas
    draw() {
        // directio and speed of targets
        this.x = this.x - 5
        // up and down movement of target
        if (frameCount % 10 === 0 ){
        this.y = this.y + random(-25, 25)
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }

    // collision(playerInfo) {
	// 	// here the susuwatari detects a collision with the sugarstar
	// 	// the middle of the obstacle
	// 	let targetX = this.x + this.width / 2
	// 	let targetY = this.y + this.height / 2
	// 	// the middle of the player
	// 	let sugarX = playerInfo.x + playerInfo.width / 2
	// 	let sugarY = playerInfo.y + playerInfo.height / 2
	// 	// console.log('collision', playerInfo)
	// 	if (dist(targetX, targetY, sugarX, sugarY) > 15) {
	// 		return false
	// 	} else {
	// 		// change the score
	// 		game.score += 1
	// 		console.log(game.score)
	// 		return true
	// 	}
	// }
  
    //   // the middle of the pointer
    //   let playerX = playerInfo.x = playerInfo.width / 2
    //   let playerY = playerInfo.y = playerInfo.heigth / 2
    //   // console log('collision', playerInfo)
    //   if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
    //       return false
    //   } else {
    //       return true
    //   }
  

    //   draw() {
    //       this.x--
    //       this.x++
    //       image(this.image, this.x, this.y, this.width, this.heigth)
   } 
