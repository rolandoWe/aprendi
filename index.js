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

menu.addEventListener("click",function(){
    ul.classList.toggle("mostrar_ul");
});

ul.addEventListener("click",function(u){
ocultar(u.target)
console.log(u.target)
})
function ocultar(x){
if(x.className!=="ul"){
    ul.classList.toggle("mostrar_ul");

}
}

// ******************************Contenedor Digitos javascript*******************************
let numeros="";
[10].forEach(d=>{
    Array(d).fill("").forEach((x,g)=>{
        numeros+=([...Array(20).fill("<span class='numero'> 0 1 </span>")].join(""))+"<br>"
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

// ****************************para sobre mi*****************************
let btn_my=document.querySelector(".sobre_my_btn")

btn_my.addEventListener("click",function(){
    document.querySelector(".ms_my").classList.toggle("ver_ms");
    setTimeout(function(){
        document.querySelector(".ms_my").classList.remove("ver_ms")
    
    },5000)
})


// *************************colores aleatorios*************************************
let caja_color=document.querySelector(".color");
let parrafo_rgb=document.querySelector(".color_rgb");
let btn_rgb=document.querySelector(".color_btn");

function colorP(){
    let rr=Math.floor(Math.random()*256);
    let gg=Math.floor(Math.random()*256);
    let bb=Math.floor(Math.random()*256);

    let nc=`rgb(${rr} ${gg} ${bb})`;
    parrafo_rgb.style.background=nc;
}
function colorb(){
    let rr=Math.floor(Math.random()*256);
    let gg=Math.floor(Math.random()*256);
    let bb=Math.floor(Math.random()*256);

    let nb=`rgb(${rr} ${gg} ${bb})`;
    btn_rgb.style.background=nb;

}

function colores(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    let col=`rgb(${r} ${g} ${b})`;
    caja_color.style.background=col
    parrafo_rgb.innerHTML="Fondo de la caja: "+col;
    colorP()
    colorb()
}
btn_rgb.addEventListener("click",function(){
colores()
    
})
setInterval(colores,5000)

