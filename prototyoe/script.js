//collision rectangle and circle
function RectCircleColliding(circle, rect) {
    var distX = Math.abs(circle.x - rect.x - rect.w / 2);
    var distY = Math.abs(circle.y - rect.y - rect.h / 2);

    if (distX > (rect.w / 2 + circle.r)) {
        return false;
    }
    if (distY > (rect.h / 2 + circle.r)) {
        return false;
    }

    if (distX <= (rect.w / 2)) {
        return true;
    }
    if (distY <= (rect.h / 2)) {
        return true;
    }

    var dx = distX - rect.w / 2;
    var dy = distY - rect.h / 2;
    return (dx * dx + dy * dy <= (circle.r * circle.r));
}

//collision circle
function CirclesColliding(c1, c2) {
    var dx = c2.x - c1.x;
    var dy = c2.y - c1.y;
    var rSum = c1.r + c2.r;
    return (dx * dx + dy * dy <= rSum * rSum);
}

//collision rectangle
function RectsColliding(r1, r2) {
    return !(r1.x > r2.x + r2.w ||
        r1.x + r1.w < r2.x ||
        r1.y > r2.y + r2.h ||
        r1.y + r1.h < r2.y);
}

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let window_width;
let window_height;
setInterval(() => {
    window_width = window.innerWidth;
    window_height = window.innerHeight;
}, 0)

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let player = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    c: "blue",
    speed: 9,
    health: 100
}

let foodArray = []

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (canvas.width !== window_width || canvas.height !== window_height) {
        location.reload()
    }

    if (player.health > 0) {
        player.health -= 0.30
    }
    console.log(player.health);
//
    if (player.health < 1) {
        alert("LU KALAH ANJING LU KALAH TOLOL AOWKOAWKOAKWOKWAOAWKOWKOAWK")
        location.reload()
    }


    foodArray.forEach((food, index) => {
        food.draw()
    })

    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, player.health, 15)
    
    ctx.fillStyle = "black"
    ctx.fillRect(player.x, player.y, player.w, player.h)

}

let controller = {
    left: false,
    right: false,
    up: false,
    down: false
}

addEventListener("keydown", event => {
    switch (event.keyCode) {
        case 65:
            controller.left = true
            break;
        case 68:
            controller.right = true
            break;
        case 87:
            controller.up = true
            break;
        case 83:
            controller.down = true
    }
})

addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 65:
            controller.left = false
            break;
        case 68:
            controller.right = false
            break;
        case 87:
            controller.up = false
            break;
        case 83:
            controller.down = false
    }
})

addEventListener("click", () => {
    foodArray.forEach((food, index) => {
        if (RectsColliding(food, player)) {
            foodArray.splice(index, 1)
            if (player.health <= 100) {
                player.health += 10
            }
        }
    })
})

let fps = 50
let game_time = 1000 / fps


function pengendali() {
    if (controller.right) {
        player.x += player.speed / 2;
    }

    if (controller.left) {
        player.x -= player.speed / 2;
    }

    if (controller.down) {
        player.y += player.speed / 2;
    }

    if (controller.up) {
        player.y -= player.speed / 2;
    }
}



class food {
    constructor(x, y, w, h, c) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.c
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}


function foodSpawner() {
    setInterval(() => {
        let x = Math.floor(Math.random() * canvas.width)
        let y = Math.floor(Math.random() * canvas.height)

        if (foodArray.length < 30) {
            foodArray.push(new food(x, y, 30, 30, "blue"))
        } else return;

        console.log(foodArray);
    }, 1000)
}


function init() {
    setInterval(() => {
        foodSpawner()
        pengendali()
        game()
    }, game_time)
}

init()