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
