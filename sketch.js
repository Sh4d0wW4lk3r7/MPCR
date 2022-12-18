var s,db

function setup() {
  createCanvas(600, 600);
  s = createSprite(300, 300);
  db=firebase.database()
}

function draw() {
  background("turquoise");
  if (keyDown("up")) {
    move((x = 0), (y = -3));
  }
  if (keyDown("down")) {
    move((x = 0), (y = 3));
  }
  if (keyDown("left")) {
    move((x = -3), (y = 0));
  }
  if (keyDown("right")) {
    move((x = 3), (y = 0));
  }
  drawSprites();
}

function move(x, y) {
  s.x += x;
  s.y += y;
}
