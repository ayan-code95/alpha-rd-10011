class Tree{
    constructor(x){
        this.body=createSprite(x,height-380)
        this.body2=createSprite(x-50,height-450)
        this.body.addImage(treeImg)
        this.body.scale=3
        this.body.debug=true;
        this.body.debug=true;
        this.body.setCollider("rectangle",0,0,15,200)
        this.body2.visible=false


    }

}