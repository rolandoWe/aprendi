
// -------------------MENU SCROLL-------------------//
// Mostrar y ocultar menu de navegacion al hacer scroll

window.addEventListener("scroll",function(){
    posicion()
})
let p_top=window.pageYOffset;

function posicion(){
    let p_actual=window.pageYOffset;
    if(p_top>p_actual){
        document.querySelector(".main").style.top="0"
    }else{
        document.querySelector(".main").style.top="-200px"

    }
    p_top=p_actual
}

// let menu=document.querySelector(".menu").addEventListener("click",function(){
//     document.querySelector(".nav_ul").classList.toggle("mostrar_nav")
// })
// let cerrar_nav=document.querySelector(".cerrar_nav").addEventListener("click",function(){
//     document.querySelector(".nav_ul").classList.toggle("mostrar_nav")
// })
// Mostrar y ocultar menu en pantallas moviles
let menu=document.querySelector(".menu");
let cerrar_nav=document.querySelector(".cerrar_nav");

// let cerrar_=document.querySelector(".nav>ul>li ");
// let cerrar_ul=document.querySelector(".nav_ul");

menu.addEventListener("click",function(){
    document.querySelector(".nav_ul").classList.toggle("mostrar_nav");
    menu.style.display="none"
})
cerrar_nav.addEventListener("click",function() {
    document.querySelector(".nav_ul").classList.toggle("mostrar_nav");
        menu.style.display="block"
})
    

    

// ********************************* BANNER **************************************//
// Juego con los textos del banner 

let i=0;
function banner(){
 i++;
    if(i>20){
        i=0;
    }
    if(i>=5&&i<=10){
        document.querySelector(".pa_uno").style.display="none";
        document.querySelector(".pa_dos").style.display="block";
    }else if(i>10&&i<=15){
        document.querySelector(".pa_tres").style.display="block"
        document.querySelector(".pa_dos").style.display="none"
        document.querySelector(".pa_uno").style.display="none"
    }else{
        document.querySelector(".pa_uno").style.display="block";
        document.querySelector(".pa_tres").style.display="none"
    }
}
banner();
setInterval(banner,1000);

// ********************************************** IMAGENES ****************************** //
// Mostrar Imágenes Lightbox
let imagen=document.querySelectorAll(".fot");
let light_img=document.querySelector(".ver");

let cont_light=document.querySelector(".contenedor_light");
let cerrar_light=document.querySelector(".cerrar_light");

function light(mos){
    light_img.src=mos;

}

imagen.forEach(function(e){
e.addEventListener("click",function(){
    cont_light.classList.toggle("mostrar_light")

    light(e.getAttribute("src"))
})
})

cerrar_light.addEventListener("click",function(m){
if(m.target===cerrar_light){
    cont_light.classList.toggle("mostrar_light")

}
})

