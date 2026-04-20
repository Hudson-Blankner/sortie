import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, updateValidPositions, setUpRandomize, masterArray } from "./main.js";
export let candleArray = [...randomizedArray];
export let sortedArray = [...masterArray];
let cursor;
for (let i = 0; i < randomizedArray.length; i++) {
    if (candleArray[i].value >= sortedArray[i].value) {
        candleArray[i].value = sortedArray[i].value;
    }
}
//# sourceMappingURL=sortthing.js.map