const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const sizeA = document.querySelector('#change-size-a');
const sizeB = document.querySelector('#change-size-b');
const sizeC = document.querySelector('#change-size-c');
const input = document.querySelector('#input');
const btnClear = document.querySelector('#clear-canvas');
const canvaSizeA = document.querySelector('#canvaSizeA');
const canvaSizeB = document.querySelector('#canvaSizeB');
const canvaSizeC = document.querySelector('#canvaSizeC')


let drawCondition;

canvas.addEventListener('mousedown', function(e) {
    drawCondition = true;
    getCursorPosition(e);
    canvas.addEventListener('mousemove', function(e) {
        getCursorPosition(e);
    });
});

canvas.addEventListener('mouseup', function(){
    drawCondition = false;
});

sizeA.addEventListener('click', function(){
    changeWidth(10, 10)
});

sizeB.addEventListener('click', function(){
    changeWidth(20, 20)
});

sizeC.addEventListener('click', function(){
    changeWidth(50, 50)
});

input.addEventListener('change', function(){
    changeColor()
});

btnClear.addEventListener('click', function(){
    clearCanvas()
});

canvaSizeA.addEventListener('click', function(){
    changeCanvasSize(canvas, 500, 700);
});

canvaSizeB.addEventListener('click', function(){
    changeCanvasSize(canvas, 300, 500);
});

canvaSizeC.addEventListener('click', function(){
    changeCanvasSize(canvas, 100, 300);
});


let lineWidth = 10;
let lineHight = 10;
ctx.fillStyle = input.value;

function getCursorPosition(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if(drawCondition){
        ctx.fillRect(x, y, lineWidth, lineHight);
    };
};

function changeWidth(width, height){
    lineWidth = width;
    lineHight = height;
};
    
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function changeColor(){
   ctx.fillStyle = input.value
};

function changeCanvasSize(canvas, canvasWidth, canvasHeight){
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
};

/* Разберись с тем как сделать текщий и прошлый цвет */