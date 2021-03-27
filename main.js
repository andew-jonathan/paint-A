var moouseEvent="empty"
var last_position_of_x,last_position_of_y;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="black";
width_of_line=1;

canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousDown";
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canva.offsetTop;
    
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
    
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}  