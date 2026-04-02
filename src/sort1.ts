import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort } from "./main.js";

function thanos (boxes: Box[]) {
    let amountToDelete = Math.floor(boxes.length / 2);

    for (let i = 0; i < amountToDelete; i++){
        let a = Math.floor(Math.random() * boxes.length)
        boxes.splice(a, 1)
    }
    updateBoxPositions(boxes)
    checkSort(boxes)
}
const thanosBtn = document.getElementById("thanosBtn")

thanosBtn!.addEventListener("click", () => {
    thanos(randomizedArray)
});
