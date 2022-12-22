function drawMountains()
{
    for(var i=0; i<mountains.length;i++){
        var mountain = mountains[i];
        drawMountain(mountain);
    }        
}

function drawMountain(mountain)
{
    noStroke();
    fill(49,59,65);
    triangle(mountain.mountain_x, mountain.mountain_y, mountain.mountain_x+80*mountain.mountain_size, mountain.mountain_y-230, mountain.mountain_x+160*mountain.mountain_size, mountain.mountain_y*mountain.mountain_size);
    //mountain side shadow
    fill(44,51,57);
    triangle(mountain.mountain_x+120, mountain.mountain_y, mountain.mountain_x+80*mountain.mountain_size, mountain.mountain_y-230, mountain.mountain_x+160*mountain.mountain_size, mountain.mountain_y*mountain.mountain_size);
    
    
}

function intiMountains()
{
    var total_mountains = 10;
    while(mountains.length < total_mountains)
    {
        var x = random(-2000, 2000);
        var mountain = {mountain_x: x,
                        mountain_y: 432,
                        mountain_size: 1};
        
        mountains.push(mountain);
       
     }
}