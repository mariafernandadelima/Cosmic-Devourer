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
}

