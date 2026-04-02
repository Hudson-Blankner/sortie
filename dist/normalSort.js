var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort } from "./main.js";
export let normalArray = [...randomizedArray];
let normalSpeed = 100;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function normalSort(boxes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (checkSort(normalArray)) {
            return;
        }
        for (let a = 0; a < normalArray.length; a++) {
            for (let b = a + 1; b < normalArray.length; b++)
                if (boxes[a].value > boxes[b].value) {
                    let temp = boxes[a];
                    boxes[a] = boxes[b];
                    boxes[b] = temp;
                    updateBoxPositions(boxes);
                    clear();
                }
            yield sleep(normalSpeed);
            if (!checkSort(boxes)) {
                normalSort(boxes);
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
    });
}
//# sourceMappingURL=normalSort.js.map