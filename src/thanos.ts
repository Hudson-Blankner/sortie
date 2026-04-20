import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, setUpRandomize, playSortedCheck, cancelSortedCheck, drawBoxesNow} from "./main.js";
export let thanosArray = [...randomizedArray];
let thanosSpeed = 1000;
let thanosStepSpeed = 45
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function thanosSort (boxes: Box[]) {
    cancelSortedCheck(boxes);

    let amountToDelete = Math.floor(boxes.length / 2);

    if (checkSort(boxes)) {
        await playSortedCheck(boxes);
        return;
    }
    for (let i = 0; i < amountToDelete; i++){
        let a = Math.floor(Math.random() * boxes.length)
        boxes.splice(a, 1)
        updateBoxPositions(boxes)
        drawBoxesNow(boxes);
        await sleep(thanosStepSpeed);
    }
    await sleep(thanosSpeed)

    if (!checkSort(boxes)) {
        thanosSort(boxes);
        return;
    }
    await playSortedCheck(boxes);
}
const thanosBtn = document.getElementById("thanosBtn")

thanosBtn!.addEventListener("click", () => {
    setUpRandomize(randomizedArray)
    thanosArray = [...randomizedArray]
    thanosSort(thanosArray)
});
