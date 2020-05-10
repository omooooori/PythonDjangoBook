var ctx, h, m, s;

function init() {
    var canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d");
    ctx.storokeStyle = "#FF0000";
    ctx.lineWidth = 5;

    /** Draw 3 triangle */
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 50);
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#FF00FF"
    ctx.moveTo(300, 100);
    ctx.lineTo(350, 50);
    ctx.lineTo(400, 100);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#FFFF00"
    ctx.moveTo(500, 100);
    ctx.lineTo(550, 50);
    ctx.lineTo(600, 100);
    ctx.fill();

    /** Draw 3 Rectangle */
    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#00FFFF";
    ctx.lineWidth = 5;

    ctx.fillRect(100, 150, 100, 50)
    ctx.strokeRect(300, 150, 80, 50);
    ctx.fillRect(500, 150, 80, 50);
    ctx.clearRect(500, 150, 50, 20);

    /** Draw football court */
    ctx.fillStyle = "#B9C42F";
    ctx.fillRect(100, 250, 500, 300);

    ctx.beginPath();
    ctx.strokeStyle = "#FF0000"
    ctx.moveTo(100, 350);
    ctx.lineTo(150, 350);
    ctx.lineTo(150, 450);
    ctx.lineTo(100, 450);
    ctx.stroke();

    ctx.moveTo(600, 350);
    ctx.lineTo(550, 350);
    ctx.lineTo(550, 450);
    ctx.lineTo(600, 450);
    ctx.stroke();

    ctx.moveTo(350, 250);
    ctx.lineTo(350, 550);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(350, 400);
    ctx.arc(350, 400, 50, -Math.PI / 2, Math.PI / 2 * 3);
    ctx.closePath();
    ctx.stroke();
}

function tick() {
    var now = new Date();
    h = now.getHours() % 12;
    m = now.getMinutes();
    s = now.getSeconds();
    document.getElementById("time").textContent = now.toTimeString();
    paint()
}

function paint() {
    ctx.clearRect(50, 650, 500, 500);
    ctx.save();
    ctx.translate(250, 250);
    ctx.strokeStyle = "black";
    var pitch = Math.PI * 2 / 60;
    for (var i = 0; i < 60; i ++) {
        ctx.beginPath();
        ctx.lineWidth = (i % 5) == 0?3:1;
        ctx.moveTo(0, -120);
        ctx.lineTo(0, -140);
        ctx.stroke();
        ctx.rotate(pitch);
    }
    ctx.restore();

    var radH = (Math.PI * 2) / 12 * h + (Math.PI * 2) / 12 * (m / 60);
    var radM = (Math.PI * 2) / 60 * m;
    var radS = (Math.PI * 2) / 60 * s;

    drawHand(radH, 80, 6, "blue");
    drawHand(radM, 120, 4, "blue");
    drawHand(radS, 140, 2, "red");
}

function drawHand(rotation, length, width, color) {
    ctx.save();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.translate(150, 150);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.restore();
}