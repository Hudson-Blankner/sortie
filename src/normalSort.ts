import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort } from "./main.js";
export let normalArray = [...randomizedArray];
let normalSpeed = 100;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function normalSort (boxes: Box[]) {
    let current 
}