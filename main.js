function preload(){

}
function setup(){
    canvas=createCanvas(600,600);
    canvas.position(725,300);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,0,0,600,600)
    tint(tint_color);
}

function apply_filter(){
    tint_color=document.getElementById("color").value;
    

}
function save(){
    save("filteredimg.png");
}