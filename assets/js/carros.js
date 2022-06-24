//Lista de Carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 320];
let comprimentoCarros = 60;
let alturaCarros = 40;
let velocidadeCarros = [2, 6, 3, 4, 2.3, 5];

function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < xCarros.length; i++){
      if(passouTodaTela(xCarros[i])){
        xCarros[i] = 600; 
      }
  }
}

function passouTodaTela(xCarro){
    return xCarro < -60;
}

