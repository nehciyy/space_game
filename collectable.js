function drawCollectables()
{
    for(var i=0;i<collectables.length;i++){
        if(collectables[i].isFound == false){
        drawCollectable(collectables[i]);
        }
    }
}

function drawCollectable(t_collectable)
{
    //body
    stroke(0);
    strokeWeight(2);
	fill(188,32,44);
    ellipse(t_collectable.collectable_x+14, t_collectable.collectable_y, t_collectable.collectable_size-1, t_collectable.collectable_size-1);
	rect(t_collectable.collectable_x, t_collectable.collectable_y, t_collectable.collectable_size-2, t_collectable.collectable_size+12);
    
    //head
    stroke(0);
    fill(207,229,247);
    rect(t_collectable.collectable_x+11, t_collectable.collectable_y-25, t_collectable.collectable_size-25, t_collectable.collectable_size-20);
    rect(t_collectable.collectable_x+2, t_collectable.collectable_y-22, t_collectable.collectable_size-5, t_collectable.collectable_size-27);
    
    //circle hole
    fill(29,48,102);
    ellipse(t_collectable.collectable_x+2, t_collectable.collectable_y-20, t_collectable.collectable_size-20, t_collectable.collectable_size-20);
    
    //icon on the fuel can
    noStroke();
    fill(255,253,122);
    triangle(t_collectable.collectable_x+21, t_collectable.collectable_y+5, t_collectable.collectable_x +7, t_collectable. collectable_y +5, t_collectable.collectable_x +7, t_collectable.collectable_y +25);
    triangle(t_collectable.collectable_x+10, t_collectable.collectable_y+20, t_collectable.collectable_x +22, t_collectable.collectable_y +20, t_collectable.collectable_x +12, t_collectable.collectable_y +40);
    triangle(t_collectable.collectable_x+7, t_collectable.collectable_y+25, t_collectable.collectable_x +11, t_collectable.collectable_y +15, t_collectable.collectable_x +22, t_collectable.collectable_y +20);
    
}

function intiCollectables(){
    var total_collectables = 30;
    while(collectables.length < total_collectables){
        var x = random(-2000,2000);
        var collectable = {collectable_x: x,
                          collectable_y: 390,
                          collectable_size:30,
                          isFound: false};
        if(isCollectableOnCanyon(collectable) == false){
            collectables.push(collectable);
        }
    }
}

//return true if Cotlectable is On a Canyon, else false
function isCollectableOnCanyon (t_collectable){
   var onCanyon = false;
    
    for (i in canyons){
        var x1_limit = canyons[i].canyon_x - t_collectable.collectable_size;
        var x2_limit = canyons[i].canyon_x + canyons[i].canyon_size;
        
        if(t_collectable.collectable_x > x1_limit && t_collectable.collectable_x < x2_limit)
        {
            
            onCanyon = true;
            
            break; //if collectable is on one of the canyon then exit the for loop
            
        }
    }
    
    return onCanyon;
}
    