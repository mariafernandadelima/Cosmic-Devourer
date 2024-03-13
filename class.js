class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h,this.a)
    }

    des_img(){
        let img = new Image()
        img.src = this.a 
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }


    atual_monstro(){
        this.x += this.comand
        if(this.x <=2){
            this.x = 2
        }else if(this.x >= 416){
            this.x = 416
        }
    }
    point(objeto){
        if((objeto.y>=680)&&(objeto.y <= 684)){
            return true
        }else{
            false
        }
    }


    atual_inimigo(){
        this.y += 2
        if(this.y >= 780){
            this.recomeca()
        }
    }
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2)) // quando o inimigo sair da tela
    }
    mov_amb(){
        this.y += 2
        if(this.y >= 780){
            this.y = -100
        }
    }
}


