//navigation
const currentLocation= location.href;
const menuItem= document.querySelectorAll(".a");
const menuLength= menuItem.length;
for(let i=0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className="active";
    }
}

//menu scroll
let menu= document.querySelector("nav");
window.addEventListener("scroll",() => {
  menu.classList.toggle("up", window.scrollY>50)
})

//menus desplegables
let menudes=document.querySelector(".menudespegable");
let button= document.querySelector(".movil > img");

button.addEventListener('click',()=>{
    menudes.classList.toggle("active");
    
})

//categorias
let categoria=document.querySelector(".listaCategorias");
let boton=document.querySelector(".categorias");
boton.addEventListener("click",() => {
  categoria.classList.toggle("active");
})

//carrusel de imagenes
let re=document.querySelector(".slidercontainer");
let boton1= document.querySelector(".left");
let boton2= document.querySelector(".right");
        
        
//I iterate the array according to the number of sections of the slider
let array=['0','-100%','-200%','-300%','-400%','-500%'];
let Contador=0;
let nya=array.length-1;
let puntos=document.querySelectorAll(".punto");

setInterval(() => {
  puntos.forEach(elemento=>{elemento.style.background='rgba(241, 243, 245,0.6)'})
  if(Contador<array.length-1){
    Contador=Contador+1;
    puntos[Contador].style.background='rgba(0,0,0,0.8)';
    re.style.marginLeft=`${array[Contador]}`;
  }else{
    Contador=0;
    puntos[Contador].style.background='#101010';
    re.style.marginLeft=`${array[Contador]}`;
  }
}, 8000);

//texto efecto
let tittle=document.querySelector("aside h1:first-child");
window.addEventListener("load",()=>{
    tittle.style.marginRight= "0";
    tittle.style.opacity="1";
})

//slider de ofertas
let oferts=document.querySelector("aside .ofertas-slider ul");
let items=document.querySelectorAll("aside .ofertas-slider ul li");
let botonRight= document.querySelector(".left");
let botonLeft= document.querySelector(".right");
let anchoVentana= window.innerWidth;
let listItem=[];
if(anchoVentana>1024){
    console.log('pantallagrande');
    let counter=0;
    for(let i=0; i<items.length-1; i++){
        listItem.push(`-${counter}vw`);
        counter=counter+18.2;
    }
}else{    
    console.log('pantallapeque');      
    let counter=0;
    for(let i=0; i<items.length-1; i++){
        listItem.push(`-${counter}px`);
        counter=counter+226;
    }
}
console.log(listItem);
let cont=0;
let result=(anchoVentana>1024)? items.length-5 : (anchoVentana<1024&& anchoVentana>900)? items.length-4 : (anchoVentana>600 && anchoVentana<900)? items.length-3 :  items.length-2;
botonRight.addEventListener("click",()=>{
    if(cont<result){
        cont=cont+1;
        oferts.style.marginLeft=listItem[cont];
    }else{
        cont=0;          
        oferts.style.marginLeft=listItem[cont];
    }
})
botonLeft.addEventListener("click",()=>{
    if(cont>0){
        cont=cont-1;
        oferts.style.marginLeft=listItem[cont];
    }else{
        cont=result;          
        oferts.style.marginLeft=listItem[cont];
    }
})

//------------------go top button----------------------
//Get the button:
mybutton = document.getElementById("gotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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

console.log(window.innerWidth);