let left = false
let right = false
let up = false
let down = false

addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 65:
            left = true
            break;
        case 87:
            up = true
            break;
        case 83:
            down = true
            break;
        case 68:
            right = true
            break;
    }
})

addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 65:
            left = false
            break;
        case 87:
            up = false
            break;
        case 83:
            down = false
            break;
        case 68:
            right = false
            break;
    }
})

window.addEventListener("click", (event) => {
    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)

    const velocity = {x: Math.cos(angle) * 7, y: Math.sin(angle)* 7}
    projectTile_array.push(new block(player.x, player.y, 5, "white", velocity))
})

function controller() {
    if (left) {
        if (player.x > 0) {
            player.x = player.x - player.speed
        }
    }

    if (up) {
        if (player.y > 0) {
            player.y = player.y - player.speed
        }
    }

    if (down) {
        if (player.y < canvas.height) {
            player.y = player.y + player.speed
        }
    }

    if (right) {
        if (player.x < canvas.width) {
            player.x = player.x + player.speed
        }
    }
}