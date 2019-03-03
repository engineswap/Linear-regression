let xs = [17, 13, 12, 15, 16, 14, 16, 16, 18, 19]
let ys = [94, 73, 59, 80, 93, 85, 66, 79, 77, 91]

//pearsons correlation coeficient for slope
//mean
var meanX = mean(xs)
var meanY = mean(ys)
//(?-?bar)
var xbarArray = []
for (i in xs){
    xbarArray.push(xs[i]-meanX)
}
var ybarArray = []
for (i in ys){
    ybarArray.push(ys[i]-meanY)
}
//(?-?bar)^2
var xbarSQRDArray = []
var ybarSQRDArray = []
for(i in xbarArray){
    xbarSQRDArray.push(Math.pow(xbarArray[i], 2))
}
for(i in ybarArray){
    ybarSQRDArray.push(Math.pow(ybarArray[i], 2))
}
//(x-xbar)(y-ybar)
let mulipliedBarArray = []
for(i in xbarArray){
    mulipliedBarArray.push(xbarArray[i]*ybarArray[i])
}
//equation part
var sumOfMultipliedBarrArray = 0
for (i in mulipliedBarArray){
    sumOfMultipliedBarrArray+=mulipliedBarArray[i]
}
var sumOfXbarSQRD = 0
var sumOfYbarSQRD = 0
for (i in xbarSQRDArray){
    sumOfXbarSQRD += xbarSQRDArray[i]
}
for (i in ybarSQRDArray){
    sumOfYbarSQRD += ybarSQRDArray[i]
}
// coeficcient found
var r = sumOfMultipliedBarrArray/(Math.pow((sumOfXbarSQRD*sumOfYbarSQRD), 0.5))
//sd of y and x
var SDofX = Math.pow((sumOfXbarSQRD/(xs.length-1)), 0.5)
var SDofY = Math.pow((sumOfYbarSQRD/(ys.length-1)), 0.5)
//slope 
var slope = r*(SDofY/SDofX)
//y intercept 
var yint = meanY - (slope*meanX)
var regressionline = 'Line calculated: y = ' + (Math.round(slope * 100) / 100) + 'x + ' + (Math.round(yint * 100) / 100)
console.log(regressionline)

function mean(arr){
    let mean = 0
    for (i in arr){
        mean += arr[i]
    }
    mean = mean/(arr.length)
    return mean
}

//find 2 point to graph a line in p5
let y1 = 10*slope+yint
let y2 = 100*slope+yint
//p5 graphing
function setup() { 
    createCanvas(1000, 600);
} 

function draw() { 
    background(220);
    for(i in xs){
        point(xs[i], ys[i])
    }
    line(10, y1, 100, y2)
}
let pointsArr =[]
for(i in xs){
    pointsArr.push('(' + xs[i] + ',' + ys[i] + ')')
}

document.getElementById("line").innerHTML = regressionline + ' ';
document.getElementById("points").innerHTML = 'Using points: ' + pointsArr;