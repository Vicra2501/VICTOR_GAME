class Game {
    constructor() {
        this.backgroundImage
        this.background = new Background()
        this.targets = []
        console.log('background gets called')
        // player has array to symbole different stars
        this.player = new Player()
        this.score = 0
        this.imageIndex = 0
    }


    setup() {
        //      this.player = new Player()
        // this.playerImage = loadImage[0]


    }

    preload() {
        this.backgroundImage = loadImage('/img/background-img.bmp')
        this.targetImage =
            [
                { src: loadImage('/img/suzu2.png'), x: 0 },
                { src: loadImage('/img/suzu3.png'), x: 0 },
                { src: loadImage('/img/suzu4.png'), x: 0 },
                { src: loadImage('/img/suzu5.png'), x: 0 },
                { src: loadImage('/img/suzu6.png'), x: 0 },
                { src: loadImage('/img/suzu7.png'), x: 0 },
                { src: loadImage('/img/suzu8.png'), x: 0 },
                { src: loadImage('/img/suzu9.png'), x: 0 },
                { src: loadImage('/img/suzu10.png'), x: 0 },
                { src: loadImage('/img/suzu11.png'), x: 0 },
                { src: loadImage('/img/suzu12.png'), x: 0 },
                { src: loadImage('/img/suzu13.png'), x: 0 },
                { src: loadImage('/img/suzu14.png'), x: 0 },
                { src: loadImage('/img/suzu15.png'), x: 0 },
                { src: loadImage('/img/suzu16.png'), x: 0 },
                { src: loadImage('/img/suzu17.png'), x: 0 },
                { src: loadImage('/img/suzu18.png'), x: 0 }
            ]
        this.scoredTargetImage = 
            [
                { src: loadImage('/img/hit1.png'), x: 0 },
                { src: loadImage('/img/hit2.png'), x: 0 },
                { src: loadImage('/img/hit3.png'), x: 0 },
                { src: loadImage('/img/hit4.png'), x: 0 },
                { src: loadImage('/img/hit5.png'), x: 0 },
                { src: loadImage('/img/hit6.png'), x: 0 },
                { src: loadImage('/img/hit7.png'), x: 0 },
                { src: loadImage('/img/hit8.png'), x: 0 },
                { src: loadImage('/img/hit9.png'), x: 0 },
                { src: loadImage('/img/hit10.png'), x: 0 },
                { src: loadImage('/img/hit11.png'), x: 0 },
                { src: loadImage('/img/hit12.png'), x: 0 },
                { src: loadImage('/img/hit13.png'), x: 0 },
                { src: loadImage('/img/hit14.png'), x: 0 },
                { src: loadImage('/img/hit15.png'), x: 0 }
            ]

        this.cursorImage =
            [
                '/img/sugarBlue.png',
                '/img/sugarGreen.png',
                '/img/sugarMagenta.png',
                '/img/sugarYellow.png'
            ]
    }


    draw() {
        console.log(this.targetImage)
        clear()
        // this.obstacle.draw()
        //this.player.draw()
        this.background.draw()

        text('Score:', width / 14, height / 8)
        text(this.score, width / 6.2, height / 8)
        textFont('Impact', 20)
        fill(255, 255)

        // we want to place an action every x frames -> frame count set by p5 to 60fps
        // console.log(frameCount)
        // we add those little mf to the obstacles array
        let timming = 20
        if (frameCount % timming == 0) {
            this.targets.push(new Susuwatari(this.targetImage[Math.floor(Math.random() * this.targetImage.length)].src))
            timming = Math.floor(Math.random(1,60) * 60)
        }
        console.log(this.targets)
        this.targets.forEach(function (target) {
            target.draw()
        })

        // seting the courser for the player
        cursor(this.cursorImage[this.imageIndex % this.cursorImage.length], 16, 15)

    }
    collision() {
        // here the susuwatari detects a collision with the sugarstar
        // the middle of the obstacle
        let targetX = this.targets.forEach(function (target) { target.x })
        let targetY = this.targets.forEach(function (target) { target.y })
        // the middle of the player
        let sugarX = this.player.x + this.player.width / 2
        let sugarY = this.player.y + this.player.height / 2
        // console.log('collision', playerInfo)
        if (dist(targetX, targetY, mouseX, mouseY)) {
            // change the score
            game.score += 1
            console.log(game.score)

            return true
        }
////////// function for switching
    }

}

// obstecals = targets
// from L to R, R to L
// random up and down

// player has a pointer as mouseXY
// if clicket on target, obstecal image changes + score++
