/*Write a comment of around 150 words at the top of your code explaining:

I used https://mixkit.co/free-sound-effects/video-game/ to download my extension for my sound that creates an effect when my game character jumps, collects item, wins the game or die in the game. For the splash screen, I drew the image on my own with Procreate application then export it to assets file. I made this game an astronaut (astro) theme, so the main aim of this game is to either collect 20 of the gas cans so the astro can fly back to Earth, or he could reach the flagpole to compvare his mission then fly back to Earth as well. I focused more on the aesthetic aspect of the game hence I have made many different "clouds" as my background and make them animate.

Left and right arrows and spacebar are the game controls for the character. The character will have to collect up to 20 gas bottles (collectable items) or reach the flagpole in order to win the game. 

It was difficult making my character not spawn on canyon when game starts. Hence, having to create an if statements will allow canyon to print at another position so it does not fall under the character's spawn position.

For loops, while loops and if statements are the skills that I have learnt more in depth. It ensures that the character functions well in the game.

(226 words)
*/

//character reference
var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;

//character controls
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

//scenes
var collectables;
var canyons;
var trees;
var mountains;
var clouds;

//movement in game
var scrollPos;
var gameChar_world_x;

//game score & lives
var game_score;
var lives;
var gameMode;
var gameWin;

//flagpole
var flagpole;

//sounds
var jumpSound;
var collectSound;
var fallSound;
var winSound;
var soundReady;
var soundLoadCounter;

var gamelevel;
var gameclear;

function preload(){
    //Sound Effects obtained from https://mixkit.co/free-sound-effects/video-game/
    soundReady = false;
    soundLoadCounter = 0;
    
    soundFormats("mp3");
    jumpSound = loadSound("assets/jump.mp3",soundLoaded);
    collectSound = loadSound("assets/collect.mp3",soundLoaded);
    fallSound = loadSound("assets/gameover.mp3",soundLoaded);
    winSound = loadSound("assets/win.mp3",soundLoaded);
    
    img = loadImage("assets/splashscreen.jpg");
}

function soundLoaded(){
    soundLoadCounter++;
    if(soundLoadCounter==4){
        soundReady = true;
    }
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    lives = 3;
    gameMode = 1;
    gamelevel = 1;
    console.log("gamelevel1")
}

function splashScreen(){
    img = loadImage("assets/splashscreen.jpg", img => {image(img,0,0);});
}

function startGame(){
    //initialise the game
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    gameChar_width = 15;
    
    game_score = 0;
    gameWin = false;
    
    
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    scrollPos = 0;
    

    if(gamelevel == 1 && gameclear== true){               
         gamelevel = 2;

            
    }else if(gamelevel == 2 && gameclear == true){
        gamelevel = 3;
    }
    console.log(gameclear)
    console.log(gamelevel)
    
    gameChar_world_x = gameChar_x - scrollPos;
    
    flagpole = {x_pos:1500,
                pole_height:250,
                flag_height:50,
                flag_width:100,
                isReached: false};

    clouds=[];
    initClouds();
    
    canyons = [];
    initCanyons();
    
    collectables=[];
    intiCollectables();
    
    mountains = [];
    intiMountains();
    
    trees = [];
    intiTrees();
    
     
     
}
                         
function draw()
{
    if(!soundReady){
        return;
    }
    
    if(gameMode == 1){
        splashScreen();
    }else if(gameMode == 2){
        startGame();
        gameMode = 3;
        
    }else{
        inGame();
    }
}


function inGame(){
    ////////////DRAWVING CODE///////////
    
	drawSky();
    drawGround();
    
    push();
    translate(scrollPos,0);
    animateClouds();
    drawCanyons();
    drawMountains();
    drawTrees();
    drawClouds();
    drawCollectables();
    collectCollectables();
    checkIfGameCharIsOverCanyons();
    drawFlagpole();
    checkFlagpole();
    checkGameScore();
    pop();
    
    drawLifeTokens();
    drawGameScore();
	drawGameChar();
    


	//check if game is over
    var isGameOver = checkIsGameOver();
    if(isGameOver == true){
        drawGameOver();
        return;
    }
    
    // Logic to make the game character move or the background scroll.
	if(isPlummeting == true)
    {
        gameChar_y += 10;
        checkPlayerDie();
        return; // exit draw functions
    }
    if(gameChar_y < floorPos_y){
        gameChar_y += 2 ;
        isFalling = true;
    }else{
        isFalling = false;
    }
    
    if(isLeft == true){
        if(gameChar_x > width*0.2){
            gameChar_x -= 5;
        }else{
            scrollPos += 5;
        }
        
    }
    else if(isRight == true){
        if(gameChar_x < width*0.8){
        gameChar_x += 5;
        }else{
            scrollPos -=5;
        }
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}

function drawGameChar()
{
    if(isLeft && isFalling)
	{// add your jumping-left code
        drawIsLeftAndIsFalling();

	}
	else if(isRight && isFalling)
	{// add your jumping-right code
        drawIsRightAndIsFalling();

	}
	else if(isLeft)
	{// add your walking left code
        drawIsLeft();

	}
	else if(isRight)
	{// add your walking right code
        drawIsRight();

	}
	else if(isFalling || isPlummeting)
	{// add your jumping facing forwards code
        drawIsFallingOrIsPlummeting();

	}
	else
	{// add your standing front facing code
        drawStandingFront();

	}
}


function checkGameScore(){
    if(game_score == 20){
        gameWin = true;
        winSound.play();
    }
}
function checkIsGameOver(){
    var gameOver = false;
    
    if(flagpole.isReached || lives<1 || gameWin ){
        gameOver = true;        
    }
    return gameOver;
              
}

function checkPlayerDie(){
    if(gameChar_y>height){
        if(lives>0){
            startGame();
        }
    }
}

function checkFlagpole(){
    if(flagpole.isReached==false){
        var d = dist(gameChar_world_x,gameChar_y,
                      flagpole.x_pos, floorPos_y);
        if(d<10){
            flagpole.isReached = true;
            winSound.play();
            gameclear = true;
        }
    }
}

function collectCollectables()
{
    for(var i=0;i<collectables.length;i++){
        if(collectables[i].isFound == false){
             //check if game character is in the range of the collectable
            if(dist(gameChar_world_x, gameChar_y,
                collectables[i].collectable_x, collectables[i].collectable_y)<60){
                collectables[i].isFound= true;
                game_score++;
                collectSound.play();
            }
        }
    }
}

function drawGameScore(){
    if(!gameWin){
        fill(255);
    textSize(25);
    text("Score:"+game_score, 910, 30);
    }
    else{
        fill(255);
    textSize(25);
    text("Score:"+game_score, 910, 30);
        game_score=0;
    }
    
}

function checkIfGameCharIsOverCanyons()
{
    if(checkIsGameOver()){
        return;
    }
    
    for(var i=0;i<canyons.length;i++){
        var canyon = canyons[i];
        var cond1 = gameChar_y == floorPos_y
        var cond2 = gameChar_world_x - gameChar_width > (canyon.canyon_x)
        var cond3 = gameChar_world_x + gameChar_width < (canyon.canyon_x + canyon.canyon_size)
    
        if(cond1 && cond2 && cond3)
        {
            isPlummeting = true;  
            lives--;
            fallSound.play();
            gameclear = false;
        }
    }
}

// ---------------------
// Key control functions
// ---------------------

function keyPressed()
{
// if statements to control the animation of the character when keys are pressed.
    
    //enter
    if(keyCode == 13){    
        if(gameMode == 1){
            gameMode=2;
            lives = 3;
            startGame();
            return;
        }
        else if(lives == 0|| (lives >0 && flagpole.isReached == true) || (lives>0 && gameWin))
        {
            lives = 3;
            startGame();    
        }
    } 
    //left
    else if(keyCode == 37){
        isLeft = true;
    }
    //right
    else if(keyCode == 39){
        isRight = true;
    }
    //space
    else if(keyCode == 32){
        if(gameChar_y >= floorPos_y){
            gameChar_y -= 100;
            jumpSound.play();
        }
    }
    
}

function keyReleased()
{
	// if statements to control the animation of the character when keys are released.
  
    //left
    if(keyCode == 37){
        isLeft = false;
    }
    //right
    else if(keyCode == 39){
        isRight = false;
    }
}
