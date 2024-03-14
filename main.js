let lixo_espacial = []
let lixo = {
    time1: 0,
    time2: 0,
    time3: 0,

    crialixo(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2)
        let pos_x2 = (Math.random() * (438 - 2 +1)+2)
        let pos_x3 = (Math.random() * (438 - 2 +1)+2)
        if(this.time1 >=60){
            this.time1 = 0
            lixo_espacial.push(new lixo(pos_x,-200,50,50,'assets/disco.png'))
            console.log(lixo_espacial)
        }
        if(this.time2 >=85){
            this.time2 = 0
            lixo_espacial.push(new lixo(pos_x2,-300,50,50,'assets/disco2.png'))
            console.log(lixo_espacial)
        }
        if(this.time3 >=135){
            this.time3 = 0
            lixo_espacial.push(new lixo(pos_x3,-400,50,50,'assets/disco3.png'))
            console.log(lixo_espacial)
        }
    },
    des(){
        lixo_espacial.forEach((lixo)=>{
            lixo.des_obj()
        })
    },
    
    atual(){
        this.crialixo()
        lixo_espacial.forEach((lixo)=>{
            lixo.mov()
            if(lixo.y >= 710){
                lixo_espacial.splice(lixo_espacial.indexOf(lixo),1)
            }
        })
    }
}
function desenha(){    
    BG1.des_obj()
    BG2.des_obj()
    BG3.des_obj()
    BG4.des_obj()    
    Monstro.des_obj()    
    lixo.des()
    txt_pts.des_text('Pontos:',20,40,'white','30px Times')
    pts.des_text(Monstro.pts,120,40,'white','30px Times')
    txt_vidas.des_text('Vidas:',380,40,'white','30px Times')
    n_vidas.des_text(Monstro.vida,460,40,'white','30px Times')
}