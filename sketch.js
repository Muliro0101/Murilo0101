//Verifica colisão com a raquete
function VerificaColisãoRaquete(){
  if (xBolinha - diametro/2 < xRaquete + RaqueteComprimento
     && yBolinha - diametro/2 < yRaquete + RaqueteAltura
     && yBolinha + diametro/2 > yRaquete) {
    velocidadeXBolinha *= -1;
  }
if (xBolinha - diametro/2 < xRaquete2 + RaqueteComprimento2
     && yBolinha - diametro/2 < yRaquete2 + RaqueteAltura2
     && yBolinha + diametro/2 > yRaquete2){
  velocidadeXBolinha *= -1;
}
}
//Variável da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//Variável da raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
let xRaquete2 = 585;
let yRaquete2 = 150;
let RaqueteComprimento2 = 10;
let RaqueteAltura2 = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Bola();
  CriaçãoRaquete ();
  VerificaBorda ();

function CriaçãoRaquete (){
  rect (xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
  rect (xRaquete2, yRaquete2, RaqueteComprimento2, RaqueteAltura2);
}  
  
  
  
}
function Bola (){
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function VerificaBorda (){
  if (xBolinha+diametro > width || xBolinha-diametro < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha+diametro > height || yBolinha-diametro < 0) {
        velocidadeYBolinha *= -1;
    }
}
