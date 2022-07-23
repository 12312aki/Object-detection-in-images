Status = ""
object = []

function preload()
{
img = loadImage('livingroom.jpg')
}

function setup()
{
canvas = createCanvas(480, 380);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("number_of_objects").innerHTML = "Status = detecting objects"

}

function modelLoaded()
{
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
    console.log(error);
    }

console.log(results);
object = results;
}

function draw()
{
    if ( Status != undefined)
    {
        image(img, 0, 0, 650, 350);
        for (var i=0; i<object.length; i++)
        {
        document.getElementById("status").innerHTML = "objcts detttcctteedd";
        percent = floor(object[i].confidence * 100);
        fill(255,78, 88)
        text(object[i].label + percent + "%", object[i].x + 15, object[i].y+ 15);   
        noFill();
        stroke(225,0, 0);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
        
        }

    }
}