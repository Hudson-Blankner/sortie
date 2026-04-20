import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, updateValidPositions, setUpRandomize, masterArray, drawBoxesNow } from "./main.js";
export let candleArray = [...randomizedArray];
export let sortedArray = [...masterArray];

export async function candleSort (boxes: Box[]){
    for (let i = 0; i<randomizedArray.length; i++){
        if (candleArray[i]!.value >= sortedArray[i]!.value){
            candleArray[i]!.value = sortedArray[i]!.value;
        }
        if (candleArray[i]!.value <= sortedArray[i]!.value){
            for (let i = 0; i<randomizedArray.length; i++){
                const subtractAmount = candleArray[i-1]!.value - candleArray[i]!.value;
                candleArray[i]!.value = candleArray[i]!.value - subtractAmount;

                // updateBoxPositions(boxes)
                // drawBoxesNow(boxes)
            }
        }
        // updateBoxPositions(boxes)
        // drawBoxesNow(boxes)         
    }
}

const candleBtn = document.getElementById("candleBtn")

candleBtn!.addEventListener("click", () => {
    setUpRandomize(randomizedArray);
    candleArray = [...randomizedArray];
    candleSort(candleArray);
});