const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

//drawfunction
//!this is for rectangle
//use this if object is not move
/**
 * 
 * @param {x} number
 * @param {y} number
 * @param {w} number
 * @param {h} number
 * @param {c} string 
 * 
 * this is for draw rectangle easy using this function make
 * some
 */
function drawRect(x, y, w, h, c) {
    ctx.fillStyle = c
    ctx.fillRect(x, y, w, h)
}

//*use this if object is block
/**
 * 
 * @param {Symbol} number
 * @param {y} number
 * @param {w} number
 * @param {h} number
 * @param {c} string 
 */
function drawRectMove(x, y, w, h, c) {
    ctx.fillStyle = c
    ctx.beginPath()
    ctx.fillRect(x, y, w, h)
    ctx.closePath()
}
//-------------------------------------\\

//!this is for circle
//*use this if circle is not move
function drawCircle(x, y, r, c) {
    ctx.fillStyle = c
    ctx.arc(x, y, r, 0, Math.PI * 2, false)
    ctx.fill()
}

//*this is if circle is not move
function drawCircleMove(x, y, r, c) {
    ctx.fillStyle = c
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()
}
//-----------------------------------------------\\

//!text
//*this is fill text
function text(text, x, y, c, font, size) {
    ctx.fillStyle = c
    ctx.font = `${size}px ${font}`
    ctx.fillText(text, x, y)
}

//*this is stroke text
function textStroke(text, x, y, c, font, size) {
    ctx.fillStyle = c
    ctx.font = `${size}px ${font}`
    ctx.strokeText(text, x, y, )
}

/* --------------------------------------- */

//image
/**
 * 
 * @param {image} image
 * @param {sx} sourceX
 * @param {sy} sourceY
 * @param {sw} source_Width
 * @param {sh} source_height
 * @param {dx} documentX
 * @param {dy} documentY
 * @param {dw} document_width
 * @param {dh} document_height
 */
function image(image, [sx], [sy], [sw], [sh], [dx], [dy], [dw], [dh]) {
    ctx.beginPath()
    ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.closePath()
}

