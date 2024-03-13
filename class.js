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
}
class Monstro extends Obj{
    dir = 0
    pts = 0
    vida = 5
    frame = 1
    tempo = 0

    anim(img_01){
        this.tempo += 1
        if(this.tempo > 12 ){
            this.tempo = 0
            this.frame += 1
        }
        if(this.frame > 4 ){
            this.frame = 1
    }
    this.a = "/assets/img" +img_01+this.frame+".png"


    }

    des_monstro(){
        

        // roda dianteira esquerda
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x+40, this.y-60,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // roda dianteira direita
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x, this.y-60,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // roda traseira esquerda
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x+40, this.y-20,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // roda traseira direita
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'orange'
        des.fillStyle = 'darkorange'
        des.rect(this.x, this.y-20,10,10)
        des.closePath()
        des.stroke()
        des.fill()

        // trapezio do carro
        des.beginPath()
        des.moveTo(this.x,this.y) // coordenadas x,y
        des.lineTo(this.x+50, this.y)
        des.lineTo(this.x+40,this.y-50)
        des.lineTo(this.x+10,this.y-50)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.stroke()
        des.fill()

        // desenhando corpo frente em um retângulo
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.rect(this.x+10,this.y-70,30,20)
        des.closePath()
        des.stroke()
        des.fill()

        // desenhado a asa frontal em um retângulo
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.rect(this.x,this.y-80,50,10)
        des.closePath()
        des.stroke()
        des.fill()

    }

}
    
