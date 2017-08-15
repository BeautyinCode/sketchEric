var img;

function preload() {
  img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsmZdSP3bJ-rRSzSNmU3HU1w6PNFxbfE-Ge-NOYGj_YkwOZUAyLw");
  //img = loadImage("https://pbs.twimg.com/profile_images/804826073267654656/P1lCAGC3_400x400.jpg");
}
// camera https://pbs.twimg.com/profile_images/804826073267654656/P1lCAGC3_400x400.jpg

function setup() {
  createCanvas(img.width, img.height);
  background(0);
}

function draw() {

  for (i = 0; i < 25; i ++) {
    var x = random(width);
    var y = random(height);

    var z = img.get(x,y);
    var c = color(z);
    fill(c);
    noStroke();
    ellipse(x,y,6,6);
  }
}
