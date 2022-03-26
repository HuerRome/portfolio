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
let tittle=document.querySelector(".container > .introduction > div:first-child");
//let boton=document.querySelector(".container > .introduction > div:first-child div");
window.addEventListener("load",()=>{
    tittle.style.marginTop= "9vh";
    tittle.style.opacity="1";
})

//menu scroll
//menu scroll
let menu= document.querySelector(".links");
window.addEventListener("scroll",() => {
  menu.classList.toggle("up", window.scrollY>0)
})

let menu1= document.querySelector(".links-cel");
window.addEventListener("scroll",() => {
  menu1.classList.toggle("up", window.scrollY>0)
})

/*let menu2= document.querySelector(".links-cel");
let ubicacionPrincipal2 = window.pageYOffset;
window.onscroll = function(){
  let Desplazamiento_Actual = window.pageYOffset;

  ubicacionPrincipal2 >= Desplazamiento_Actual ? menu2.style.top = '0' : menu2.style.top = '-79px';
}*/

/*--------------------*/
console.log(window.innerWidth);
console.log(window.innerHeight)