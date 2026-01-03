const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const depthRange = document.getElementById("depth");
const dynamicColorCheckbox = document.getElementById("dynamic-color");
const pauseCheckbox = document.getElementById("pause");
const configButton = document.getElementById("config-button");
const closeInfo = document.getElementById("close-info");
const info = document.getElementById("info");
const download = document.getElementById("download");
const scaleRange = document.getElementById("scale");
const spreadRange = document.getElementById("spread");
const hueRange = document.getElementById("hue");
const branchLengthRange = document.getElementById("branch-length");
const sidesRange = document.getElementById("sides");
const widthRange = document.getElementById("width");

let SIZE = Math.min(window.innerWidth, window.innerHeight);
canvas.width = SIZE;
canvas.height = SIZE;

window.onresize = () => {
  SIZE = Math.min(window.innerWidth, window.innerHeight);
  canvas.height = SIZE;
};

ctx.lineWidth = 6;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.shadowBlur = 10;
ctx.shadowColor = "black";
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;

const CONFIG = {
  sides: 7,
  width: 2,
  maxDepth: Number(depthRange.value ?? 6),
  branchLength: SIZE / 10,
  scale: 0.7,
  spread: 0.2,
  hue: 0,
  isColorDynamically: true,
  pause: false,
};

function drawFractal() {
  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);
  ctx.lineWidth = CONFIG.width;
  const angle = (Math.PI * 2) / CONFIG.sides;

  for (let i = 0; i < CONFIG.sides; i++) {
    drawBranch(1);
    ctx.rotate(angle);
  }

  ctx.restore();
}

function drawBranch(depth) {
  if (depth > CONFIG.maxDepth) return;

  setBranchStyle(depth);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(CONFIG.branchLength, 0);
  ctx.stroke();

  ctx.save();
  ctx.translate(CONFIG.branchLength, 0);
  ctx.scale(CONFIG.scale, CONFIG.scale);

  rotateAndDraw(CONFIG.spread, depth);
  rotateAndDraw(-CONFIG.spread, depth);

  ctx.restore();
}

function rotateAndDraw(angle, depth) {
  ctx.save();
  ctx.rotate(angle);
  drawBranch(depth + 1);
  ctx.restore();
}

function setBranchStyle(depth) {
  const hue = CONFIG.hue + depth * 50;
  // const lightness = depth * 10;
  if (CONFIG.isColorDynamically) ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  else ctx.strokeStyle = `hsl(${CONFIG.hue}, 100%, 50%)`;
}

// drawFractal();
function animate() {
  if (CONFIG.pause) {
    requestAnimationFrame(animate);
    return;
  }
  CONFIG.spread += 0.01;
  if (CONFIG.hue > 360 && CONFIG.isColorDynamically) CONFIG.hue = 0;
  if (CONFIG.isColorDynamically) CONFIG.hue += 1;

  spreadRange.value = CONFIG.spread;
  hueRange.value = CONFIG.hue;
  widthRange.value = CONFIG.width;
  sidesRange.value = CONFIG.sides;
  branchLengthRange.value = CONFIG.branchLength;
  scaleRange.value = CONFIG.scale;
  depthRange.value = CONFIG.maxDepth;
  dynamicColorCheckbox.checked = CONFIG.isColorDynamically;
  pauseCheckbox.checked = CONFIG.pause;

  drawFractal();
  requestAnimationFrame(animate);
}
animate();

configButton.addEventListener("click", () => {
  config.style.display = config.style.display === "block" ? "none" : "block";
});

dynamicColorCheckbox.onchange = () => {
  CONFIG.isColorDynamically = dynamicColorCheckbox.checked;
};
pauseCheckbox.onchange = () => {
  CONFIG.pause = pauseCheckbox.checked;
};
closeInfo.addEventListener("click", () => {
  info.style.display = "none";
});
depthRange.oninput = () => {
  CONFIG.maxDepth = Number(depthRange.value);
  drawFractal();
};
scaleRange.oninput = () => {
  CONFIG.scale = Number(scaleRange.value);
  drawFractal();
};
spreadRange.oninput = () => {
  CONFIG.spread = Number(spreadRange.value);
  drawFractal();
};
hueRange.oninput = () => {
  CONFIG.hue = Number(hueRange.value);
  drawFractal();
};
branchLengthRange.oninput = () => {
  CONFIG.branchLength = Number(branchLengthRange.value);
  drawFractal();
};
sidesRange.oninput = () => {
  CONFIG.sides = Number(sidesRange.value);
  drawFractal();
};
widthRange.oninput = () => {
  CONFIG.width = Number(widthRange.value);
  drawFractal();
};
download.addEventListener("click", () => {
  const dataURL = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `fractal-tree-${CONFIG.maxDepth}-${CONFIG.sides}-${CONFIG.scale}-${CONFIG.spread}-${CONFIG.hue}-${CONFIG.isColorDynamically}-${CONFIG.pause}.png`;
  link.click();
});
