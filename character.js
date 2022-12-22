function drawIsLeftAndIsFalling()
{
    strokeWeight(2);
    
    //fire
    noStroke()
    fill(200,0,0);
    ellipse(gameChar_x+10, gameChar_y-15, 10,20);
    fill(253, 251, 138);
    ellipse(gameChar_x+10, gameChar_y-15, 8,15);
    stroke(0);
    fill(121, 121, 121);
    
    //the astro backpack
    rect(gameChar_x, gameChar_y-47, 15, 30);
    fill(255);
    
    //head
    ellipse(gameChar_x-5, gameChar_y-60, 30, 30);
    
    //rotated arm
    push();
    translate(gameChar_x-18,gameChar_y-33);
    rotate(radians(40));
    ellipse(0,0, 10,25);
    pop()
    
    //rotated leg
    push();
    translate(gameChar_x-10,gameChar_y-15);
    rotate(radians(70));
    ellipse(0,0, 10,25);
    pop()
    
    //rotated leg
    push();
    translate(gameChar_x+5,gameChar_y-15);
    rotate(radians(120));
    ellipse(0,0, 10,25);
    pop()
    
    //body
    rect(gameChar_x-15, gameChar_y-45, 20,25);
    stroke(191, 46, 73);
    
    //belt
    rect(gameChar_x-15, gameChar_y-30, 20, 3);
    stroke(22, 69, 147);
    beginShape();
    strokeWeight(3);
    stroke(121, 121, 121);
    
    //left backpack strap
    vertex(gameChar_x, gameChar_y-30.5);
    vertex(gameChar_x-7, gameChar_y-42.9);
    endShape();
    strokeWeight(1);
     
    //arm
    stroke(0);
    ellipse(gameChar_x-5, gameChar_y-30, 10,25);
    stroke(0);
    fill(100, 123, 140);
    
    //the head area to see
    ellipse(gameChar_x-8, gameChar_y-60, 25, 18);

}

function drawIsRightAndIsFalling()
{
    strokeWeight(2);
    //fire
    noStroke()
    fill(200,0,0);
    ellipse(gameChar_x-20, gameChar_y-15, 10,20);
    fill(253, 251, 138);
    ellipse(gameChar_x-20, gameChar_y-15, 8,15);
    
    stroke(0);
    fill(121, 121, 121);
    
    //the astro backpack
    rect(gameChar_x-25, gameChar_y-47, 15, 30);
    fill(255);
    
    //head
     ellipse(gameChar_x-5, gameChar_y-60, 30, 30)
    
    //rotated arm
    push();
    translate(gameChar_x+8,gameChar_y-35);
    rotate(radians(130));
    ellipse(0,0, 10,25);
    pop()

    //rotated leg
    push();
    translate(gameChar_x+5,gameChar_y-15);
    rotate(radians(120));
    ellipse(0,0, 10,25);
    pop()
    
    //rotated leg
    push();
    translate(gameChar_x-13,gameChar_y-15);
    rotate(radians(65));
    ellipse(0,0, 10,25);
    pop()
    
    //body
    rect(gameChar_x-15, gameChar_y-45, 20,25);
    stroke(191, 46, 73);
    
    //belt
    rect(gameChar_x-15, gameChar_y-30, 20, 3);
    stroke(22, 69, 147);
    
    beginShape();
    strokeWeight(3);
    stroke(121, 121, 121);
    
    //left backpack strap
    vertex(gameChar_x-10, gameChar_y-30.5);
    vertex(gameChar_x-5, gameChar_y-42.9);
    endShape();
    strokeWeight(1);
     
    //arm
    stroke(0);
    ellipse(gameChar_x-5, gameChar_y-30, 10,25);
    
    stroke(0);
    fill(100, 123, 140);
    //the head area to see
    ellipse(gameChar_x-2, gameChar_y-60, 25, 18);
    
}

function drawIsLeft()
{
    strokeWeight(2);
    stroke(0);
    fill(121, 121, 121);
    
    //the astro backpack
    rect(gameChar_x, gameChar_y-47, 15, 30);
    fill(255);
    
    //head
    ellipse(gameChar_x-5, gameChar_y-60, 30, 30);
    
    //left leg
    ellipse(gameChar_x, gameChar_y-10, 10,25);
    
    //rotated arm
    push();
    translate(gameChar_x-18,gameChar_y-33);
    rotate(radians(40));
    ellipse(0,0, 10,25);
    pop()
    
    
    //rotated leg
    push();
    translate(gameChar_x-15,gameChar_y-10);
    rotate(radians(35));
    ellipse(0,0, 10,25);
    pop()
    
    //body
    rect(gameChar_x-15, gameChar_y-45, 20,30);
    stroke(191, 46, 73);
    
    //belt
    rect(gameChar_x-15, gameChar_y-30, 20, 3);
    stroke(22, 69, 147);
    
    beginShape();
    strokeWeight(3);
    stroke(121, 121, 121);
    
    //left backpack strap
    vertex(gameChar_x, gameChar_y-30.5);
    vertex(gameChar_x-7, gameChar_y-42.9);
    endShape();
    strokeWeight(1);
    
    //arm
    stroke(0);
    ellipse(gameChar_x-5, gameChar_y-30, 10,25);
    
    stroke(0);
    fill(100, 123, 140);
    
    //the head area to see
    ellipse(gameChar_x-8, gameChar_y-60, 25, 18);

}

function drawIsRight()
{
    strokeWeight(2);
    stroke(0);
    fill(121, 121, 121);
    
    //the astro backpack
    rect(gameChar_x-25, gameChar_y-47, 15, 30);
    fill(255);
    
    //head
    ellipse(gameChar_x-5, gameChar_y-60, 30, 30);
    
    //right leg
    ellipse(gameChar_x-7, gameChar_y-10, 10,25);
    
    //rotated arm
    push();
    translate(gameChar_x+8,gameChar_y-35);
    rotate(radians(130));
    ellipse(0,0, 10,25);
    pop()
    
    //rotated leg
    push();
    translate(gameChar_x+8,gameChar_y-10);
    rotate(radians(145));
    ellipse(0,0, 10,25);
    pop()
    
    //body
    rect(gameChar_x-15, gameChar_y-45, 20,30);
    stroke(191, 46, 73);
    
    //belt
    rect(gameChar_x-15, gameChar_y-30, 20, 3);
    stroke(22, 69, 147);
    
    beginShape();
    strokeWeight(3);
    stroke(121, 121, 121);
    
    //left backpack strap
    vertex(gameChar_x-10, gameChar_y-30.5);
    vertex(gameChar_x-5, gameChar_y-42.9);
    endShape();
    strokeWeight(1);
     
    //arm
    stroke(0);
    ellipse(gameChar_x-5, gameChar_y-30, 10,25);
    
    stroke(0);
    fill(100, 123, 140);
    
    //the head area to see
    ellipse(gameChar_x-2, gameChar_y-60, 25, 18);
}

function drawIsFallingOrIsPlummeting()
{
    strokeWeight(2);
    //fire
    noStroke()
    fill(200,0,0);
    ellipse(gameChar_x, gameChar_y-25, 10,20);
    fill(253, 251, 138);
    ellipse(gameChar_x, gameChar_y-25, 8,15);

    stroke(0);
    fill(121, 121, 121);
    
    //the astro backpack
    rect(gameChar_x-17.5, gameChar_y-55, 35, 25);
    fill(255);
    
    //head
    ellipse(gameChar_x, gameChar_y-65, 30, 30);
    
    //right leg
    ellipse(gameChar_x+12, gameChar_y-20, 10,20);
    
    //left leg
    ellipse(gameChar_x-11, gameChar_y-20, 10,20);
    
    //right arm
    ellipse(gameChar_x+21, gameChar_y-35, 10,25);
    
    //left arm
    ellipse(gameChar_x-20, gameChar_y-35, 10,25);
    
    //body
    rect(gameChar_x-15, gameChar_y-50, 30,25);
    stroke(191, 46, 73);
    
    //belt
    rect(gameChar_x-15, gameChar_y-35, 30, 3);
    stroke(22, 69, 147);
    
    //the midddle rect of belt
    rect(gameChar_x-5, gameChar_y-37, 10,8);
    beginShape();
    strokeWeight(3);
    stroke(121, 121, 121);
    
    //right backpack strap
    vertex(gameChar_x+10, gameChar_y-35.5); 
    vertex(gameChar_x+7, gameChar_y-47.9);
    endShape();
    beginShape();
    
    //left backpack strap
    vertex(gameChar_x-10, gameChar_y-35.5);
    vertex(gameChar_x-7, gameChar_y-47.9);
    endShape();
    strokeWeight(1);
    stroke(0);
    fill(100, 123, 140);
    
    //the head area to see
    ellipse(gameChar_x, gameChar_y-65, 25, 18);
}

function drawStandingFront()
{
    strokeWeight(2);
    stroke(0);
    fill(121, 121, 121);
    
    //the astro backpack
    rect(gameChar_x-17.5, gameChar_y-50, 35, 25);
    fill(255);
    
    //head
    ellipse(gameChar_x, gameChar_y-60, 30, 30);
    
    //right leg
    ellipse(gameChar_x+12, gameChar_y-10, 10,25);
    
    //left leg
    ellipse(gameChar_x-11, gameChar_y-10, 10,25);
    
    //right arm
    ellipse(gameChar_x+21, gameChar_y-30, 10,25);
    
    //left arm
    ellipse(gameChar_x-20, gameChar_y-30, 10,25);
    
    //body
    rect(gameChar_x-15, gameChar_y-45, 30,30);
    stroke(191, 46, 73);
    
    //belt
    rect(gameChar_x-15, gameChar_y-30, 30, 3);
    stroke(22, 69, 147);
    
    //the midddle rect of belt
    rect(gameChar_x-5, gameChar_y-32, 10,8);
    beginShape();
    strokeWeight(3);
    stroke(121, 121, 121);
    
    //right backpack strap
    vertex(gameChar_x+10, gameChar_y-30.5); 
    vertex(gameChar_x+7, gameChar_y-42.9);
    endShape();
    beginShape();
    
    //left backpack strap
    vertex(gameChar_x-10, gameChar_y-30.5);
    vertex(gameChar_x-7, gameChar_y-42.9);
    endShape();
    strokeWeight(1);
    stroke(0);
    fill(100, 123, 140);
    
    //the head area to see
    ellipse(gameChar_x, gameChar_y-60, 25, 18);
}