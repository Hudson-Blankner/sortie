var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, updateValidPositions, setUpRandomize } from "./main.js";
export let normalArray = [...randomizedArray];
let normalSpeed = 20;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// export async function normalSort (boxes: Box[]) {
//     if (checkSort(boxes)) {
//         return
//     }
//     for (let a = 0; a < boxes.length; a ++) {
//         for (let b = a+1; b < boxes.length; b++)
//             if (boxes[a]!.value > boxes[b]!.value){
//                 let temp = boxes[a]!;
//                 boxes[a]! = boxes[b]!
//                 boxes[b]! = temp
//                 updateBoxPositions(boxes)
//                 clear()
//                 for (const box of boxes){
//                 box.draw(ctx!)
//                 }
//             }
//              await sleep(normalSpeed)
//     }
// }
export function normalSort(boxes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (checkSort(boxes)) {
            return;
        }
        for (let a = 0; a < boxes.length; a++) {
            for (let b = a + 1; b < boxes.length; b++) {
                if (boxes[a].value > boxes[b].value) {
                    let temp = boxes[a];
                    boxes[a] = boxes[b];
                    boxes[b] = temp;
                    updateBoxPositions(boxes);
                    updateValidPositions(boxes);
                    clear();
                    for (const box of boxes) {
                        box.draw(ctx);
                    }
                    yield sleep(normalSpeed);
                }
                // if (boxes[a]!.value < boxes[b]!.value){
                //     for (const box of boxes) {
                //         boxes[a]!.validPosition = true;
                //         boxes[b]!.validPosition = true;
                //         updateBoxPositions(boxes)
                //         // clear()
                //         box.draw(ctx!)
                //     } 
                // }
                yield sleep(normalSpeed);
            }
        }
    });
}
// Sorting function:
// Repeat until the array is fully sorted:
// 1. Go through the array 
// 2. Compare values next to each other
// 3. If they are in the wrong order, swap them
// 4. Redraw the bars after the swap
// 5. Wait a short amount of time so the animation can be seen
// End once everything is in the correct order
const normalBtn = document.getElementById("normalBtn");
normalBtn.addEventListener("click", () => {
    normalArray = [...randomizedArray];
    normalSort(normalArray);
});
//# sourceMappingURL=normalSort.js.map