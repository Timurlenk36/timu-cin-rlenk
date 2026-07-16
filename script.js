function checkPassword(){

const pass=document.getElementById("password").value;

if(pass==="ingredimini"){

document.getElementById("login").style.display="none";
document.getElementById("main").style.display="block";

const music=document.getElementById("music");

if(music){
music.play().catch(()=>{});
}

}else{

alert("ACCESS DENIED");

}

}