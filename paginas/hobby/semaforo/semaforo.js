let b=document.querySelectorAll(".bola");

for(let bo=0;bo<b.length;bo++){
    b[bo].addEventListener("click",function(){
        if(b[bo].className=="bola uno"){
            b[bo].classList.add("verde");
        }
        if(b[bo].className=="bola dos"){
            b[bo].classList.add("amarillo");
        }
        if(b[bo].className=="bola tres"){
            b[bo].classList.add("rojo");
        }

        for(let mov=0;mov<b.length;mov++){
            if(mov!==bo){
                b[mov].classList.remove("verde")
                b[mov].classList.remove("rojo")
                b[mov].classList.remove("amarillo")
            }
        }
    })
}