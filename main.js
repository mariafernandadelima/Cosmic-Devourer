let des = document.getElementById('des').getContext('2d')

let BG1 = new BG(0,0,500,700,'./assets/img/fundo.png')
let BG2 = new BG(0,-700,500,700,'./assets/img/fundo2.png')
let BG3 = new BG(0,-1400,500,700,'./assets/img/fundo.png')
let BG4 = new BG(0,-2100,500,700,'./assets/img/fundo2.png') 

let monstro = new Monstro(200,600,50,70,'./assets/img/monstro_1.png')  

let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
let txt_game = new Texto()

const som1 = new Audio('./assets/audio/musica-tema.mp3')
const som2 = new Audio('./assets/audio/game-over.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7

let jogar = true

let grupo_bomba = []
let lixo_espacial = []
let bomba
let lixo = {
    time1: 0,
    time2: 0,
    time3: 0,
    time4: 0,
    time5:0,

    crialixo(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        this.time4 += 1
        this.time5 += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2)
        let pos_x2 = (Math.random() * (438 - 2 +1)+2)
        let pos_x3 = (Math.random() * (438 - 2 +1)+2)
        let pos_x4 = (Math.random() * (438 - 2 +1)+2)
        let pos_x5 = (Math.random() * (438 - 2 +1)+2)
        if(this.time1 >=100){
            this.time1 = 0
            lixo_espacial.push(new Lixo(pos_x,-200,50,50,'./assets/img/lixo.png'))
            // console.log(lixo_espacial)
        }
        if(this.time2 >=200){
            this.time2 = 0
            lixo_espacial.push(new Lixo(pos_x2,-300,50,50,'./assets/img/banana.png'))
            // console.log(lixo_espacial)
        }
        if(this.time3 >=300){
            this.time3 = 0
            lixo_espacial.push(new Lixo(pos_x3,-400,50,50,'./assets/img/peixe.png'))
            // console.log(lixo_espacial)
        }
        if(this.time4 >=400){
            this.time4 = 0
            lixo_espacial.push(new Lixo(pos_x4,-500,50,50,'./assets/img/maca.png'))
            // console.log(lixo_espacial)
        }
        if(this.time5 >=220){
            this.time5 = 0
            lixo_espacial.push(new Lixo(pos_x5,-500,50,50,'./assets/img/bomba.png'))
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
    
    som1.play()
    if(ev.key === 'ArrowLeft'){
        monstro.dir_x -=5
    }
    if(ev.key === 'ArrowRight'){
        monstro.dir_x +=5
    }
    if(ev.key === 'ArrowUp'){
        monstro.dir_y -=5
    } 
    if(ev.key === 'ArrowDown'){
        monstro.dir_y +=5
    }    
})

document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'ArrowLeft'){
       monstro.dir_x = 0
    }
    if(ev.key === 'ArrowRight'){
       monstro.dir_x = 0
    }
    if(ev.key === 'ArrowUp'){
        monstro.dir_y = 0
    } 
    if(ev.key === 'ArrowDown'){
        monstro.dir_y = 0
    }
})


function game_over(){
    if(monstro.vida <=0){
        jogar = false
        som1.pause()
        som2.play()
        // música com o jogo parado
    }
}

function pontos(){
    if(lixo_espacial.point(lixo)){
        lixo_espacial.pts +=1
    }
       
    
}
function colisao(){
    lixo_espacial.forEach((bomba)=>{
        if(monstro.colid(bomba)){
            lixo_espacial.splice(lixo_espacial.indexOf(bomba), 1)
            monstro.pts +=1
            if(bomba.at == './assets/img/bomba.png'){
                monstro.vida -= 1
            }
            if(bomba.vida == 0){jogar = false}
        }
    })
}
    
function desenha(){ 
     
    if(jogar){
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
}else{
    txt_game.des_text('Game Over', 135,360,'white', '46px Times')
}
    }

function atualiza(){
    if(jogar){
        
    BG1.mov(0,2100)
    BG2.mov(-700,1400)
    BG3.mov(-1400,700)
    BG4.mov(-2100,0) 
    // monstro.anim('monstro_')   
    monstro.mov()
    lixo.atual()
    colisao() 
    game_over()
}
}   


function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()
