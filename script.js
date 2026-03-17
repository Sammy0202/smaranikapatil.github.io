// TYPING EFFECT
const roles = ["AI Engineer","Machine Learning Developer","Web Developer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){
current = roles[i];

if(!isDeleting){
document.querySelector(".typing").innerHTML = current.substring(0,j++);
if(j > current.length){
isDeleting = true;
setTimeout(type,1000);
return;
}
}else{
document.querySelector(".typing").innerHTML = current.substring(0,j--);
if(j == 0){
isDeleting = false;
i = (i+1) % roles.length;
}
}

setTimeout(type, isDeleting ? 50 : 100);
}

type();


// PARTICLES FIXED (LOW OPACITY)
particlesJS("particles-js",{
particles:{
number:{value:70},
color:{value:"#38bdf8"},
opacity:{value:0.2},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.2,
width:1
},
move:{speed:2}
}
});


// CERTIFICATE POPUP
function openCert(type){

let html="";

if(type==="ml"){
html=`<img src="images/certificates/ml_flask.jpg">`;
}

if(type==="web"){
html=`<img src="images/certificates/html.jpg">`;
}

if(type==="security"){
html=`<img src="images/certificates/cybersecurity.jpg">`;
}

if(type==="java"){
html=`<img src="images/certificates/java.jpg">`;
}

document.getElementById("certContainer").innerHTML = html;
document.getElementById("certModal").style.display = "block";

}

function closeCert(){
document.getElementById("certModal").style.display = "none";
}
