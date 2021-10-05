
let textoP=document.querySelector(".texto_calc");
let datos=document.querySelectorAll(".dato");
let limpiar=document.querySelector(".limpiar")
let igual=document.querySelector(".igual")


function borrar(){
    textoP.value="";
    textoP.style.color="#ffffff"
}
function operacion(){
    let er="Error"
    try{
        textoP.value=eval(textoP.value)
    }
    catch(error){
        textoP.value=er;
        textoP.style.color="#ff0000"
        
    }

    // if(textoP.value=eval(textoP.value)){
    //    textoP.value 
    // }else{
    //     textoP.value="eror"
    // }
}

// ++++++++++++++++++++++
function digitando(h){
let res=h.value;
textoP.value+=res;
}
// ********************

datos.forEach(function(d){
d.addEventListener("click",function(j){
    digitando(j.target)
})
})

limpiar.addEventListener("click",function(){
    borrar()
})
igual.addEventListener("click",function(){
operacion()
})