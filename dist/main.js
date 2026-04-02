console.log("working");
const canvas = document.getElementById("sortCanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found");
}
export const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Could not get 2D context");
}
// Set canvas dimensions
export const canvasWidth = 1000;
export const canvasHeight = 500;
// array determining the amount of values/boxes the algorithm will need to sort through
let setUpArray = [];
const arrayLength = 50;
for (let i = 0; i < arrayLength; i++) {
    setUpArray.push(i + 1);
}
// code for determining the dimenisons of each box and the gap between them depending on the amount of space
let gapSet = 3;
let boxWidth = ((canvasWidth - 100) - (gapSet * (setUpArray.length - 1))) / setUpArray.length; //outputs 45 width for each box
let widthGap = boxWidth + gapSet;
let boxHeight = canvasHeight - 100;
let boxHeightMultiplier = -(boxHeight / setUpArray[setUpArray.length - 1]);
//depugging outputs
console.log("Each box width is: " + boxWidth);
console.log("Each box gap is: " + widthGap);
// class and array for boxes
export let masterArray = [];
export class Box {
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
export const randomizedArray = [...masterArray];
export function updateBoxPositions(boxes) {
    if (boxes.length === 0) {
        return;
    }
    if (boxes.length === 1) {
        boxes[0].x = (canvasWidth - boxWidth) / 2;
        return;
    }
    let currentGap = ((canvasWidth - 100) - (boxWidth * boxes.length)) / (boxes.length - 1);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].x = 50 + (i * widthGap);
    }
}
export function setUpRandomize(boxes) {
    for (let i = 0; i < (setUpArray.length * 2); i++) {
        let a = Math.floor(Math.random() * boxes.length);
        let b = Math.floor(Math.random() * boxes.length);
        while (a == b) {
            b = Math.floor(Math.random() * boxes.length);
        }
        [boxes[a], boxes[b]] = [boxes[b], boxes[a]];
    }
}
export function checkSort(boxes) {
    for (let i = 0; i < boxes.length - 1; i++) {
        let box1 = boxes[i].value;
        let box2 = boxes[i + 1].value;
        if (box2 < box1) {
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}
export function clear() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#1312128d";
    // setUpRandomize(randomizedArray);
    // updateBoxPositions(randomizedArray)
}
export function colorChange(boxes) {
}
setUpRandomize(randomizedArray);
updateBoxPositions(randomizedArray);
for (const box of randomizedArray) {
    box.draw(ctx);
    console.log(randomizedArray[randomizedArray.length - 1].value);
}
const randomizeButton = document.getElementById("randomizeButton");
const bah = document.getElementById("bah");
bah === null || bah === void 0 ? void 0 : bah.addEventListener("click", () => {
    checkSort(randomizedArray);
});
if (!(randomizeButton instanceof HTMLButtonElement)) {
    throw new Error("Button not found");
}
randomizeButton.addEventListener("click", () => {
    clear();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    setUpRandomize(randomizedArray);
    updateBoxPositions(randomizedArray);
    for (const box of randomizedArray) {
        box.draw(ctx);
    }
});
//# sourceMappingURL=main.js.map