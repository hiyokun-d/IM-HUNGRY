let scoreC = 0
let scoreP = 0
function drawNet() {
    for(let i = 0; i < canvas.width; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, "white");
    }
}

function render() {
    //background
    ctx.fillStyle = "RGBA(0, 0, 0, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //paddle
    drawRect(player.x, player.y, player.width, player.height, "white");
    drawRect(com.x, com.y, com.width, com.height, "white");

    //ball
    drawCircle(ball.x, ball.y, ball.radius, "white");

    //net
    drawNet();

    //score
    text(scoreP + `\n your`, canvas.width / 4, 90, "white")
    text(scoreC + `\n computer`, 3 * canvas.width / 4, 90, "white")
    text("restart = (R)", canvas.width / 2.5, 90, "white")
}

function collision(b, p) {
    b.top = b.y - b.radius
    b.bottom = b.y + b.radius
    b.left = b.x - b.radius
    b.right = b.x + b.radius;

    p.top = p.y
    p.bottom = p.y + p.height
    p.left = p.x
    p.right = p.x + p.width

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom
}
//B = BALL
//P = PLAYER

function resetBall() {
   ball.x = canvas.width / 2
    ball.y = canvas.height / 2
    ball.radius = 30
    ball.velocity.x = -ball.velocity.x
    ball.speed = 1.5
}

function uptade() {
    ball.x += ball.velocity.x * ball.speed
    ball.y += ball.velocity.y * ball.speed

    com.y += (ball.y - (com.y + com.height/2)) * com.levels

    if(ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.speed ++
        ball.velocity.y = -ball.velocity.y
    }

    let players = (ball.x < canvas.width / 2) ? player : com
    if(collision(ball, players)) {
        let collidepoint = ball.y - (players.y + players.height / 2)
        collidepoint = collidepoint/players.height/2

        let anglerad = collidepoint * Math.PI / 4

        let direction = (ball.x < canvas.height/2) ? 1 : -1

        ball.velocity.x = direction* ball.speed *  Math.cos(anglerad)
        ball.velocity.y = ball.speed *  Math.sin(anglerad)

        ball.speed = 4.5
    }

    if(ball.x - ball.radius < 0) {
        scoreC += 1
        resetBall()
    } else if(ball.x + ball.radius > canvas.width) {
        scoreP += 1
        resetBall()
    }
}

function game() {
        render();
        uptade()
}


const fps = 50;
setInterval(game, 1000/fps)

addEventListener("keydown", event => {
    if(event.key === "w" && player.y > 0) {
        player.y -= player.speed;
    } else if(event.key === "s" && player.y < 456) {
        player.y += player.speed
    }

    if(event.key === "a") {
        ball.x -= ball.speed
    }

    if(event.key === "r" ) {
        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
        ball.radius = 30
        ball.velocity.x = -ball.velocity.x
        ball.speed = 1.5

        scoreC = 0
        scoreP = 0
    }
})

addEventListener("load", event => {
    console.timeLog()
    console.timeStamp()
    console.log(event.timeStamp)
    console.log(event.type)
})
//X -> 1397
//x <- canvas.width