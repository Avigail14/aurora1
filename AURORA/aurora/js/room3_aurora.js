function hint_room3(){
    window.alert("I have to find something that can help me out!");
}
function oldBook(){
    window.alert("just an old book. lets keep looking");
}
function books(){
    window.alert("Those are my old books! I loved them but now they are usless, if I take them tell slow me down.)");
}
function poision(){
   window.alert("Wait, this poision must have ben spilld from somewhere. Oh there is a leather bag! lets check it out");
   document.getElementById("leatherBag").style.display="block";
}
s
function showWitch(){
    document.getElementById("witch").style.display = "block";
    
}
function leather(){
    window.alert("There it is, lets have a look");
    document.getElementById("note").style.display = "block";
}

function showNextRoomButton(){
    document.getElementById("nextRoom4").style.display = "block";

}
setTimeout(showWitch(),120000);