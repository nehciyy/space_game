function drawTrees()
 {
     for(var i=0; i<trees.length;i++){
        var tree = trees[i];
        drawTree(tree);
    }
 }
 
 function drawTree(tree)
 {
    noStroke();
    //tree trunk
    fill(19,87,170);
    rect(tree.tree_x, tree.tree_y, tree.tree_size-60, 98);
    //leaves of tree
    fill(134,255,245);
    ellipse(tree.tree_x+10, tree.tree_y-5, tree.tree_size, tree.tree_size);
    ellipse(tree.tree_x+38, tree.tree_y+15, tree.tree_size-50, tree.tree_size-30);
    ellipse(tree.tree_x-15, tree.tree_y-35, tree.tree_size-20, tree.tree_size-50);
    //shadows
    fill(36,118,99);
    ellipse(tree.tree_x+25, tree.tree_y-5, tree.tree_size-50, tree.tree_size-25);
    fill(255);
    ellipse(tree.tree_x+25, tree.tree_y-5, tree.tree_size-70, tree.tree_size-70);
    
 }


function intiTrees()
{ 
 var total_trees = 10;
    while(trees.length < total_trees)
    {
        var x = random (-2000, 2000);
        var tree = {tree_x: x,
                    tree_y: 336,
                    tree_size: 80};
        
        trees.push(tree);
    }   
}