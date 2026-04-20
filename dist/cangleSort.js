var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort, updateValidPositions, setUpRandomize, masterArray, drawBoxesNow } from "./main.js";
export let candleArray = [...randomizedArray];
export let sortedArray = [...masterArray];
export function candleSort(boxes) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < randomizedArray.length; i++) {
            if (candleArray[i].value >= sortedArray[i].value) {
                candleArray[i].value = sortedArray[i].value;
            }
            if (candleArray[i].value <= sortedArray[i].value) {
                for (let i = 0; i < randomizedArray.length; i++) {
                    const subtractAmount = candleArray[i - 1].value - candleArray[i].value;
                    candleArray[i].value = candleArray[i].value - subtractAmount;
                    updateBoxPositions(boxes);
                    drawBoxesNow(boxes);
                }
            }
            // updateBoxPositions(boxes)
            // drawBoxesNow(boxes)         
        }
    });
}
const candleBtn = document.getElementById("candleBtn");
candleBtn.addEventListener("click", () => {
    setUpRandomize(randomizedArray);
    candleArray = [...randomizedArray];
    candleSort(candleArray);
});
//# sourceMappingURL=cangleSort.js.map