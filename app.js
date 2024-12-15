let more1=document.getElementById("more1");
let more2=document.getElementById("more2");
let more3=document.getElementById("more3");
let more4=document.getElementById("more4");
let hidden1=document.getElementById("hidden1");
let hidden2=document.getElementById("hidden2");
let hidden3=document.getElementById("hidden3");
let hidden4=document.getElementById("hidden4");

more1.onclick=()=>{
    if(hidden1.style.display==="none"){
        hidden1.style.display="inline";
        more1.textContent="Read Less";
    }
    else{
        hidden1.style.display="none";
        more1.textContent="Read More";
    }
}

more2.onclick=()=>{
    if(hidden2.style.display==="none"){
        hidden2.style.display="inline";
        more2.textContent="Read Less";
    }
    else{
        hidden2.style.display="none";
        more2.textContent="Read More";
    }
}

more3.onclick=()=>{
    if(hidden3.style.display==="none"){
        hidden3.style.display="inline";
        more3.textContent="Read Less";
    }
    else{
        hidden3.style.display="none";
        more3.textContent="Read More";
    }
}

more4.onclick=()=>{
    if(hidden4.style.display==="none"){
        hidden4.style.display="inline";
        more4.textContent="Read Less";
    }
    else{
        hidden4.style.display="none";
        more4.textContent="Read More";
    }
}