console.log("working");
const canvas = document.getElementById("sortCanvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("Could not get 2D context");
}
ctx.fillStyle = "skyblue";
ctx.fillRect(10, 10, 40, 400);
export {};
//# sourceMappingURL=main.js.map