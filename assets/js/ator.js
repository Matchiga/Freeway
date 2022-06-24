let xAtor = 100;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(verificaLimite()){
    yAtor += 3;
    }
  }  
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
  if(colisao){
   voltaAtorParaPosicaoInicial(colisao);
    somColisao.play()
    if(verificaPontosMenorQueZero()){
          meusPontos -= 1;
      }
    }
  }
}
  
function voltaAtorParaPosicaoInicial(colisao){
  yAtor = 370;
}

function incluirPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial(colisao);
    somPontos.play();
  }
  text(meusPontos, 400, 27);
  fill(color(0))
  textSize(20);
}

function verificaPontosMenorQueZero(){
  return meusPontos > 0;
}

function verificaLimite(){
  return yAtor < 370;
}