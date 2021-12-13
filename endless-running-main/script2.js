var character = document.getElementById("karakter");
var controller_left = document.getElementById("left")
var controller_right = document.getElementById("right")


let controller = document.getElementById("controller")

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + "px";
    }
}

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 297) {
        character.style.left = left + "px";
    }
}
document.addEventListener('keydown', event => {
    if (event.key === 'a') {
        moveLeft()
    };
    if (event.key === 'd') {
        moveRight()
    };
});

left.addEventListener("click", () => {
    moveLeft()
})

controller_right.addEventListener("click", () => {
    moveRight()
})
var train = document.getElementById("train");
var score = 0
train.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    train.style.left = left + "px"
    score++
})

//collision rectangle
function isCollapsed(dragMe, rect) {
    var object_1 = dragMe.getBoundingClientRect();
    var object_2 = rect.getBoundingClientRect();

    if (object_1.left < object_2.left + object_2.width && object_1.left + object_1.width > object_2.left &&
        object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
        rect.classList.add("collide");
    } else {
        rect.classList.remove("collide");
    }
}

setInterval(function () {
    var karakterleft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var trainleft = parseInt(window.getComputedStyle(train).getPropertyValue("left"));
    var traintop = parseInt(window.getComputedStyle(train).getPropertyValue("top"));
    if (karakterleft == trainleft && traintop < 500 && traintop > 300) {
        if (score >= 20) {
            alert('ampun bang jago nih score mu:'+score)
        } else {
            alert('GOBLOK LU GAME OVER GOBLOK NIH SCORE LU GOBLOK:'+score)
        }
        block.style.animation('none')
        clearInterval(train)
        location.reload()
    }
}, 1)