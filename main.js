
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object ="";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function (Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together"); 
        block_image_width = block_image_width + 10; 
        block_image_height = block_image_height + 10; 
        document.getElementById("current_width").innerHTML = block_image_width; 
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift pressed together"); 
        block_image_width = block_image_width - 10; 
        block_image_height = block_image_height - 10; 
        document.getElementById("current_width").innerHTML = block_image_width; 
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38') 
    { up(); 
      console.log("up"); 
    }
    if(keyPressed == '40') 
    { down(); 
      console.log("down"); 
    }
    if(keyPressed == '37') 
    { left(); 
      console.log("left"); 
    }
    if(keyPressed == '39') 
    { right(); 
      console.log("right"); 
    }
    if(keyPressed == '87') 
    { new_image("wall.jpg")
      console.log("w"); 
    }
    if(keyPressed == '71') 
    { new_image("grass.png")
      console.log("g"); 
    }
    if(keyPressed == '76') 
    { new_image("light_green.png")
      console.log("l"); 
    }
    if(keyPressed == '82') 
    { new_image("roof.jpg")
      console.log("r"); 
    }
    if(keyPressed == '67') 
    { new_image("cloud.png")
      console.log("c"); 
    }
    if(keyPressed == '68') 
    { new_image("dark_green.png")
      console.log("d"); 
    }
    if(keyPressed == '67') 
    { new_image("cloud.png")
      console.log("c"); 
    }
    if(keyPressed == '84') 
    { new_image("wood.jpg")
      console.log("t"); 
    }
    if(keyPressed == '85') 
    { new_image("unique.png")
      console.log("u"); 
    }
    if(keyPressed == '89') 
    { new_image("yellow_wall.png")
      console.log("y"); 
    }
    if(keyPressed == '73') 
    { new_image("iron_wall.png")
      console.log("i"); 
    }
    if(keyPressed == '83') 
    { new_image("stone.jpg")
      console.log("s"); 
    }
    if(keyPressed == '66') 
    { new_image("black_wall.png")
      console.log("b"); 
    }
    if(keyPressed == '78') 
    { new_image("netherite_block.png")
      console.log("n"); 
    }
    if(keyPressed == '81') 
    { new_image("door.png")
      console.log("q"); 
    }
    if(keyPressed == '90') 
    { new_image("zombie.png")
      console.log("z"); 
    }
    if(keyPressed == '70') 
    { new_image("steve.jpg")
      console.log("f"); 
    }
    if(keyPressed == '65') 
    { new_image("diamond_ore.png")
      console.log("a"); 
    }
}

function up()
{
  if(player_y >= 0)
  {
    player_y = player_y - block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("when up arrow key is pressed, x" + player_x + "  , y " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function down()
{
  if(player_y <= 900)
  {
    player_y = player_y + block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("when down arrow key is pressed, x" + player_x + "  , y " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function left()
{
  if(player_x > 0)
  {
    player_x = player_x - block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("when left arrow key is pressed, x" + player_x + "  , y " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function right()
{
  if(player_x <= 950)
  {
    player_x = player_x + block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("when right arrow key is pressed, x" + player_x + "  , y " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}

function Q()
{
  new_image("door.png")
  console.log("q");
}

function W()
{
  new_image("wall.jpg")
  console.log("w");
}

function R()
{
  new_image("roof.jpg")
  console.log("r");
}

function T()
{
  new_image("wood.jpg")
  console.log("t");
}

function Y()
{
  new_image("yellow_wall.png")
  console.log("y");
}

function U()
{
  new_image("unique.png")
  console.log("u");
}

function I()
{
  new_image("iron_wall.png")
  console.log("i");
}

function A()
{
  new_image("diamond_ore.png")
  console.log("a");
}

function S()
{
  new_image("stone.jpg")
  console.log("s");
}

function D()
{
  new_image("dark_green.png")
  console.log("d");
}

function F()
{
  new_image("steve.jpg")
  console.log("f");
}

function G()
{
  new_image("grass.png")
  console.log("g");
}

function L()
{
  new_image("light_green.png")
  console.log("l");
}

function Z()
{
  new_image("zombie.png")
  console.log("z");
}

function C()
{
  new_image("cloud.png")
  console.log("c");
}

function B()
{
  new_image("black_wall.png")
  console.log("q");
}


function N()
{
  new_image("netherite_block.png")
  console.log("n");
}

function sUp()
{
  console.log("p and shift pressed together"); 
  block_image_width = block_image_width + 10; 
  block_image_height = block_image_height + 10; 
  document.getElementById("current_width").innerHTML = block_image_width; 
  document.getElementById("current_height").innerHTML = block_image_height;
}

function sDown()
{
  console.log("m and shift pressed together"); 
        block_image_width = block_image_width - 10; 
        block_image_height = block_image_height - 10; 
        document.getElementById("current_width").innerHTML = block_image_width; 
        document.getElementById("current_height").innerHTML = block_image_height;
}