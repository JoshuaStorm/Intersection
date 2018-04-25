const TIME_DELTA = 1000;
const COLLECTION_COUNT = 55;

var count = 0;
var totalTime = 0;

function perTimer() {
    totalTime += TIME_DELTA;
    var radius = displayWidth / 4;
    if (totalTime > TIME_DELTA * 5) {
        delayedDrawCircles(Math.random()*displayWidth, Math.random()*displayHeight, (-10 + Math.random()*20), (-10 + Math.random()*20), radius, Math.random()*50);
        totalTime = 0;
    }
}

var CENTER_X;
var CENTER_Y;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function drawCircles(xOffset, yOffset, xDelta, yDelta, radius, count) {
    for (let i = 0; i < count; i++) {
        ellipse(xOffset + xDelta*i, yOffset + yDelta*i, radius, radius);
    }
}

async function delayedDrawCircles(xOffset, yOffset, xDelta, yDelta, radius, count) {
    for (let i = 0; i < count; i++) {
        ellipse(xOffset + xDelta*i, yOffset + yDelta*i, radius, radius);
        await sleep(10);
    }
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    background(255);
    noFill();
    stroke('rgba(0,0,0,0.25)');
    // The sun osc
    CENTER_X = displayWidth / 2;
    CENTER_Y = displayHeight / 2;

    var radius = displayWidth / 4;
    ellipse(CENTER_X - radius/2, CENTER_Y - radius/2, radius, radius);

    radius = displayWidth / 4;
    ellipse(CENTER_X - radius/4, CENTER_Y + radius/4, radius, radius);

    for (let i = 0; i < COLLECTION_COUNT; i++) {
        drawCircles(Math.random()*displayWidth, Math.random()*displayHeight, (-10 + Math.random()*20), (-10 + Math.random()*20), radius, Math.random()*50);
    }


    // drawCircles(-radius/4, radius/4, 10, 10, radius, 20);
    // drawCircles(-radius/4, radius/4, -10, 10, radius, 20);
    // drawCircles(radius/4, -radius/4, -10, 10, radius, 20);
    // drawCircles(radius/4, -radius/4, 10, 10, radius, 20);
    // drawCircles(radius/4, radius/4, 10, 10, radius, 40);
    //
    // drawCircles(radius/4, radius/4, 13, -10, radius, 40);
    // // drawCircles(radius/4, radius/4, 1, -1, radius, 420);
    // drawCircles(radius/4-10, radius/4-10, 0, -10, radius, 42);
    // drawCircles(radius/4-10, radius/4-10, 10, 0, radius, 42);
    // // drawCircles(radius/4, radius/4, 10, 0, radius, 42);



    // for (let i = 0; i < 20; i++) {
        // ellipse(CENTER_X + radius/4 + 10*i, CENTER_Y + radius/4 - 10*i, radius, radius);
    // }
    // beginShape();
    // let resolution = 260;
    // for (let a = 0; a <= 2*Math.PI; a += 2*Math.PI/resolution) {
    //     nVal = map(noise( cos(a)*nInt+1, sin(a)*nInt+1, t ), 0.0, 1.0, nAmp, 1.0); // map noise value to match the amplitude
    //
    //     x = cos(a)*rad *nVal;
    //     y = sin(a)*rad *nVal;
    //
    //     //    x = map(a, 0,TWO_PI, 0,width);
    //     //    y = sin(a)*rad *nVal +height/2;
    //
    //     //    vertex(prevX, prevY);
    //     vertex(x, y);
    //
    //     //    line(x,y,x,height);
    //
    //     //    prevX = x;
    //     //    prevY = y;
    // }
    // endShape(CLOSE);


    setInterval(perTimer, TIME_DELTA);
}


function draw() {
    // clear();
}
