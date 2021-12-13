class block {
    constructor(x, y, r, color, velocity) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.velocity = velocity

    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
    }

    uptade() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class enemy {
    constructor(x, y, r, color, velocity) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.velocity = velocity

    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
    }

    uptade() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity
        this.alpha = 1

    }

    draw() {
        ctx.save()
        ctx.globalAlpha = 0.1
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }

    uptade() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}