let des = document.getElementById('des').getContext('2d')

let inim1 = new BG(0,0,500,700,'assets/background.jpg')
let inim2 = new BG(0,-700,500,700,'assets/background2.jpg')
let inim3 = new BG(0,-1400,500,700,'assets/background.jpg')
let inim4 = new BG(0,-2100,500,700,'assets/background2.jpg')
let monstro = new Nave(200,620,50,70,'assets/nave.png')
let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
const som1 = new Audio('assets/nave_som.mp3')
const som2 = new Audio('assets/batida.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7