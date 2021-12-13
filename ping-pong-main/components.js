const player = {
    x: 0,
    y: canvas.width / 2 - 850 / 2,
    width: 30,
    height: 200,
    speed: 9,
    score: 0
}

const com = {
    x: canvas.width / 2 + 650,
    y: canvas.width / 2 - 850 / 2,
    width: 30,
    height: 200,
    levels: 0.1,
    Score: 0
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    velocity: {
        x: 5,
        y: 5
    },
    speed: 1.5
}

const net = {
    x: canvas.width / 2,
    y: 0,
    width: 2,
    height: 10,
}
