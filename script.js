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
