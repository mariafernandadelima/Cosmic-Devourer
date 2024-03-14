let des = document.getElementById('des').getContext('2d')

let BG1 = new BG(0,0,500,700,'assets/background.jpg')
let BG2 = new BG(0,-700,500,700,'assets/background2.jpg')
let BG3 = new BG(0,-1400,500,700,'assets/background.jpg')
let BG4 = new BG(0,-2100,500,700,'assets/background2.jpg')
let monstro = new Monstro(200,620,50,70,'assets/nave.png')
let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
const som1 = new Audio('assets/nave_som.mp3')
const som2 = new Audio('assets/batida.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7

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
function colisao(){
    grupoDiscos.forEach((lixo)=>{
        if(monstro.colid(lixo)){
            lixo_espacial.splice(lixo_espacial.indexOf(lixo), 1)
            monstro.vida -=1
        }
    })
}

function atualiza(){
    BG1.mov(0,2100)
    BG2.mov(-700,1400)
    BG3.mov(-1400,700)
    BG4.mov(-2100,0)    
    Monstro.mov()
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

