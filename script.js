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
    //boton.style.opacity="1";
})



/*--------------------*/
console.log(window.innerWidth);
console.log(window.innerHeight)