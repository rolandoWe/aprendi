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
let cx=document.querySelectorAll(".cx");

menu.addEventListener("click",function(){
    ul.classList.toggle("mostrar_ul");
    // menu.style.display="none"
});
cerrar.addEventListener("click",function(){
    ul.classList.toggle("mostrar_ul");
    // menu.style.display="block"
})

cx.forEach(x =>{
    x.addEventListener("click",function(){
        ul.classList.toggle("mostrar_ul")
    })
})

// ******************************Contenedor Digitos javascript*******************************
let numeros="";
[15].forEach(d=>{
    Array(d).fill("").forEach((x,g)=>{
        numeros+=([...Array(15).fill("<span class='numero'> 0 1 </span>")].join(""))+"<br>"
    })
})
document.querySelector(".digitos").innerHTML=numeros

let numero=document.querySelectorAll(".numero")

function anim(){
    for(let n=0;n<numero.length;n++){
        let t=[n]/50+1;
        numero[n].style.animation="animar "+ t+"s infinite"
    }
}
window.addEventListener("load",anim)

