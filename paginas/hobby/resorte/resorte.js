let b_1=document.querySelector(".btn_uno")
let b_2=document.querySelector(".btn_dos")
let arg=document.querySelector(".argollas")

b_1.addEventListener("click",function(){
    arriba()
})
b_2.addEventListener("click",function(){
    abajo()
})
let nA=85

function arriba(){
let c=nA-=10
arg.style.transform=`rotateX(${c}deg)`
}
function abajo(){
let c=nA+=10
arg.style.transform=`rotateX(${c}deg)`
}