import { Box, randomizedArray, updateBoxPositions, ctx, canvasWidth, canvasHeight, clear, checkSort } from "./main.js";
export let thanosArray = [...randomizedArray];
let thanosSpeed = 1000;
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export async function thanos (boxes: Box[]) {
    clear()
    let amountToDelete = Math.floor(boxes.length / 2);
    if (checkSort(boxes) == true){
        return
    }

    for (let i = 0; i < amountToDelete; i++){
        let a = Math.floor(Math.random() * boxes.length)
        boxes.splice(a, 1)
        updateBoxPositions(boxes)
        clear()
        for (const box of boxes) {
            if (checkSort(boxes)){
                ctx!.fillStyle = "green"
            } else {
                ctx!.fillStyle = "#1312128d"
            }
            box.draw(ctx!)
            
        }  
        await sleep(45)
    }
    // if (thanosSpeed > 300){
    //     thanosSpeed -= 300
    // }

    // updateBoxPositions(boxes)
    // clear()
    // for (const box of boxes) {
    //     box.draw(ctx!)
    // }
    await sleep(thanosSpeed)
    if (checkSort(boxes) !== true) {
        thanos(boxes)
    }
}
const thanosBtn = document.getElementById("thanosBtn")

thanosBtn!.addEventListener("click", () => {
    thanosArray = [...randomizedArray]
    thanos(thanosArray)
});
