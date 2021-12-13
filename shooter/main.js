//settings
/* player */
const player = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 15,
    c: "white",
    speed: 1.5,
}

/* project tile */
const projectTile_array = [];
const projectile_speed = 1.9

/* enemy */
const enemy_array = []
function spawner() {
    setInterval(() => {
        const radius = Math.random() * (30 - 9) + 9

        let x;
        let y;

        if (Math.random < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
            //  y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        } else {
            x = Math.random() * canvas.width
            // y = Math.random() * canvas.height
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = "green"
        const angle = Math.atan2(player.y - y, player.x - x)

        const velocity = { x: Math.cos(angle), y: Math.sin(angle) }
        enemy_array.push(new enemy(x, y, radius, color, velocity))
    }, 1000)
}


/* particle */
const particle_array = []


/* score */
let scoring = 0

function main() {

    drawRect(0, 0, canvas.width, canvas.height, "rgba(0, 0, 0, 0.1)")
    if (canvas.width != window.innerWidth) {
        location.reload()
    }

    if (canvas.height != window.innerHeight) {
        location.reload()
    }

    projectTile_array.forEach((projectile, index) => {
        projectile.uptade()

        particle_array.forEach((particle, index) => {
            if (particle.alpha <= 0) {
                particle_array.splice(index, 1)
            }
            particle.uptade()
        })
        if (projectile.x + projectile.r < 0 ||
            projectile.x - projectile.r > canvas.width ||
            projectile.y + projectile.r < 0 ||
            projectile.y - projectile.r > canvas.height) {
            setTimeout(() => {
                projectTile_array.splice(index, 1)
            }, 0)
        }
    })

    enemy_array.forEach((enemy, index) => {
        enemy.uptade()

        //GAMEOVER
        if (CirclesColliding(player, enemy)) {
            alert("this is game over")
            location.reload()
        }

        //killing enemy
        projectTile_array.forEach((projectile, projectileindex) => {
            if (CirclesColliding(enemy, projectile)) {
                for (let i = 0; i < 8; i++) {
                    particle_array.push(new particle(projectile.x, projectile.y, 3, "red", {
                        x: Math.random() - 0.6,
                        y: Math.random() - 0.6
                    }))

                    if (enemy.r - 15 > 7) {
                        gsap.to(enemy, {
                            r: enemy.r - 10
                        })
                        setTimeout(() => {
                            projectTile_array.splice(projectileindex, 1)
                        }, 0)
                    } else {
                        setTimeout(() => {
                            enemy_array.splice(index, 1)
                            projectTile_array.splice(projectileindex, 1)
                        }, 0)
                    }
                }
            }
        })
    })

    drawCircleMove(player.x, player.y, player.r, player.c)

}

//65 = A
//87 = W
//83 = S
//68 = D
spawner()

setInterval(() => {
    main()
    controller()
}, 100 / 1000)

canvas.width = window.innerWidth
canvas.height = window.innerHeight