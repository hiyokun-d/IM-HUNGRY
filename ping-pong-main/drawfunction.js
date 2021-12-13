const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.closePath()
    ctx.fill()
}

function text(text, x, y, color) {
    ctx.fillStyle = color
    ctx.font = "50px Noto Sans"
    ctx.fillText(text, x, y)
}