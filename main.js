let des = document.getElementById('des').getContext('2d')

let BG1 = new BG(0,0,500,700,'assets/background.jpg')
let BG2 = new BG(0,-700,500,700,'assets/background2.jpg')
let BG3 = new BG(0,-1400,500,700,'assets/background.jpg')
let BG4 = new BG(0,-2100,500,700,'assets/background2.jpg')

let monstro = new Monstro(200,620,50,70,'assets/nave.png')

let txt_pts = new Texto()
let txt_mos_pts = new Texto()
let txt_vidas = new Texto()
let txt_num_vidas = new Texto()

const som1 = new Audio('assets/nave_som.mp3')
const som2 = new Audio('assets/batida.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7

let jogar = true 

let grupo_bomba = []
let bomba_espacial = []
let bomba = {
    time: 0,

    criabomba(){
        this.time += 1
        let pos_x1 = (Math.random() * (438 - 2 +1)+2)
        if(this.time >=60){
            this.time = 0
            grupo_bomba.push(new Bomba(pos_x1,-200,50,50,''))
            console.log(grupo_bomba)
        }

    }
}

document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'ArrowRight'){
        nav1.dir -=5
    }
    if(ev.key === 'ArrowLeft'){
        nav1.dir +=5
    }   
})

document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'ArrowRight'){
        nav1.dir = 0
    }
    if(ev.key === 'ArrowLeft'){
        nav1.dir = 0
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
    if(monstro.point(lixo)){
        monstro.pts +=1
    }

}
function colisao(){
    lixo_espacial.forEach((lixo)=>{
        if(monstro.colid(lixo)){
            lixo_espacial.splice(lixo_espacial.indexOf(lixo), 1)
            monstro.pts +=1
        
        }
    })
}

function destroiBomba(){
    grupo_bomba.forEach((bomba)=>{
        if(monstro.colid(bomba)){
            grupo_bomba.splice(grupo_bomba.indexOf(bomba), 1)
            monstro.vida -=1
        }
    })
}

function atualiza(){
    if(jogar){
    som1.play()
    BG1.mov(0,2100)
    BG2.mov(-700,1400)
    BG3.mov(-1400,700)
    BG4.mov(-2100,0)    
    monstro.mov()
    lixo.atual()
    colisao() 
    }   
}

function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()

