function drawCanyons()
{
    for(var i=0;i<canyons.length;i++){
        var canyon = canyons[i];
        drawCanyon(canyon);
    }
}

function drawCanyon(t_canyon)
{
    noStroke();
	fill(29,48,102);
    rect(t_canyon.canyon_x,t_canyon.canyon_y,t_canyon.canyon_size,t_canyon.canyon_size-60);
    ellipse(t_canyon.canyon_x+40, t_canyon.canyon_y+40,t_canyon.canyon_size+20,t_canyon.canyon_size+20);
}


function initCanyons(){ 
    var total_canyon = 0;
   if(gamelevel ==1 ){
        total_canyons = 15;
   }else if(gamelevel==2){
        total_canyons = 20;    
   }else if(gamelevel == 3){
       total_canyons = 25;
   }
   while(canyons.length < total_canyons)
    {
        var x = random (-2000, 2000);
        var canyon = {canyon_x: x,
                      canyon_y: 432,
                      canyon_size: 80};

        if(checkCharacteroncanyon(canyon)== false){
             canyons.push(canyon);
            }
     }
}

function checkCharacteroncanyon(canyon){
    var cond1 = gameChar_y == floorPos_y;
    var cond2 = gameChar_world_x - gameChar_width > (canyon.canyon_x);
    var cond3 = gameChar_world_x + gameChar_width < (canyon.canyon_x + canyon.canyon_size);

    if(cond1 && cond2 && cond3)
    {
        return true;  
    }
    return false;
            
}
