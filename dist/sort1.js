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
export let thanosArray = [...randomizedArray];
let thanosSpeed = 1000;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function thanos(boxes) {
    return __awaiter(this, void 0, void 0, function* () {
        clear();
        let amountToDelete = Math.floor(boxes.length / 2);
        if (checkSort(boxes) == true) {
            return;
        }
        for (let i = 0; i < amountToDelete; i++) {
            let a = Math.floor(Math.random() * boxes.length);
            boxes.splice(a, 1);
            updateBoxPositions(boxes);
            clear();
            for (const box of boxes) {
                if (checkSort(boxes)) {
                    ctx.fillStyle = "green";
                }
                else {
                    ctx.fillStyle = "#1312128d";
                }
                box.draw(ctx);
            }
            yield sleep(45);
        }
        // if (thanosSpeed > 300){
        //     thanosSpeed -= 300
        // }
        // updateBoxPositions(boxes)
        // clear()
        // for (const box of boxes) {
        //     box.draw(ctx!)
        // }
        yield sleep(thanosSpeed);
        if (checkSort(boxes) !== true) {
            thanos(boxes);
        }
    });
}
const thanosBtn = document.getElementById("thanosBtn");
thanosBtn.addEventListener("click", () => {
    thanosArray = [...randomizedArray];
    thanos(thanosArray);
});
//# sourceMappingURL=sort1.js.map