class Susuwatari {

    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height) 
        this.width = 50
        this.height = 50
    }

    draw() {
        this.x--
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