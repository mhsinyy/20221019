function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); 
  stroke(255) //框限顏色
  noFill(); //不要充滿顏色
  rectMode(CENTER) //以方框中心點為座標點

  for(var j=0;j<(height/50);j++){
    for(var i=0;i<(width/50);i=i+1) //i++ ==>i=i+1
  {
    ellipse(50+(i*200),50+(j*100),50+mouseX/10) //在座標(25,25)畫一個直徑50的圓
    rect(30+(i*200),30+(j*100),30) //方框座標
    ellipse(100+(i*200),100+(j*100),50+mouseY/5)
  }
 }
}
 