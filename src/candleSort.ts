import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, updateValidPositions, setUpRandomize, masterArray, drawBoxesNow } from "./main.js";
export let candleArray = [...randomizedArray];
export let sortedArray = [...masterArray];

let normalSpeed = 20;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function candleSort (boxes: Box[]){
    for (let i = 0; i<randomizedArray.length; i++){
        if (boxes[i]!.value >= sortedArray[i]!.value){
            boxes[i]!.value = sortedArray[i]!.value;
        }
        if (boxes[i]!.value <= sortedArray[i]!.value){
            for (let a = 0; a<randomizedArray.length; a++){
                //fix this, it does it for everything and doesnt exclude the initial box
                if (a != i && a != 0){
                    const subtractAmount = boxes[a-1]!.value - boxes[a]!.value;
                    boxes[a]!.value = boxes[a]!.value - subtractAmount;
                }
            }
        }
        updateBoxPositions(boxes)
        drawBoxesNow(boxes)
        await sleep(normalSpeed);       
    }
}

const candleBtn = document.getElementById("candleBtn")

candleBtn!.addEventListener("click", () => {
    setUpRandomize(randomizedArray);
    candleArray = [...randomizedArray];
    candleSort(candleArray);
});