import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, setUpRandomize } from "./main.js";
export let bogoArray = [...randomizedArray];
let bogoSpeed = 50;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function bogoSort(boxes: Box[]) {
    if (checkSort(boxes)){
        return
    }
    setUpRandomize(boxes)
    updateBoxPositions(boxes)
    clear()
    for (const box of boxes) {
        box.draw(ctx!)
    }
    await sleep(bogoSpeed)
    if (!checkSort(boxes)){
        bogoSort(boxes)
    }
}

const bogoBtn = document.getElementById("bogoBtn")

bogoBtn!.addEventListener("click", () => {
    bogoArray = [...randomizedArray]
    bogoSort(bogoArray)
});