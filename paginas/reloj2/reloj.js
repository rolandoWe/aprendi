
function reloj(){
    let datos=new Date()
    
    let hora=datos.getHours();
    let minuto=datos.getMinutes();
    let segundo=datos.getSeconds();

    let dia=datos.getDay();
    let fecha=datos.getDate();
    let mes=datos.getMonth();
    let año=datos.getFullYear()

    hora=(hora>12?hora-12 : hora);
    minuto=(minuto<10?"0"+minuto:minuto);
    segundo=(segundo<10?"0"+segundo:segundo);

    diaActual=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sabado"];
    let dias=diaActual[dia];

    mesHoy=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre",
            "Octubre","Noviembre","Diciembre"];
    let mesActual=mesHoy[mes]

    let verHora=`${hora}:${minuto} &nbsp  ${segundo}`;
    let verFecha=`${dias} &nbsp ${fecha} &nbsp ${mesActual} &nbsp ${año}`

    document.querySelector(".hora").innerHTML=verHora;
    document.querySelector(".fecha").innerHTML=verFecha;
}
// reloj()
setInterval(reloj, 1000)