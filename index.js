var canvas = document.getElementById('myCanvas');  /* myCanvas ID megjelölése és tárolása canas változóban */
var context = canvas.getContext('2d');  /*2 dimenziós rajzolási kontextus változóba */

/*context.fillStyle = 'orange';   
context.fillRect(125,50,200,200);    négyzet a context-re */


context.beginPath();               /*átló*/
context.moveTo(0,300);
context.lineTo(450,0);
context.strokeStyle = 'red';
context.stroke();

var canvasWidth = canvas.width;            
var canvasHeight = canvas.height; /*négyzet jobb alsó
context.fillRect(50,50,canvasWidth-100,canvasHeight-100); */
context.fillRect(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2); /*fekete négyzet jobb alsó negyedébe */


/*két félig átlátszó, egymást részben átfedő négyzetet a canvas közepére.*/
var size = 100;

var positionX = canvasWidth / 2 - size * 0.75;
var positionY = canvasHeight / 2 - size * 0.75;

context.fillStyle = 'rgba(255,0,0,.5)';
context.fillRect(positionX, positionY, size, size);

positionX += size / 2;
positionY += size / 2;

context.fillStyle = 'rgba(0,0,255,.5)';
context.fillRect(positionX, positionY, size, size);

/*háromszög a canvas közepére */
var positionX = 150;
var positionY = 225;
var size = 150;

context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(positionX + size, positionY);
context.lineTo(positionX + size / 2, positionY - size);
context.lineTo(positionX, positionY);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill(); 

/* vízszintes és függőleges felezővonal */
context.beginPath();
context.moveTo(canvasWidth - canvasWidth, canvasHeight / 2);
context.lineTo(canvasWidth, canvasHeight / 2);
context.strokeStyle = 'red';
context.stroke();

context.beginPath();
context.moveTo(canvasWidth / 2, canvasHeight - canvasHeight);
context.lineTo(canvasWidth / 2, canvasHeight);
context.strokeStyle = 'green';
context.stroke();

/* 15 narancssárga négyzetet 5 sorba a canvas-on */
var size = 50;
var padding = 5;

for (rowCounter = 0; rowCounter < 5; rowCounter++) {
    var positionX = 15;
    var positionY = 15;
    for (var squareCounter = 0; squareCounter <= rowCounter; squareCounter++) {
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fillRect(positionX + squareCounter * (size + padding), positionY + rowCounter * (size + padding), size, size);
    }
}

/* 15 egymást részben átfedő négyzetet a canvas-ra */
var positionX = 20;
var positionY = 15;
var size = 50;

for (var rectCounter = 1; rectCounter <= 15; rectCounter++) {
    if (rectCounter % 15 === 0) {
        context.fillStyle = 'rgba(0,255,0,.5)';
    } else if (rectCounter % 3 === 0) {
        context.fillStyle = 'rgba(0,0,255,.5)';
    } else if (rectCounter % 5 === 0) {
        context.fillStyle = 'rgba(255,255,0,.5)';
    } else {
        context.fillStyle = 'rgba(0,0,0,.5)';
    }
    context.fillRect(positionX * rectCounter, positionY * rectCounter, size, size);
}

/* 3 háromszög a canvas-ra */
function triangle(positionX, positionY, size) {
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX - size / 2, positionY + size);
    context.lineTo(positionX + size / 2, positionY + size);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'rgba(0,0,0,.5)';
    context.fillStyle = 'rgba(255,165,0,.5)';
    context.stroke();
    context.fill();
}

triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);

/* sakktáblaminta a canvas-ra */
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function drawCheckeredPattern(row, col) {
    for (var rowCounter = 0; rowCounter < row; rowCounter++) {
        for (var colCounter = 0; colCounter < col; colCounter++) {
            if (colCounter % 2 === rowCounter % 2) {
                context.fillStyle = 'white';
            } else {
                context.fillStyle = 'black';
            }
            context.fillRect(colCounter * canvasWidth / col, rowCounter * canvasHeight / row, canvasWidth / col, canvasHeight / row);
        }
    }
}

drawCheckeredPattern(8, 8);