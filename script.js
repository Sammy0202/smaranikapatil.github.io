// ================= TYPING EFFECT =================

const roles = [
"Robotics Trainer",
"AI Engineer",
"Machine Learning Developer",
"Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeEffect(){

if(charIndex < roles[roleIndex].length){

typingElement.textContent += roles[roleIndex].charAt(charIndex);
charIndex++;

setTimeout(typeEffect,80);

}else{
setTimeout(eraseEffect,1500);
}

}

function eraseEffect(){

if(charIndex > 0){

typingElement.textContent = roles[roleIndex].substring(0,charIndex-1);
charIndex--;

setTimeout(eraseEffect,40);

}else{

roleIndex++;
if(roleIndex >= roles.length) roleIndex = 0;

setTimeout(typeEffect,300);

}

}

typeEffect();


// ================= PARTICLES (FIXED) =================

particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#38bdf8" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
line_linked: {
enable: true,
distance: 150,
color: "#38bdf8",
opacity: 0.4,
width: 1
},
move: {
enable: true,
speed: 2
}
},
interactivity: {
events: {
onhover: { enable: true, mode: "grab" },
onclick: { enable: true, mode: "push" }
},
modes: {
grab: {
distance: 200,
line_linked: { opacity: 1 }
}
}
}
});


// ================= SCROLL ANIMATION =================

ScrollReveal().reveal('.hero',{delay:200,distance:'60px',origin:'bottom'});
ScrollReveal().reveal('section',{delay:300,distance:'40px',origin:'bottom'});
ScrollReveal().reveal('.project-card',{interval:200});


// ================= CERTIFICATE POPUP =================

function openCert(type){

let html="";

if(type==="ml"){
html=`
<img src="images/certificates/ml_flask.jpg">
<img src="images/certificates/ml_project.jpg">
`;
}

if(type==="web"){
html=`
<img src="images/certificates/bootstrap.jpg">
<img src="images/certificates/html.jpg">
<img src="images/certificates/css.jpg">
`;
}

if(type==="security"){
html=`
<img src="images/certificates/cybersecurity.jpg">
`;
}

if(type==="java"){
html=`
<img src="images/certificates/java.jpg">
`;
}

document.getElementById("certContainer").innerHTML = html;
document.getElementById("certModal").style.display = "block";

}

function closeCert(){
document.getElementById("certModal").style.display = "none";
}
