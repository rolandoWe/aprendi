console.log("Hola Arbol")

let luces="";
[15,1,1,2].forEach(a=>{
    Array(a).fill("").forEach((x,i)=>{
        luces+=([...Array(1+i).fill("<span class='estrella'>*~*")].join(""))+"<br>"
    })
})
document.querySelector(".arbol").innerHTML=luces
// *******************************************
let estrella=document.querySelectorAll(".estrella");

function color(){
    for(l=0;l<estrella.length;l++){
        let contar=l/100+1;
        estrella[l].style.animation="colores "+ contar+"s infinite";
    }
}
window.addEventListener("load",color)