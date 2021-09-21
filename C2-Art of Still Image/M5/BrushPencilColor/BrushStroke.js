function _(selector){
    return document.querySelector(selector);
  }

class BrushStroke {
    constructor(img, x, y, w, h){
        
        // this.dragging=false;
        // this.rollover=false;
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    //When the brush tool is selected do:
    show() {
        let color = _("#color").value;
    //     let size = _("#weight").value;
    //     let scale = (size * softbrush.width/200)
    //     strokeWeight(size);
    //     stroke(color);
    //     if(document.querySelector("#brushTool").checked==true  && mouseX>0 && mouseX<1080 && mouseY>0 && mouseY<720){
        // image(softbrush, mouseX - (scale/2), mouseY - (scale/2),scale,scale);

        image(this.img, this.x, this.y, this.w, this.h);
        tint(color);
    //     } else {
    //         return null;
    //     }

    }

    //When the selector tool is selected do:
    // drag(){

    // }

    //When the eraser is selected do:
    // erase(){

    // }
  
}

