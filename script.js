var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

//menus desplegables
let menudes=document.querySelector(".menu");
let button= document.querySelector(".wrapper-menu");

button.addEventListener('click',()=>{
    menudes.classList.toggle("active");
})

//texto efecto
let tittle=document.querySelector(".container > .introduction header strong");
let tittle2=document.querySelector(".container > .introduction header small");
let div=document.querySelector(".code > div:first-child");
let div2=document.querySelector(".code > div:last-child");
window.addEventListener("load",()=>{
    tittle.classList.add('active');
    tittle2.classList.add('active');
    div.classList.add('active');
    div2.classList.add('active');
})

//menu scroll
let menu= document.querySelector(".links");
window.addEventListener("scroll",() => {
  menu.classList.toggle("up", window.scrollY>0)
})

let menu1= document.querySelector(".links-cel");
window.addEventListener("scroll",() => {
  menu1.classList.toggle("up", window.scrollY>0)
})

//------------------go top button----------------------
//Get the button:
mybutton = document.getElementById("gotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 150) {
    mybutton.classList.add('show');
  } else {
    mybutton.classList.remove("show");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click",topFunction)

/*--------------------*/
console.log(window.innerWidth);
console.log(window.innerHeight)