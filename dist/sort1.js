import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort } from "./main.js";
export const thanosArray = [...randomizedArray];
function thanos(boxes) {
    let amountToDelete = Math.floor(boxes.length / 2);
    if (checkSort(boxes) == true) {
        return;
    }
    for (let i = 0; i < amountToDelete; i++) {
        let a = Math.floor(Math.random() * boxes.length);
        boxes.splice(a, 1);
    }
    updateBoxPositions(boxes);
    clear();
    for (const box of boxes) {
        box.draw(ctx);
    }
    if (checkSort(boxes) !== true) {
        thanos(boxes);
    }
}
const thanosBtn = document.getElementById("thanosBtn");
thanosBtn.addEventListener("click", () => {
    thanos(thanosArray);
});
//# sourceMappingURL=sort1.js.map