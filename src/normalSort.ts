import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort } from "./main.js";
export let normalArray = [...randomizedArray];
let normalSpeed = 100;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function normalSort (boxes: Box[]) {
    if (checkSort(normalArray)) {
        return
    }
    for (let a = 0; a < normalArray.length; a ++) {
        for (let b = a+1; b < normalArray.length; b++)
            if (boxes[a]!.value > boxes[b]!.value){
                let temp = boxes[a]!;
                boxes[a]! = boxes[b]!
                boxes[b]! = temp
                updateBoxPositions(boxes)
                clear()
            }
            await sleep(normalSpeed)
            if (!checkSort(boxes)){
                normalSort(boxes)
            }
    }


// Sorting function:
// Repeat until the array is fully sorted:
// 1. Go through the array 
// 2. Compare values next to each other
// 3. If they are in the wrong order, swap them
// 4. Redraw the bars after the swap
// 5. Wait a short amount of time so the animation can be seen

// End once everything is in the correct order

}

const normalBtn = document.getElementById("normalBtn")

normalBtn!.addEventListener("click", () => {
    normalArray = [...randomizedArray]
    normalSort(normalArray)
});