let des = document.getElementById('des').getContext('2d')

let BG1 = new BG(0,0,500,700,'assets/background.jpg')
let BG2 = new BG(0,-700,500,700,'assets/background2.jpg')
let BG3 = new BG(0,-1400,500,700,'assets/background.jpg')
let BG4 = new BG(0,-2100,500,700,'assets/background2.jpg')
let monstro = new Monstro(200,620,50,70,'assets/img/monstro')
let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
const som1 = new Audio('assets/audio/musica-tema.aiff')
const som2 = new Audio('assets/audio/game-over.wav')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7