class Monstro extends Obj{
    dir = 0
    pts = 0
    vida = 5

    mov(){
        this.x += this.dir
        if(this.x <= 0){
            this.x =0
        }else if(this.x >=450){
            this.x = 450
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



class Texto{
    des_text(texto,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(texto,x,y)
    }
}

