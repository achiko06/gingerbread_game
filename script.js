let canvas = document.querySelector("#canvas")
let width = 600
let height = 600
// blocksize
let ctx = canvas.getContext("2d")
let blockSize = 30
let keys = []

// assigning widht and height values to canvas
canvas.width = width
canvas.height = height

//player
let player = {
    x: 8,
    y: 1
}




// images
let wall = new Image()
wall.src = "images/zed.png"

let hero = new Image()
hero.src = "images/pernicek_dolu.png"

// board
let board = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 ]

// functions
function generateBoard() {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] === 1) {
                ctx.drawImage(wall, x * blockSize, y * blockSize, blockSize, blockSize)
            }
        }
    }
}

function draw() {
    ctx.clearRect(player.x * blockSize, player.y * blockSize, blockSize, blockSize)

    generateBoard()
    movement()

    ctx.drawImage(hero,player.x * blockSize, player.y * blockSize, blockSize, blockSize)
}

function movement() {
    if (keys[39]) {
        // arrow right
        hero.src = "images/pernicek_doprava.png"
        player.x++
    }

    if (keys[37]) {
        // arrow left
        hero.src = "images/pernicek_doleva.png"
        player.x--
    }

    if (keys[38]) {
        // arrow up
        hero.src = "images/pernicek_nahoru.png"
        player.y--
    }

    if (keys[40]) {
        // arrow down
        hero.src = "images/pernicek_dolu.png"
        player.y++
    }
}

// eventlistener
window.addEventListener("load", draw)

// move eventlistener
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true
    draw()
})

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false 
    draw()
})



