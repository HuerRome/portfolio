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
let carta1=document.querySelector(".code > div:first-child");
let carta2=document.querySelector(".code > div:last-child");

window.addEventListener("load",()=>{
    tittle.classList.add('active');
    tittle2.classList.add('active');
    div.classList.add('active');
    div2.classList.add('active');
    carta1.classList.add('active');
    carta2.classList.add('active');
})

//menu scroll
let menu= document.querySelector(".links");
window.addEventListener("scroll",() => {
  menu.classList.toggle("up", window.scrollY>0)
})

let menu1= document.querySelector(".smartphone");
window.addEventListener("scroll",() => {
  menu1.classList.toggle("go-up", window.scrollY>0)
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

/*------------------------------sunny button------------------------------*/
let daynight= document.querySelector(".day-night");
let navbar = document.querySelector(".links");

let cuerpo = document.querySelector("body");
daynight.addEventListener('click', () => {
  cuerpo.classList.toggle("change");
  navbar.classList.toggle("change");
});

/*---------------------------div scroll effect---------------------------- */
const text = document.querySelector(".text");
const imgClass = document.querySelector(".img img");
const text1 = document.querySelector(".contact > h1:first-child");
const text2 = document.querySelector(".projects .delete1");
const text22 = document.querySelector(".projects .delete2");
const text3 = document.querySelector(".slider .delete1");
const text32 = document.querySelector(".slider .delete2");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;


    const boxTop = text.getBoundingClientRect().top;
    const imgTop = imgClass.getBoundingClientRect().top;
    const text1_top = text1.getBoundingClientRect().top;
    const text2_top = text2.getBoundingClientRect().top;
    const text22_top = text22.getBoundingClientRect().top;
    const text3_top = text3.getBoundingClientRect().top;
    const text32_top = text32.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      text.classList.add("show");
      imgClass.classList.add("show");

    } else {
      text.classList.remove("show");
      imgClass.classList.remove("show");

    }
}


/*--------------------*/
console.log(window.innerWidth);
console.log(window.innerHeight)