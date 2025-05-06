let arvores = []
let cidadeX

function setup(){
  createCanvas(800, 400)
cidadeX = width / 2
}

function draw(){
  background(15, 206, 255); // céu

// campo
noStroke      
fill(144,238,144)
rect(0, height / 2 , width, height / 2)

  //sol
  fill(255, 223, 0)
  ellipse(80, 80, 80)

  // cidade(predios)
  for(let i = 0; i < 2 ; i++){
    fill(100);
    rect(cidadeX + i * 40, height / 2 - 100,30 ,100)
  }

//campo (arvores)
for (let arvore of arvores){
  arvore.mostrar()
}
}
function mousePressed(){
  if (mouseY > height / 2 && mouseX < cidadeX){
    arvores.push(new Arvore(mouseX, mouseY))
  }
}
class Arvore{
  constructor(x,y){
    this.x = x
    this.y = y
    this.altura = 0;
  }
  mostrar(){
    this.altura=min(this.altura +1 , 250)
    fill(0, 0, 0)
    rect(this.x - 2, this.y - this.altura, 5, this.altura)
    fill (34, 139, 34)
    ellipse(this.x, this.y - this.altura, 20)
  }
}
