import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, setUpRandomize, drawBoxesNow, cancelSortedCheck, playSortedCheck} from "./main.js";
export let bogoArray = [...randomizedArray];
let bogoSpeed = 50;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function bogoSort(boxes: Box[]) {
    cancelSortedCheck(boxes);

    if (checkSort(boxes)){
        return
    }
    setUpRandomize(boxes)
    updateBoxPositions(boxes)
    drawBoxesNow(boxes);
    await sleep(bogoSpeed);
    if (!checkSort(boxes)){
        bogoSort(boxes)
    }
    await playSortedCheck(boxes);
}

const bogoBtn = document.getElementById("bogoBtn")

bogoBtn!.addEventListener("click", () => {
    bogoArray = [...randomizedArray]
    bogoSort(bogoArray)
});