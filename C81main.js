canvas = document.getElementById("myCanvas");
color="red";
mouse_x = e.clientX;
mouse_y = e.clientY;

//Workable Code
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
//taking color from input box
//additional activity start

color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
//addition activity ends
mouseEvent = "mouseDown";

mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

console.log("X = "+ mouse_x + "Y = "+ mouse_y);
circle(mouse_x , mouse_y);

}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup" , mymouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;


     console.log("Last position of x and y coordinates = ");
     console.log("x = " + Last_position_of_x) + "y = "+ Last_position_of_y;
     ctx.moveTo(current_position_of_mouse_x, current_position_of_mouse_y);
      ctx.stroke();
    }
  
    Last_position_of_x = current_position_of_mouse_x
    Last_position_of_y = current_position_of_mouse_y




}

var width = screen.width;
new width = screen.width - 70;
new_height = screen.height - 300;
 
if(width < 992) 
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height
    document.body.style.overflow = "hidden";
}

function my_touchstart(e)
{
    console.log("my_touchstart");

    Last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    Last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

function my_touchmove(e)
{

    console.log("my_touchMove");
    current_position_of_mouse_x = e.touches[0].clientX - client.offsetLeft
    current_position_of_mouse_y = e.touches[0].clientY - client.offsetTop

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates =");
    console.log.("x =" + Last_position_of_x + "y =" + Last_position_of_y);
    ctx.moveTo(Last_position_of_x, Last_position_of_y);
    ctx.stroke();



    Last_position_of_x = current_position_of_mouse_x;
    Last_position_of_y = current_position_of_mouse_y;
    
}