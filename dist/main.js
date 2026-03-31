console.log("working");
const canvas = document.getElementById("sortCanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Could not get 2D context");
}
const canvasWidth = 1000;
const canvasHeight = 500;
let setUpArray = [];
const arrayLength = 10;
for (let i = 0; i < arrayLength; i++) {
    setUpArray.push(i + 1);
}
let gapSet = 5;
let boxWidth = ((canvasWidth - 100) - (gapSet * (setUpArray.length - 1))) / setUpArray.length; //outputs 45 width for each box
let widthGap = boxWidth + gapSet;
let boxHeight = canvasHeight - 100;
let boxHeightMultiplier = -(boxHeight / setUpArray[setUpArray.length - 1]);
console.log(boxWidth);
console.log(widthGap);
function drawBoxes(x, y, w, h) {
    ctx.fillStyle = "#1312128d";
    for (let i = 0; i < setUpArray.length; i++) {
        ctx.fillRect(x + i * widthGap, y, w, setUpArray[i] * boxHeightMultiplier);
        if (i == setUpArray.length - 1) {
            console.log(x + i * widthGap + w);
        }
        if (i == 0) {
            console.log(x + i * widthGap);
        }
    }
}
drawBoxes(50, 450, boxWidth, boxHeight);
export {};
//# sourceMappingURL=main.js.map