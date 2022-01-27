class Susuwatari {
    constructor(image) {
        this.image = image
        this.x = width
        // sets different starting points heightwise
        this.y = (Math.random(height - 100, width - 100) * height)
        this.width = 60
        this.height = 60
        this.num = random(-5, 5)
        this.frequenzy = random(5, 7)
    }


    // draws a target accros the canvas


    draw() {
        // directio and speed of targets
        this.x = this.x - 5
        // up and down movement of target
        // let num = random(1,10)
        //  if( num % 2 == 0 ){
        //      num = -num
        //      console.log(num)

        //     } 
        this.y = this.y + (this.num)
        if (frameCount % 30 <= Math.random() || this.y > 600 || this.y < -20) {
            this.num = -this.num 
            if (frameCount % 9 == 0){
                this.num + random(0,50)
            }
        }
            /*      else if( frameCount % 60 >= Math.floor(Math.random() * 60) ){
                  this.y = this.y + random(-1, -100)
                      } */

            image(this.image, this.x, this.y, this.width, this.height)
    }

    //.b
    // let verticalMovement = 0
    // // directio and speed of targets
    // this.x = this.x - 5
    // // up and down movement of target
    // if (frameCount % 10 === 0 && verticalMovement < 25){
    // //a. this.y = this.y + random(-25, 25)
    // this.y = this.y + verticalMovement
    // verticalMovement = verticalMovement + random(0, 25)

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
