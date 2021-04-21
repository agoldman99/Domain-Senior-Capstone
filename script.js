const canvas = document.getElementById("canvas1");

/* clear canvas button */
const clearEl = document.getElementById("clear1");

const ctx = canvas.getContext('2d');

/* initialize global variables */
let radius = 3;           /* this is the circle radius and the line width */
let isPressed = true;
let color = '#0d2d53';
let currPosX, currPosY; /* position of the mouse; they start out undefined */

/* set up the event listeners */
canvas.addEventListener('mousedown', (e) => {
   isPressed = true;

   currPosX = e.offsetX;
   currPosY = e.offsetY;

   /* I think we want to draw a circle when the mouse is just clicked */
   /* not just when the mouse is moved */
   /* I changed this from the original program */
   drawCircle(currPosX, currPosY);

   // console.log(isPressed, currPosX, currPosY);
});

canvas.addEventListener('mouseup', (e) => {
   isPressed = false;

   currPosX = undefined;
   currPosY = undefined;

   // console.log(isPressed, currPosX, currPosY);
}); /* end mouseup eventListener */

canvas.addEventListener('mousemove', (e) => {
   if( isPressed) {  /* we only want to do this when the mouse is held down */
      const x2 = e.offsetX;
      const y2 = e.offsetY;

      drawCircle(x2, y2); /* but this can't keep up with fast movement, so draw line also */
      drawLine(currPosX, currPosY, x2, y2);

      /* we need to update the current position */
      currPosX = x2;
      currPosY = y2;
      // console.log(offsetX, offsetY);
   } /* end isPressed */

   // console.log(isPressed, currPosX, currPosY);
}); /* end mousemove eventListener */

/* x, y define center of circle */
/* radius is the radius */
/* the next two are start angle and end angle in RADIANS */
/* 2*PI is 360 degrees */
function drawCircle( x, y ) {
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2);
   ctx.fillStyle = color;
   ctx.fill();
} /* end drawCircle() */

/* draw lines in between the circles to fill in the drawing */
/* move to the first coordinate pair, draw to the second */
function drawLine(moveToX, moveToY, lineToX, lineToY) {
   ctx.beginPath();
   ctx.moveTo(moveToX, moveToY);
   ctx.lineTo(lineToX, lineToY);
   ctx.strokeStyle = color;

   /* we want diameter so line width matches circle */
   ctx.lineWidth = radius * 2;
   ctx.stroke();                /* actually draw the line */
}  /* end drawLine() */

/* the clear button */
clearEl.addEventListener('click', () => 
            ctx.clearRect(0, 0, canvas.width, canvas.height));







/*---------SECOND DOT CANVAS------------------------*/
            const canvas2 = document.getElementById("canvas2");

            /* clear canvas button */
            const clearEl2 = document.getElementById("clear2");
            
            const ctx2 = canvas2.getContext('2d');
            
            /* initialize global variables */
            let radius = 3;           /* this is the circle radius and the line width */
            let isPressed = true;
            let color = '#0d2d53';
            let currPosX, currPosY; /* position of the mouse; they start out undefined */
            
            /* set up the event listeners */
            canvas2.addEventListener('mousedown', (e2) => {
               isPressed = true;
            
               currPosX = e2.offsetX;
               currPosY = e2.offsetY;
            
               /* I think we want to draw a circle when the mouse is just clicked */
               /* not just when the mouse is moved */
               /* I changed this from the original program */
               drawCircle(currPosX, currPosY);
            
               // console.log(isPressed, currPosX, currPosY);
            });
            
            canvas2.addEventListener('mouseup', (e) => {
               isPressed = false;
            
               currPosX = undefined;
               currPosY = undefined;
            
               // console.log(isPressed, currPosX, currPosY);
            }); /* end mouseup eventListener */
            
            canvas2.addEventListener('mousemove', (e2) => {
               if( isPressed) {  /* we only want to do this when the mouse is held down */
                  const x2 = e2.offsetX;
                  const y2 = e2.offsetY;
            
                  drawCircle(x2, y2); /* but this can't keep up with fast movement, so draw line also */
                  drawLine(currPosX, currPosY, x2, y2);
            
                  /* we need to update the current position */
                  currPosX = x2;
                  currPosY = y2;
                  // console.log(offsetX, offsetY);
               } /* end isPressed */
            
               // console.log(isPressed, currPosX, currPosY);
            }); /* end mousemove eventListener */
            
            /* x, y define center of circle */
            /* radius is the radius */
            /* the next two are start angle and end angle in RADIANS */
            /* 2*PI is 360 degrees */
            function drawCircle( x, y ) {
               ctx2.beginPath();
               ctx2.arc(x, y, radius, 0, Math.PI * 2);
               ctx2.fillStyle = color;
               ctx2.fill();
            } /* end drawCircle() */
            
            /* draw lines in between the circles to fill in the drawing */
            /* move to the first coordinate pair, draw to the second */
            function drawLine(moveToX, moveToY, lineToX, lineToY) {
               ctx2.beginPath();
               ctx2.moveTo(moveToX, moveToY);
               ctx2.lineTo(lineToX, lineToY);
               ctx2.strokeStyle = color;
            
               /* we want diameter so line width matches circle */
               ctx2.lineWidth = radius * 2;
               ctx2.stroke();                /* actually draw the line */
            }  /* end drawLine() */
            
            /* the clear button */
            clearEl2.addEventListener('click', () => 
                        ctx2.clearRect(0, 0, canvas2.width, canvas2.height));