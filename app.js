
let sceneWidth = document.getElementById("canvas-container").offsetWidth;
// Height must be 3:4 of width
let sceneHeight = (sceneWidth * 4) / 3;
document.getElementById("canvas-container").style.height = sceneHeight;


/**
 * KonvaJS
 */

// Set the stage 
var stage = new Konva.Stage({
    container: 'canvas',
    // first just set set as is
    width: sceneWidth,
    height: sceneHeight,
});

// New layer
var layer = new Konva.Layer();
stage.add(layer);

// add circle into center
var circle = new Konva.Circle({
    radius: 50,
    fill: '#72F2EB',
    x: stage.width() / 2,
    y: stage.height() / 2,
});

// add rectangle to border
var rectangle = new Konva.Rect({
    stroke:'#00CCC0',
    strokeWidth:2,
    cornerRadius:20,
    width: sceneWidth - 60,
    height: sceneHeight - 60,
    x: 30,
    y: 30,
});

// Add some text to the stage
var simpleText = new Konva.Text({
    x: stage.width() / 2,
    y: stage.width() / 3, 
    text: 'HTML5 Canvas',
    fontSize: 50,
    fontFamily: 'Calibri',
    fill: 'white',
});
simpleText.offsetX(simpleText.width() / 2);

// Add to layer
layer.add(circle);
layer.add(rectangle);
layer.add(simpleText);

fitStageIntoParentContainer();
window.addEventListener('resize', fitStageIntoParentContainer);

// https://konvajs.org/docs/sandbox/Responsive_Canvas.html
function fitStageIntoParentContainer() {

    var container = document.querySelector('#canvas-container');
    
    // Set height to 4:3
    const pixelWidth = container.offsetWidth;
    container.style.height = `${((pixelWidth * 4) / 3)}px`;    


    // now we need to fit stage into parent container
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    // but we also make the full scene visible
    // so we need to scale all objects on canvas
    var scalex = containerWidth / sceneWidth;
    var scaley = containerHeight / sceneHeight;
    

    // Set width and height
    stage.width(sceneWidth * scalex);
    stage.height(sceneHeight * scaley);

    // Show values to user
    document.getElementById('cw').value = (sceneWidth * scalex) 
    document.getElementById('ch').value = (sceneHeight* scaley)

    // Scale the stage to match adjusted width
    stage.scale({ x: scalex, y: scaley });

    // Show values to user
    document.getElementById('cx').value = scalex;
    document.getElementById('cy').value = scaley;

}
 
 /*
  * DOM Changes
  */
 
 // Width
 const w = () => {
    // Get new percent value
    const p = document.getElementById("w").value;
    document.getElementById('canvas-container').style.width = `${p}%`;

    fitStageIntoParentContainer(); // Fit the stage to it's container
 }
 
 // Position (x)
 const x = () => {
    // Get new percent value
    const p = document.getElementById("x").value;
    document.getElementById('canvas-container').style.left = `${p}%`;

    fitStageIntoParentContainer(); // Fit the stage to it's container
 }
 
 // Position (y)
 const y = () => {
    // Get new percent value
    const p = document.getElementById("y").value;
    document.getElementById('canvas-container').style.top = `${p}%`;

    fitStageIntoParentContainer(); // Fit the stage to it's container
 }
 
 const c = () => {
    const col = document.getElementById("c").value;
    document.getElementById("t-shirt").style.backgroundColor = col;

    fitStageIntoParentContainer(); // Fit the stage to it's container
 }
 
 const t = () => {
    const img = document.getElementById("t").value;
    document.getElementById("s").src = `https://portal.themailshark.net/franchisepromoF/Apparels/${img}`;


    fitStageIntoParentContainer(); // Render canvas
 }