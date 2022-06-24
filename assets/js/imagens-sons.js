let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somPontos;
let somColisao;

function preload(){
  imagemEstrada = loadImage("../img/estrada.png");
  imagemAtor = loadImage("../img/ator-1.png");
  imagemCarro = loadImage("../img/carro-1.png");
  imagemCarro2 = loadImage("../img/carro-2.png");
  imagemCarro3 = loadImage("../img/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somColisao = loadSound("../Sons/colidiu.mp3");
  somTrilha = loadSound("../Sons/trilha.mp3");
  somPontos = loadSound("../Sons/pontos.wav");
}
