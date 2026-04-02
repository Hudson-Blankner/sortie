import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, setUpRandomize } from "./main.js";
let miracleArray = [...randomizedArray]
let miracleSpeed = 50;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function miracleSort (boxes: Box[]) {
    for (let i = 0; i < boxes.length-1; i ++) {
        let a = boxes[i]!.value
        let b = boxes[i + 1]!.value
    }
    if (!checkSort(boxes)) {
        miracleSort(boxes)
    }
}

const miracleBtn = document.getElementById("miracleBtn")

miracleBtn!.addEventListener("click", () => {
    miracleArray = [...randomizedArray];
    miracleSort(miracleArray)
});