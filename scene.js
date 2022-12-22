function drawGameOver(){
    background(169,169,169,150);
    fill(255);
    textSize(25);
    text("Press ENTER to continue",350,height/2+50);
    textSize(80);

    if(lives>0 && gamelevel == 1){
        text("Level 1 Completed!",200,height/2);
    }else if(lives>0 && gamelevel == 2){
        text("Level 2 Completed!",200,height/2);
    }else if(lives>0 && gamelevel == 3){
        textSize(60);
        text("Congratulations you win the game!",50,height/2);
    }else{
        text("Game over", 300, height/2);
        gamelevel=1;
        gameclear=false;
    }
}

function drawLifeTokens(){
    fill(255,0,0);
    for(var i=0;i<lives;i++){
        triangle(21+(50*i),24,35+(50*i),40,51+(50*i),24);
        ellipse(28+(50*i),20,17,17);
        ellipse(43+(50*i),20,17,17);
    }
}

function drawFlagpole(){
    fill(255);
    rect(flagpole.x_pos,
         floorPos_y-flagpole.pole_height,
         10,
         flagpole.pole_height);
    fill(255,0,0);
    if(flagpole.isReached){
        triangle(flagpole.x_pos,floorPos_y-flagpole.pole_height,
                 flagpole.x_pos+flagpole.flag_width,floorPos_y-(flagpole.pole_height-flagpole.flag_height/2),
                 flagpole.x_pos,floorPos_y-flagpole.flag_width*2);
    }else{
         triangle(flagpole.x_pos,floorPos_y-flagpole.flag_height,
                  flagpole.x_pos+flagpole.flag_width,floorPos_y-(flagpole.flag_height/2),
                  flagpole.x_pos,floorPos_y);
    }
}

function drawSky()
{
    background(29,48,102)
}

function drawGround()
{
    noStroke();
	fill(248,217,243);
	rect(0, floorPos_y, width, height);
}