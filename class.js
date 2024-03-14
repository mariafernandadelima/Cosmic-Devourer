class Obj{
    constructor(x,y,w,h,at){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.at = at

    }
    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    colid(objeto) {
        if((this.x < objeto.x + objeto.w)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }
    }
    
    point(objeto){
        if((objeto.y>=680)&&(objeto.y <= 684)){
            return true
        }else{
            false
        }
    }

}
class lixo extends Obj{
    vel = Math.random() * (6 - 3) + 3

    mov(){
        this.y += this.vel
    }
    
}
class BG extends Obj{

    mov(ini,lim){
        this.y +=2
        if(this.y > lim){
            this.y = ini
        }
    }
}

