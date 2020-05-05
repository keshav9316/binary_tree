class Tree{
    constructor(){
        this.root=null;
    }

    addValue(val){
        var n = new Node(val);
        if(this.root == null){
            this.root=n;
            //for drawing position
            this.root.x= width / 2;
            this.root.y= 20;
            //
        } else {
            this.root.addNode(n);
        }

    }
    traverse(){
      //  console.log('tree');
        this.root.visit(this.root);
    }

    search(num){
        let found = this.root.searchNode(num);
        return found;
    }
}
class Node{
    constructor(val,x,y){
        this.value=val;
        this.left=null;
        this.right=null;
        this.x=x;
        this.y=y;
    }

    addNode(n){
        if(n.value < this.value){   //n.value is necessary
            if(this.left == null){
                this.left = n;
                  //drawing
                this.left.x = this.x -50;
                this.left.y = this.y +20;
                               
            } else {
                this.left.addNode(n);
            }
        } else if(n.value > this.value){
            if(this.right == null){
                this.right = n;
                  //drawing
                this.right.x = this.x +50;
                this.right.y = this.y +20;
              
            } else {
                this.right.addNode(n);
            }
        }
        
    }

    visit(parent){
            if(this.value != null){
                console.log(this.value);
            }
            if(this.left != null){
                this.left.visit(this);
              //  console.log(this.left);
            }
            if(this.right != null){
                this.right.visit(this);
            }
            textAlign(CENTER);
            fill(255);
            text(this.value,this.x,this.y);
            noFill();
            ellipse(this.x, this.y, 20, 20);
            fill(255);
            line(parent.x,parent.y,this.x,this.y);

    }

    searchNode(num){
       
        if(this.value == num){
            return this;
        } else if (num < this.value && this.left != null){
           return this.left.searchNode(num);
        } else if (num > this.value && this.right != null){
           return this.right.searchNode(num);
        } else {
            return null;
        }
    }
}

var tree;
function setup(){
    createCanvas(640,400);
    background(55);
    tree = new Tree();
    //createCanvas(640, 400);
    for(let i=0;i<10;i++){
        tree.addValue(floor(random(0,11)));
    }
    console.log(tree);

    tree.traverse();
   let result = tree.search(10);
   textSize(32);
   text("Searching no. 10",width/2,height/1.2);
   if (result == null){
    textSize(32);   
    fill(0);
       text("NOT FOUND",width/2,height-2);
   } else {
    textSize(32);     
    fill(0);
       text("FOUND",width/2,height-2);
   }
}