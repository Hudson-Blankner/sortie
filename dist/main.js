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
let masterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let widthLimiter = (canvasWidth - 100) / 20;
// widthLimiter = 5
let widthGap = widthLimiter + 1;
// widthLimiter -= 1
console.log(widthLimiter);
console.log(widthGap);
// ctx.fillStyle = "skyblue";
// ctx.fillRect(10, 10, 150, 150);
function drawBoxes(x, y, w, h) {
    ctx.fillStyle = "#1312128d";
    for (let i = 0; i < masterArray.length; i++) {
        ctx.fillRect(x + i * widthGap, y, w, masterArray[i] * -20);
        if (i == 19) {
            console.log(x + i * widthGap + w);
        }
    }
}
drawBoxes(50, 450, widthLimiter, -50);
export {};
//# sourceMappingURL=main.js.map