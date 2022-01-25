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
        this.x = this.x - 2
        // up and down movement of target
        if (frameCount % 30 === 0 ){
        this.y = this.y + random(-15, 15)
        }
        image(this.image, this.x, this.y, this.width, this.height)
    }

    /*  collision (playerInfo) {
      // here the object detects that he got hit by the players pointer
      // the middle of the target
      let susuwatariX = this.x + this.width / 2
      let susuwatariY = this.y + this.heigth / 2
  
      // the middle of the pointer
      let playerX = playerInfo.x = playerInfo.width / 2
      let playerY = playerInfo.y = playerInfo.heigth / 2
      // console log('collision', playerInfo)
      if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
          return false
      } else {
          return true
      }
  
      }
      draw() {
          this.x--
          this.x++
          image(this.image, this.x, this.y, this.width, this.heigth)
      } */
}