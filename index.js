// EFECTO SCROLL DEL MENU DE NAVEGACION
window.addEventListener("scroll",function(){
    scroll()
})
let positionTop=window.pageYOffset;

function scroll(){
    let positionActual=window.pageYOffset;

    if(positionTop>positionActual){
        document.querySelector(".main").style.top="0";
    }else{
        document.querySelector(".main").style.top="-200px";
    }
    positionTop=positionActual
}

// MOSTRAR OCULTAR MENU UL

let menu=document.querySelector(".menu");
let cerrar=document.querySelector(".close");
let ul=document.querySelector(".ul");
let cx=document.querySelector(".cx");

menu.addEventListener("click",function(){
    ul.classList.toggle("mostrar_ul");
    menu.style.display="none"
});
cerrar.addEventListener("click",function(){
    ul.classList.toggle("mostrar_ul");
    menu.style.display="block"
})

ul.addEventListener("click",function(u){

    cerr(u.target)

})
function cerr(c){
    if(c.className=="cx"){
        ul.classList.toggle("mostrar_ul");
        menu.style.display="block"
    }
}



