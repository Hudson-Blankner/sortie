var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, setUpRandomize } from "./main.js";
let miracleArray = [...randomizedArray];
let miracleSpeed = 50;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function miracleSort(boxes) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < boxes.length - 1; i++) {
            let a = boxes[i].value;
            let b = boxes[i + 1].value;
        }
        if (!checkSort(boxes)) {
            miracleSort(boxes);
        }
    });
}
const miracleBtn = document.getElementById("miracleBtn");
miracleBtn.addEventListener("click", () => {
    miracleArray = [...randomizedArray];
    miracleSort(miracleArray);
});
//# sourceMappingURL=miracleSort.js.map