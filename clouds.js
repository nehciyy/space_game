function drawClouds()
{
    for(var i in clouds){
        drawCloud(clouds[i]);
    }
}

function drawCloud(t_cloud)
{
    //main moon shadow
    fill(160,160,159);
    ellipse(t_cloud.moon_x, t_cloud.moon_y, t_cloud.moon_size+10, t_cloud.moon_size+10);
    
    //main moon
    fill(215,215,210);
    ellipse(t_cloud.moon_x-5, t_cloud.moon_y-3, t_cloud.moon_size+5, t_cloud.moon_size+5);
    
    //shadows of the holes on the moon
    fill(93,94,86);
    ellipse(t_cloud.moon_x-20, t_cloud.moon_y-25, t_cloud.moon_size-83, t_cloud.moon_size-80);
    ellipse(t_cloud.moon_x+26, t_cloud.moon_y, t_cloud.moon_size-80, t_cloud.moon_size-80);
    ellipse(t_cloud.moon_x-6, t_cloud.moon_y+30, t_cloud.moon_size-85, t_cloud.moon_size-78);
    
    //holes on the moon
    fill(165,165,155);
    ellipse(t_cloud.moon_x-23, t_cloud.moon_y-25, t_cloud.moon_size-83, t_cloud.moon_size-80);
    ellipse(t_cloud.moon_x+23, t_cloud.moon_y, t_cloud.moon_size-80, t_cloud.moon_size-80);
    ellipse(t_cloud.moon_x-8, t_cloud.moon_y+30, t_cloud.moon_size-85, t_cloud.moon_size-78);
    
    
    //shadow of ocean part of earth
    fill(89,139,208);
    ellipse(t_cloud.earth_x+11, t_cloud.earth_y+3, t_cloud.earth_size-8, t_cloud.earth_size-8);
    
    //ocean part of earth
    fill(126,179,253);
    ellipse(t_cloud.earth_x, t_cloud.earth_y, t_cloud.earth_size-10, t_cloud.earth_size-10);
    
    //land parts of earth
    fill(69,132,99);
    ellipse(t_cloud.earth_x-20, t_cloud.earth_y-50, t_cloud.earth_size-110, t_cloud.earth_size-130);
    ellipse(t_cloud.earth_x-40, t_cloud.earth_y+40, t_cloud.earth_size-120, t_cloud.earth_size-140);
    ellipse(t_cloud.earth_x-20, t_cloud.earth_y+55, t_cloud.earth_size-160, t_cloud.earth_size-140);
    ellipse(t_cloud.earth_x+60, t_cloud.earth_y-25, t_cloud.earth_size-150, t_cloud.earth_size-150);
    ellipse(t_cloud.earth_x+68, t_cloud.earth_y-10, t_cloud.earth_size-160, t_cloud.earth_size-150);
    ellipse(t_cloud.earth_x+40, t_cloud.earth_y+50, t_cloud.earth_size-160, t_cloud.earth_size-170);
    
    
    //main saturn ring
    fill(211,211,209);
    ellipse(t_cloud.saturn_x, t_cloud.saturn_y, t_cloud.saturn_size+80, t_cloud.saturn_size-80);
    
    //back blue ring to make the hollow effect
    fill(29,48,102);
    ellipse(t_cloud.saturn_x, t_cloud.saturn_y, t_cloud.saturn_size+50, t_cloud.saturn_size-85);
    
    //shadow of main saturn
    fill(191,160,96);
    ellipse(t_cloud.saturn_x, t_cloud.saturn_y, t_cloud.saturn_size+20, t_cloud.saturn_size+20);
    
    //main saturn
    fill(213,178,107);
    ellipse(t_cloud.saturn_x-6, t_cloud.saturn_y-1, t_cloud.saturn_size+2, t_cloud.saturn_size+16);
    
    //front ring
    fill(211,211,209);
    ellipse(t_cloud.saturn_x, t_cloud.saturn_y+7, t_cloud.saturn_size+30, t_cloud.saturn_size-95);
    
    
    //left star
    ellipse(t_cloud.star_x, t_cloud.star_y, t_cloud.star_size-38, t_cloud.star_size);
    ellipse(t_cloud.star_x, t_cloud.star_y, t_cloud.star_size-10, t_cloud.star_size-38);
    
    //right middle star
    ellipse(t_cloud.star_x+490, t_cloud.star_y+50, t_cloud.star_size-38, t_cloud.star_size);
    ellipse(t_cloud.star_x+490, t_cloud.star_y+50, t_cloud.star_size-10, t_cloud.star_size-38);
    
    //most right star
    ellipse(t_cloud.star_x+540, t_cloud.star_y+10, t_cloud.star_size-38, t_cloud.star_size+15);
    ellipse(t_cloud.star_x+540, t_cloud.star_y+10, t_cloud.star_size-5, t_cloud.star_size-38);
    
    //meteor
    ellipse(t_cloud.star_x+50, t_cloud.star_y+80, t_cloud.star_size-30, t_cloud.star_size-30);
    stroke(236,246,254,2);
    triangle(t_cloud.star_x+50, t_cloud.star_y+75,t_cloud.star_x+140, t_cloud.star_y+10,t_cloud.star_x+54, t_cloud.star_y+82);
}

function initClouds()
{
    for(var i=0; i<1; i++){
        //m for moon, sa for saturn, e for earth, s for star & followed by coordinate
        
        //moon variable
        var mx = random(690,710);
        var my = random(20,90); 
        
        //saturn variable
        var sax = random(260,280);
        var say = random(20,190); 
        
        //saturn and moon size variable
        var msasize = random(90,110);
        
        //earth variable
        var ex = random(50,90);
        var ey = random(20,70); 
        var esize = random(200,250);
        
        //star variable
        var sx = random(350,500);
        var sy = random(10,110); 
        var ssize = random(30,60);
        
        //speed
        var speed = random(0.5,2);
        
        //moon
        var cloudm = {moon_x: mx, moon_y: my, moon_size: msasize, speed:speed};
        
        //saturn
        var cloudsa = {saturn_x: sax, saturn_y: say, saturn_size: msasize, speed:speed};
        
        //earth
        var cloude = {earth_x: ex, earth_y: ey, earth_size: esize, speed:speed};
        
        //star
        var cloudstar ={star_x:sx, star_y:sy, star_size: ssize, speed:speed};
        
        clouds.push(cloudsa);
        clouds.push(cloudstar);
        clouds.push(cloudm);
        clouds.push(cloude);
        
    }
}

function animateClouds(){
    //animate clouds
    for(var i in clouds){
        //move to right
        clouds[i].moon_x+=clouds[i].speed;
        clouds[i].saturn_x+=clouds[i].speed;
        clouds[i].earth_x+=clouds[i].speed;
        clouds[i].star_x+=clouds[i].speed;
        
        //shift back to the left and continue animate
        if(clouds[i].moon_x>width+10){
            clouds[i].moon_x = -random(100);
        }
        if(clouds[i].saturn_x>width+50){
            clouds[i].saturn_x = -random(100);
        }
        if(clouds[i].earth_x>width+50){
            clouds[i].earth_x = -random(100);
        }
        if(clouds[i].star_x>width+20){
            clouds[i].star_x = -random(100);
        }
    }
}