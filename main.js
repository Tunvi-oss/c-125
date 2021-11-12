noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    document.getElementById("square_side").innerHTML = "Width AND Height of a Square will be = " + difference +"px"
    background('#969A7');
    fill('#f51168');
    stoke('#f51168');
    square(noseX, noseY, difference);


}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].poses.nose.x;
        noseY = results[0].poses.nose.y;
        console.log("noseX =" + noseX +"noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.righhtWrist.x;
        difference = floor(leftWrist - rightWrist);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);


    }
}