import "./styles.css";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  draw();
});
document.querySelector('body').appendChild(canvas);

fetch('/demo.twee')
  .then(res => res.text())
  .then(parseTwee);

const displayLines = [];
function parseTwee(text) {
  const lines = text.split('\n');
  const startIdx = lines.findIndex(line => line === ":: Start");
  let linePtr = startIdx;
  let nextSection;
  
  while (linePtr++ < lines.length) {
    const line = lines[linePtr];
    if (line == '') {
      continue;
    }
    if (line.substring(0,2) === '::') {
      nextSection = line.substring(3);
      break;
    }
    displayLines.push(line);
  }

  console.log(displayLines, nextSection);

  draw();
}

const a = 2 * Math.PI / 6;
const r = 20;

function drawHexagon(x, y, color = 'lightgreen') {
  ctx.beginPath();
  for (var i = 0; i < 6; i++) {
    ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawGrid(width, height) {
  for (let y = r; y + r * Math.sin(a) < height; y += r * Math.sin(a)) {
    for (let x = r, j = 0; x + r * (1 + Math.cos(a)) < width; x += r * (1 + Math.cos(a)), y += (-1) ** j++ * r * Math.sin(a)) {
      drawHexagon(x, y);
    }
  }
}

let i = 100;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  drawGrid(canvas.width, canvas.height);
  drawHexagon(470, 383, 'orange');

  requestAnimationFrame(draw);
}
