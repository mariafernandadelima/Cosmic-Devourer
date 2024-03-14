let des = document.getElementById('des').getContext('2d')

let BG1 = new BG(0,0,500,700,'./assets/img/fundo.jpg')
let BG2 = new BG(0,-700,500,700,'./assets/img/fundo2.jpg')
let BG3 = new BG(0,-1400,500,700,'./assets/img/fundo.jpg')
let BG4 = new BG(0,-2100,500,700,'./assets/img/fundo2.jpg')
let monstro = new Monstro(200,620,50,70,'./assets/img/monstro.png')
let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
const som1 = new Audio('./assets/audio/musica-tema.mp3')
const som2 = new Audio('')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7

let jogar = true

let lixo_espacial = []
let lixo = {
    time1: 0,
    time2: 0,
    time3: 0,
    time4: 0,
    bomba:0,

    crialixo(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        this.time4 += 1
        this.bomba += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2)
        let pos_x2 = (Math.random() * (438 - 2 +1)+2)
        let pos_x3 = (Math.random() * (438 - 2 +1)+2)
        let pos_x4 = (Math.random() * (438 - 2 +1)+2)
        let bomba = (Math.random() * (438 - 2 +1)+2)
        if(this.time1 >=60){
            this.time1 = 0
            lixo_espacial.push(new Lixo(pos_x,-200,50,50,'./assets/img/lixo.png'))
            console.log(lixo_espacial)
        }
        if(this.time2 >=85){
            this.time2 = 0
            lixo_espacial.push(new Lixo(pos_x2,-300,50,50,'./assets/img/banana.png'))
            console.log(lixo_espacial)
        }
        if(this.time3 >=135){
            this.time3 = 0
            lixo_espacial.push(new Lixo(pos_x3,-400,50,50,'./assets/img/peixe.png'))
            console.log(lixo_espacial)
        }
        if(this.time4 >=135){
            this.time4 = 0
            lixo_espacial.push(new Lixo(pos_x4,-500,50,50,'./assets/img/maca.png'))
            console.log(lixo_espacial)
        }
        if(this.bomba >=135){
            this.bomba = 0
            lixo_espacial.push(new Lixo(bomba,-500,50,50,'./assets/img/bomba.png'))
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
document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'ArrowLeft'){
        monstro.dir -=5
    }
    if(ev.key === 'ArrowRight'){
        monstro.dir +=5
    }   
})

document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'ArrowLeft'){
       monstro.dir = 0
    }
    if(ev.key === 'ArrowRight'){
       monstro.dir = 0
    }
})


function game_over(){
    if(monstro.vida <=0){
        jogar = false
        som1.pause()
        // música com o jogo parado
    }
}

function pontos(){
    if(monstro.point(bomba)){
        monstro.pts +=1
    }
}
function colisao(){
    lixo_espacial.forEach((lixo)=>{
        if(monstro.colid(lixo)){
            lixo_espacial.splice(lixo_espacial.indexOf(lixo), 1)
            monstro.vida -=1
        }
    })
}

function desenha(){   
    BG1.des_obj()
    BG2.des_obj()
    BG3.des_obj()
    BG4.des_obj()    
    monstro.des_obj()    
    lixo.des()
    txt_pts.des_text('Pontos:',20,40,'white','30px Times')
    pts.des_text(monstro.pts,120,40,'white','30px Times')
    txt_vidas.des_text('Vidas:',380,40,'white','30px Times')
    n_vidas.des_text(monstro.vida,460,40,'white','30px Times')
      
    }


function atualiza(){
    som1.play()
    BG1.mov(0,2100)
    BG2.mov(-700,1400)
    BG3.mov(-1400,700)
    BG4.mov(-2100,0)    
    monstro.mov()
    lixo.atual()
    colisao() 
}   


function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()
