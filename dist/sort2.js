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
export let bogoArray = [...randomizedArray];
let bogoSpeed = 50;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function bogoSort(boxes) {
    return __awaiter(this, void 0, void 0, function* () {
        if (checkSort(boxes)) {
            return;
        }
        setUpRandomize(boxes);
        updateBoxPositions(boxes);
        clear();
        for (const box of boxes) {
            box.draw(ctx);
        }
        yield sleep(bogoSpeed);
        if (!checkSort(boxes)) {
            bogoSort(boxes);
        }
    });
}
const bogoBtn = document.getElementById("bogoBtn");
bogoBtn.addEventListener("click", () => {
    bogoArray = [...randomizedArray];
    bogoSort(bogoArray);
});
//# sourceMappingURL=sort2.js.map