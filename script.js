document.addEventListener("DOMContentLoaded", function(){

particlesJS("particles-js", {
particles:{
number:{value:50},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});

// typing
const roles=["AI Engineer","Backend Developer","ML Developer"];
let i=0,j=0,isDeleting=false;
const typing=document.querySelector(".typing");

function type(){
let word=roles[i];
j=isDeleting?j-1:j+1;
typing.innerHTML=word.substring(0,j);

if(!isDeleting && j===word.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%roles.length;
}

setTimeout(type,isDeleting?40:80);
}
type();

// scroll reveal
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll("section").forEach(sec=>{
sec.classList.add("hidden");
observer.observe(sec);
});

// cert popup
window.openCert=function(type){
let container=document.getElementById("certContainer");
container.innerHTML="";

let images={
web:["HTML5.png","CSS3.png","JavaScript.png","PHP_and_MySQL.png"],
ml:["ML_Project.png","ml_project.jpg"],
programming:["Cpp.png","Programming_In_Java.png","Linux.png","latex.png"],
cyber:["cybersecurity.jpg"]
};

images[type].forEach(img=>{
let el=document.createElement("img");
el.src="images/certificates/"+img;
container.appendChild(el);
});

document.getElementById("certModal").style.display="block";
}

document.getElementById("closeBtn").onclick=()=>document.getElementById("certModal").style.display="none";

window.onclick=(e)=>{
if(e.target.id==="certModal"){
document.getElementById("certModal").style.display="none";
}
}

});
