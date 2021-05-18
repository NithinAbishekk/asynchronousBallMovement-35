var ball;
var db,position;

function setup(){
    db = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //d:whitehar/classactivity/angrybird
    var path = db.ref('ball/position');
    path.on("value",readPosition,showError);


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    db.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
   // ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
//x:345,
//y:321
function readPosition(data){
     position = data.val();
     ball.x = position.x;//345
     ball.y = position.y;
}

function showError(){
    console.log("There is an error");
}
