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
    class Monstro extends Obj{
        dir_x = 0
        dir_y = 0
        pts = 0
        vida = 3

    mov(){
        this.x += this.dir_x
        this.y += this.dir_y
        if(this.x <= 0){
            this.x =0
        }else if(this.x >=450){
            this.x = 450
        }
        if(this.y <= 0){
            this.y =0
        }else if(this.y >=600){
            this.y = 600
        }
    }

    anim(nome){
        this.tempo += 1
        if(this.tempo > 12 ){
            this.tempo = 0
            this.frame += 1
        }
        if(this.frame > 4 ){
            this.frame = 1
    }
    this.a = "assets/img/" +nome+this.frame+".jpg"
    }
}
class Lixo extends Obj{
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
class Texto{
    des_text(texto,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(texto,x,y)
    }
}

