/* ============================= */
/* SCROLL ANIMATION FOR PROJECTS */
/* ============================= */

const projectCards = document.querySelectorAll(".project-card");

/* initial state */
projectCards.forEach(card=>{
card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.6s ease";
});

window.addEventListener("scroll",function(){

projectCards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});


/* ================= */
/* TYPING ANIMATION  */
/* ================= */

const text = "Data Analyst | DSA Learner | AI Full Stack Developer";

let index = 0;

function typing(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typing,50);

}

}

typing();


/* ================= */
/* BACK TO TOP BUTTON */
/* ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",function(){

if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

function scrollToTop(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}