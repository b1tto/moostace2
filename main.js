noseX = 0;
noseY = 0;
function preload(){
    mustacheImage = loadImage('https://i.postimg.cc/wj3p7tVK/th-20-removebg-preview.png');
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log('posenetisinitialized');
}

function draw(){
    image(video,0,0,500,500);
    image(mustacheImage,noseX,noseY,50,20);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y;
    }
}
function takeSnapshot(){
save('image.png');
}