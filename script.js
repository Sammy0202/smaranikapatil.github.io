const text = "Backend Developer | AI Engineer | Machine Learning";

let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();


particlesJS("particles-js", {

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
