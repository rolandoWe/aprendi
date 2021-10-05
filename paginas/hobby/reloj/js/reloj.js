
function datos(){
    let dato=new Date();

    let mes=dato.getMonth(),
        diaFecha=dato.getDate(),
        año=dato.getFullYear(),
        dia=dato.getDay(),
        am,
        hora=dato.getHours(),
        minuto=dato.getMinutes()
        segundos=dato.getSeconds();

        let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre",
                 "Octubre","Noviembre","Diciembre"];
        let mes_actual=meses[mes];

        let dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        let dia_actual=dias[dia];

        am=(hora>12?"PM":"AM");
        hora=(hora>12?hora-12:hora);
        // hora=(hora<10?"0"+hora:hora);
        diaFecha=(diaFecha<10? "0"+diaFecha:diaFecha)
        minuto=(minuto<10? "0"+minuto:minuto);
        segundos=(segundos<10? "0"+segundos:segundos);
        
           
        document.querySelector(".reloj_hora").innerHTML=`${hora}:${minuto}`;
        document.querySelector(".reloj_segundos").innerHTML=segundos;
        document.querySelector(".reloj_mes").innerHTML=mes_actual;
        document.querySelector(".reloj_dias").innerHTML=`${dia_actual}  / ${diaFecha}`;
        document.querySelector(".reloj_año").innerHTML=año;
        document.querySelector(".reloj_am").innerHTML=am;
}
datos();
setInterval(datos,1000)
