const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d")
const INITIAL_COLOR = "rgb(233, 38, 38)"
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

ctx.fillStyle = "white";
ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5

let painting = false;
let filling = false;

function stopPainting(){
painting = false;
}

function startPainting(){
    painting = true;
}

function onMousemove(event){
const x = event.offsetX;
const y = event.offsetY;
if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
}
else{
    ctx.lineTo(x,y);
    ctx.stroke();
}
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0,0, canvas.width, canvas.height);
    }
}

function handleCM(event){
    event.preventDefault()
}
const saveBtn = document.getElementById("jsSave");

if(canvas) {
    canvas.addEventListener("mousemove", onMousemove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
    canvas.addEventListener("contextmenu", handleCM);
}


function handleSaveClick(){
const image = canvas.toDataURL("image/jpeg");
const link = document.createElement("a");

console.log(image);

link.href = image;
link.download = "paintJS[export]";
link.click();
}


if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
}

// const colorBtn = document.getElementsByClassName("jsColors")

// Array.from(colorBtn).forEach(color => {
//     color.addEventListener("click", function() {
//         let currentColor = color.style.backgroundColor;
//         ctx.strokeStyle = currentColor;
//     })
// })


const colorBtn = document.querySelectorAll(".jsColors")

colorBtn.forEach(color => {
    color.addEventListener("click", function() {
        let currentColor = color.style.backgroundColor;
        ctx.strokeStyle = currentColor;
        ctx.fillStyle = currentColor;
    })
})

const rangeBtn = document.querySelector("#jsRange")

if(rangeBtn){
    rangeBtn.addEventListener("input", function(event) {
        let currentWidth = event.target.value;
        ctx.lineWidth = currentWidth;
    })
    
}

const mode = document.getElementById("jsMode");

if(mode){
    mode.addEventListener("click", function(){
        if(filling === true){
            filling =false;
            mode.innerText = "Fill"
        } else {
            filling = true;
            mode.innerText = "Paint"
        }
    })
}

const clearBtn = document.getElementById("jsClear");

clearBtn.addEventListener("click", function(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, canvas.width, canvas.height);
})



