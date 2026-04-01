console.log("working");
const canvas = document.getElementById("sortCanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Could not get 2D context");
}
// Set canvas dimensions
const canvasWidth = 1000;
const canvasHeight = 500;
// array determining the amount of values/boxes the algorithm will need to sort through
let setUpArray = [];
const arrayLength = 10;
for (let i = 0; i < arrayLength; i++) {
    setUpArray.push(i + 1);
}
// code for determining the dimenisons of each box and the gap between them depending on the amount of space
let gapSet = 5;
let boxWidth = ((canvasWidth - 100) - (gapSet * (setUpArray.length - 1))) / setUpArray.length; //outputs 45 width for each box
let widthGap = boxWidth + gapSet;
let boxHeight = canvasHeight - 100;
let boxHeightMultiplier = -(boxHeight / setUpArray[setUpArray.length - 1]);
//depugging outputs
console.log("Each box width is: " + boxWidth);
console.log("Each box gap is: " + widthGap);
// class and array for boxes
let masterArray = [];
class Box {
    constructor(x, y, width, height, value) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.value = value;
    }
    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
// function for making even boxes
function drawBoxes(x, y, w, h) {
    ctx.fillStyle = "#1312128d";
    for (let i = 0; i < setUpArray.length; i++) {
        // ctx!.fillRect(x + i*widthGap, y, w, setUpArray[i]! * boxHeightMultiplier);
        masterArray.push(new Box(x + i * widthGap, y, w, setUpArray[i] * boxHeightMultiplier, setUpArray[i]));
        if (i == setUpArray.length - 1) {
            console.log("Edge of first box is: " + (x + i * widthGap + w + " And the value is: " + setUpArray[i]));
        }
        if (i == 0) {
            console.log("Edge of last box is: " + (x + i * widthGap) + " And the value is: " + setUpArray[i]);
        }
    }
}
drawBoxes(50, 450, boxWidth, boxHeight);
const randomizedArray = [...masterArray];
function updateBoxPositions(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].x = 50 + (i * widthGap);
    }
}
function setUpRandomize(boxes) {
    for (let i = 0; i < (setUpArray.length * 2); i++) {
        let a = Math.floor(Math.random() * randomizedArray.length);
        let b = Math.floor(Math.random() * randomizedArray.length);
        while (a == b) {
            b = Math.floor(Math.random() * randomizedArray.length);
        }
        [randomizedArray[a], randomizedArray[b]] = [randomizedArray[b], randomizedArray[a]];
    }
}
setUpRandomize(randomizedArray);
updateBoxPositions(randomizedArray);
for (const box of randomizedArray) {
    box.draw(ctx);
    console.log(randomizedArray[randomizedArray.length - 1].value);
}
export {};
//# sourceMappingURL=main.js.map