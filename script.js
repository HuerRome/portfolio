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

//-----------------Menu-----------------
// Get the container element
var btnContainer = document.querySelector(".menu-active");  
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");       
// Loop through the buttons and add the active class to the current/clicked button

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//-----------------Menu-----------------
// Get the container element
var btnContainer = document.querySelector(".menu-active1");  
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn1");       
// Loop through the buttons and add the active class to the current/clicked button

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

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

let menu1= document.querySelector(".links-cel");
window.addEventListener("scroll",() => {
  menu1.classList.toggle("up", window.scrollY>0)
})

//------------------go top button----------------------
//Get the button:
mybutton = document.getElementById("gotop");

// When the user scrolls down 20px from the top of the document, show the button
/*window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 150) {
    mybutton.classList.add('active');
  } else {
    mybutton.classList.remove("active");
  }
}*/

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click",topFunction)


/*---------------------------div scroll effect---------------------------- */
const text = document.querySelector(".text");
const imgClass = document.querySelector(".img img");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;


    const boxTop = text.getBoundingClientRect().top;
    const imgTop = imgClass.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      text.classList.add("show");
      imgClass.classList.add("show");
    } else {
      text.classList.remove("show");
      imgClass.classList.remove("show");
    }
}


/*---------Day-Night button-----------*/
let daynight1= document.querySelector(".day-night-1");
let daynight2= document.querySelector(".day-night-2");

let cuerpo = document.querySelector("body");

function change(){
  cuerpo.classList.toggle("change");
}
daynight1.addEventListener('click', () => {
  change();
});
daynight2.addEventListener('click', () => {
  change();
});

//scroll effect
window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }

      }
});


//-------------scrool nav effect--------------
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".links .menu-active > a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("activee");
    if (li.classList.contains(current)) {
      li.classList.add("activee");
    }
  });
};