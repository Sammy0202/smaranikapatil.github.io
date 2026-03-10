const text = "Robotics Trainer | AI Engineer | Web Developer";

let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
});


ScrollReveal().reveal('section',{
delay:200,
distance:'40px',
duration:1000,
origin:'bottom'
});


function openCert(type){

let html="";

if(type==="python"){
html=`<img src="images/python1.jpg">`;
}

if(type==="ml"){
html=`
<img src="images/ml1.jpg">
<img src="images/ml2.jpg">
`;
}

if(type==="web"){
html=`<img src="images/web1.jpg">`;
}

if(type==="security"){
html=`<img src="images/security1.jpg">`;
}

document.getElementById("certContainer").innerHTML=html;

document.getElementById("certModal").style.display="block";

}


function closeCert(){
document.getElementById("certModal").style.display="none";
}
