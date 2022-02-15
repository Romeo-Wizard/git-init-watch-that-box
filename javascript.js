document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "25px";});

document.getElementById("button2").addEventListener("click", function(){ 
    var mybox = document.getElementById("box").style.backgroundColor = "blue";});
        
document.getElementById("button3").addEventListener("click", function(){
    var mybox = document.getElementById("box").style.opacity = "0";
    var mybox = document.getElementById("box").style.transition = "2s";
    var mybox = document.getElementById("box").style.height = "150px";});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style ="height:150px; width:150px; backgroundColor:orange; margin:25px";
    var mybox = document.getElementById("box").style.backgroundColor = "orange";
    var mybox = document.getElementById("box").style.opacity = "1";
    mybox = document.getElementById("box").style.color = "orange";});

document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").innerHTML = Date();});

